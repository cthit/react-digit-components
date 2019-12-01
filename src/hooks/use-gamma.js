import axios from "axios";
import useGammaUser from "./useGammaUser";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { DigitToastActions } from "@cthit/react-digit-components";

function createGammaUserGetLoadingAction() {
    return {
        type: "GAMMA_USER_GET_LOADING",
        error: false
    };
}

function createGammaUserGetFailedAction(error) {
    return {
        type: "GAMMA_USER_GET_FAILED",
        error: false,
        payload: error
    };
}

function createGammaUserGetTokenFailedAction(error) {
    return {
        type: "GAMMA_USER_GET_TOKEN_FAILED",
        error: false,
        payload: error
    };
}

function createGammaUserGetSuccessfully(response) {
    return {
        type: "GAMMA_USER_GET_SUCCESSFULLY",
        error: false,
        payload: {
            ...response.data
        }
    };
}

function updateMe(gammaPath, dispatch, name) {
    dispatch(createGammaUserGetLoadingAction());
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
                dispatch(createGammaUserGetFailedAction(response.data));
            } else {
                dispatch(createGammaUserGetSuccessfully(response));
            }
        })
        .catch(error => {
            dispatch(createGammaUserGetFailedAction(error));
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
    const dispatch = useDispatch();
    const [loadingMe, setLoadingMe] = useState(false);
    const [user, loading, error] = useGammaUser();

    const jwtAuth = sessionStorage.getItem("auth-" + name);

    useEffect(() => {
        if (error && !loading) {
            sessionStorage.removeItem("auth-" + name);
            dispatch(
                DigitToastActions.digitToastOpen({
                    text: toastSignedOutText,
                    duration: toastDuration,
                    actionText: toastSignBackInText,
                    actionHandler: () => {
                        redirectToGamma(gammaPath, redirect, id);
                    }
                })
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
                    dispatch(createGammaUserGetTokenFailedAction(error));
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
