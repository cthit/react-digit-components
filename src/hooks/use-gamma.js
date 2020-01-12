import axios from "axios";
import useGammaUser from "./use-gamma-user";
import _ from "lodash";
import { useContext, useEffect, useMemo, useState } from "react";
import DigitGammaContext, {
    GET_USER_FAILED,
    GET_USER_LOADING,
    GET_USER_SUCCESSFULLY,
    GET_USER_TOKEN_FAILED
} from "../contexts/DigitGammaContext";
import useDigitToast from "./use-digit-toast";

function updateMe(gammaPath, dispatch, name) {
    dispatch({ type: GET_USER_LOADING });
    axios
        .get(removeLastSlash(gammaPath) + "/users/me", {
            headers: {
                Authorization:
                    "Bearer " + sessionStorage.getItem("auth-" + name)
            }
        })
        .then(response => {
            if (typeof response.data !== "object") {
                //prob html file that says "plz sign in"
                console.log(response);
                dispatch({ type: GET_USER_FAILED });
            } else {
                dispatch({ type: GET_USER_SUCCESSFULLY, user: response.data });
            }
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: GET_USER_FAILED });
        });
}

function removeLastSlash(path) {
    return _.trimEnd(path, "/");
}

function redirectToGamma(gammaPath, redirect, id) {
    const baseUrl = removeLastSlash(gammaPath) + "/oauth/authorize";
    const responseType = "response_type=code";
    const clientId = "client_id=" + id;
    const redirectUri = "redirect_uri=" + redirect;
    window.location.href =
        baseUrl + "?" + responseType + "&" + clientId + "&" + redirectUri;
}

function signOut(name) {
    sessionStorage.removeItem("auth-" + name);
    window.location.href = "/";
}

function useGamma(
    name = "MyApp",
    id = "id",
    secret = "secret",
    redirect = "http://localhost:3001/auth/account/callback",
    gammaPath = "http://localhost:8081/api",
    forceSignedIn = true,
    toastSignedOutText = "You're signed out",
    toastSignBackInText = "Press to sign in",
    toastDuration = 5000
) {
    const [, dispatch] = useContext(DigitGammaContext);
    const [loadingMe, setLoadingMe] = useState(false);
    const [user, loading, error] = useGammaUser();
    const [queueToast] = useDigitToast({
        actionHandler: () => {
            redirectToGamma(gammaPath, redirect, id);
        },
        text: toastSignedOutText,
        duration: toastDuration,
        actionText: toastSignBackInText
    });

    const jwtAuth = useMemo(() => sessionStorage.getItem("auth-" + name), [
        name
    ]);

    useEffect(() => {
        if (error && !loading) {
            sessionStorage.removeItem("auth-" + name);
            queueToast();
        }
    }, [
        loading,
        error,
        dispatch,
        gammaPath,
        id,
        name,
        redirect,
        toastDuration,
        toastSignBackInText,
        toastSignedOutText
    ]);

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
                    removeLastSlash(gammaPath) +
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
                    window.location.href = "/";
                    sessionStorage.setItem(
                        "auth-" + name,
                        response.data.access_token
                    );
                    setLoadingMe(true);
                    updateMe(gammaPath, dispatch, name);
                })
                .catch(error => {
                    console.log(error);
                    dispatch({ type: GET_USER_TOKEN_FAILED });
                });
        } else {
            if (forceSignedIn) {
                redirectToGamma(gammaPath, redirect, id);
            }
        }
    } else if (!user && !loadingMe) {
        setLoadingMe(true);
        updateMe(gammaPath, dispatch, name);
    }
    return [
        loading,
        error,
        () => redirectToGamma(gammaPath, redirect, id),
        () => signOut(name)
    ];
}

export default useGamma;
