import axios from "axios";
import useGammaUser from "./use-gamma-user";
import { useContext, useEffect, useMemo, useState } from "react";
import DigitGammaContext, {
    GET_USER_TOKEN_FAILED,
    UPDATE_GAMMA_OPTIONS
} from "../contexts/DigitGammaContext";
import { updateMe } from "./use-gamma-invalidate-me";
import { signIn } from "./use-gamma-sign-in";
import trimEnd from "lodash/trimEnd";
import useGammaStatus from "./use-gamma-status";
import { signOut } from "./use-gamma-sign-out";
import { useHistory } from "react-router";
import useDigitToast from "./use-digit-toast";

function useGamma({
    name = "MyApp",
    id = "id",
    secret = "secret",
    redirect = "http://localhost:3001/auth/account/callback",
    gammaPath = "http://localhost:8081/api",
    forceSignedIn = true,
    toastSignedOutText = "You're signed out",
    toastSignBackInText = "Press to sign in",
    toastDuration = 5000,
    redirectToOnLogin = "/",
    signOutFromGamma = false,
    signOutTo = "/"
}) {
    const history = useHistory();
    const [state, dispatch] = useContext(DigitGammaContext);
    const [queueToast] = useDigitToast();

    const [loadingMe, setLoadingMe] = useState(false);
    const user = useGammaUser();
    const [loading, error] = useGammaStatus();

    const jwtAuth = useMemo(() => sessionStorage.getItem("auth-" + name), [
        name
    ]);

    useEffect(() => {
        dispatch({
            type: UPDATE_GAMMA_OPTIONS,
            options: {
                name,
                id,
                secret,
                redirect,
                gammaPath,
                forceSignedIn,
                toastSignedOutText,
                toastSignBackInText,
                toastDuration,
                signOutFromGamma,
                signOutTo
            }
        });
    }, [
        name,
        id,
        secret,
        redirect,
        gammaPath,
        forceSignedIn,
        toastSignedOutText,
        toastSignBackInText,
        toastDuration,
        signOutFromGamma,
        signOutTo
    ]);

    useEffect(() => {
        if (!loading && error) {
            signOut(
                name,
                queueToast,
                dispatch,
                () => signIn(gammaPath, redirect, id),
                toastSignedOutText,
                toastDuration,
                toastSignBackInText,
                gammaPath,
                forceSignedIn && signOutFromGamma,
                signOutTo,
                history
            );
        }
    }, [loading, error]);

    if (!jwtAuth && !error && !loadingMe) {
        setLoadingMe(true);
        const paramsResponse = new URLSearchParams(window.location.search);
        const code = paramsResponse.get("code");
        //check if just signed in:
        if (code) {
            const params = new URLSearchParams();
            params.append("grant_type", "authorization_code");
            params.append("client_id", id);
            params.append("redirect_uri", redirect);
            params.append("code", code);

            const c = Buffer.from(id + ":" + secret).toString("base64");

            axios
                .post(
                    trimEnd(gammaPath, "/") +
                        "/oauth/token?" +
                        params.toString(),
                    null,
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            Authorization: "Basic " + c
                        }
                    }
                )
                .then(response => {
                    history.push(redirectToOnLogin);
                    sessionStorage.setItem(
                        "auth-" + name,
                        response.data.access_token
                    );
                    setLoadingMe(true);
                    updateMe(dispatch, gammaPath, name);
                })
                .catch(error => {
                    console.log(error);
                    dispatch({ type: GET_USER_TOKEN_FAILED });
                });
        } else {
            if (forceSignedIn) {
                signIn(gammaPath, redirect, id);
            }
        }
    } else if (!user && !loadingMe) {
        setLoadingMe(true);
        updateMe(dispatch, gammaPath, name);
    }
}

export default useGamma;
