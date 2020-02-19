import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import DigitGammaContext, {
    GET_USER_TOKEN_FAILED,
    UPDATE_GAMMA_OPTIONS
} from "../contexts/DigitGammaContext";
import useGammaInvalidateMe from "./use-gamma-invalidate-me";
import useGammaSignIn from "./use-gamma-sign-in";
import trimEnd from "lodash/trimEnd";
import useGammaStatus from "./use-gamma-status";
import { useHistory } from "react-router";
import useGammaSignOut from "./use-gamma-sign-out";

function postCode(code, gammaPath, id, redirect, secret) {
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("client_id", id);
    params.append("redirect_uri", redirect);
    params.append("code", code);

    const c = Buffer.from(id + ":" + secret).toString("base64");

    return axios.post(
        trimEnd(gammaPath, "/") + "/oauth/token?" + params.toString(),
        null,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + c
            }
        }
    );
}

function getCode() {
    const paramsResponse = new URLSearchParams(window.location.search);
    return paramsResponse.get("code");
}

//https://mermaid-js.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiZ3JhcGggVERcbiAgQVtXZWJzaXRlIGlzIGxvYWRlZF0gLS0-IElcbiAgSVtEb2VzIGEgY29kZSBleGlzdCBpbiB0aGUgdXJsP11cbiAgSSAtLT4gfE5vfCBCXG4gIEkgLS0-IHxZZXN8IEpcbiAgQntEb2VzIGFuZCBKV1Q8YnI-IHRva2VuIGV4aXN0IGluIHN0b3JhZ2U_fVxuICBCIC0tPnxZZXN8IENcbiAgQiAtLT58Tm98IERcbiAgQ1tUcnkgZ2V0dGluZyAvbWVdXG4gIER7Zm9yY2VkU2lnbmVkSW4_fVxuICBEIC0tPnxZZXN8IEVcbiAgRCAtLT58Tm98IEVSUk9SX0VORFxuICBFW1JlZGlyZWN0IHRvIEdhbW1hXVxuXG4gIEMgLS0-IEZcbiAgRntTdWNjZXNzZnVsP31cbiAgRiAtLT4gfFllc3wgR1xuICBGIC0tPiB8Tm98IERcbiAgR1tTYXZlIHVzZXJdIC0tPiBFTkRcblxuICBKW1RyeSBwb3N0aW5nIHRoZSBjb2RlXVxuICBKIC0tPiBMXG4gIEwgLS0-IEtcbiAgS3tTdWNjZXNzZnVsP31cbiAgSyAtLT4gfFllc3wgTVxuICBLIC0tPiB8Tm98IEVSUk9SX0VORFxuICBMW1JlZGlyZWN0IHRvIC8gXVxuICBcblxuICBNW1RyeSBnZXR0aW5nIC9tZV1cblxuICBNIC0tPiBQXG4gIFB7U3VjY2Vzc2Z1bD99XG4gIFAgLS0-IHxZZXN8IEdcbiAgUCAtLT4gfE5vfCBFUlJPUl9FTkRcblxuXG5cbiAgRVJST1JfRU5EW0Vycm9yIV0gLS0-IEVORFxuICBFTkRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9
const defaultValues = {
    name: "MyApp",
    id: "id",
    secret: "secret",
    redirect: "http://localhost:3001/auth/account/callback",
    gammaPath: "http://localhost:8081/api",
    forceSignedIn: true,
    signOutFromGamma: false,
    toastSignedOutText: "You're signed out",
    toastSignBackInText: "Press to sign in",
    toastDuration: 5000,
    redirectToOnLogin: "/",
    signOutTo: "/",
    refreshOnFocus: false,
    toast: true
};

function useGamma(props) {
    const {
        name,
        id,
        secret,
        redirect,
        gammaPath,
        forceSignedIn,
        redirectToOnLogin,
        refreshOnFocus
    } = props;

    const history = useHistory();
    const [state, dispatch] = useContext(DigitGammaContext);
    const signIn = useGammaSignIn();
    const signOut = useGammaSignOut();

    const [ran, setRan] = useState(false);
    const [loading, error] = useGammaStatus();
    const invalidateMe = useGammaInvalidateMe();

    console.log("loading: " + loading + "; error: " + error);

    useEffect(() => {
        setRan(false);
        dispatch({
            type: UPDATE_GAMMA_OPTIONS,
            options: {
                ...defaultValues,
                ...props
            }
        });
    }, [JSON.stringify(props)]);

    const onFocus = useCallback(() => {
        console.log("FOCUS");
        if (document.visibilityState === "visible") {
            console.log("HE");
            setRan(false);
        }
    }, []);

    useEffect(() => {
        if (refreshOnFocus) {
            console.log("Add listener");
            window.addEventListener("visibilitychange", onFocus);
        }
        return () =>
            refreshOnFocus
                ? window.removeEventListener("visibilitychange", onFocus)
                : null;
    }, [refreshOnFocus]);

    console.log(state);
    console.log("ran: " + ran);

    if (!state.ready || ran) {
        return;
    }

    setRan(true);

    const code = getCode();

    if (code) {
        history.push("/");
        postCode(code, gammaPath, id, redirect, secret)
            .then(response => {
                history.push(redirectToOnLogin);
                sessionStorage.setItem(
                    "auth-" + name,
                    response.data.access_token
                );
                invalidateMe();
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: GET_USER_TOKEN_FAILED });
                signOut();
            });
    } else {
        const jwtToken = sessionStorage.getItem("auth-" + name);
        if (jwtToken) {
            invalidateMe().catch(() => {
                sessionStorage.removeItem("auth-" + name);
                if (forceSignedIn) {
                    signIn();
                } else {
                    signOut();
                }
            });
        } else {
            if (forceSignedIn) {
                signIn();
            } else {
                signOut();
            }
        }
    }
}

export default useGamma;
