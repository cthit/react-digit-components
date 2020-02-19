import { useCallback, useContext, useEffect, useState } from "react";
import trimEnd from "lodash/trimEnd";
import DigitGammaContext from "../contexts/DigitGammaContext";

export function signIn(gammaPath, redirect, id) {
    console.log("?");
    console.log("Input: " + gammaPath + "; " + redirect + "; " + id);
    if (gammaPath != null && redirect != null && id != null) {
        console.log("yeah");
        const baseUrl = trimEnd(gammaPath, "/") + "/oauth/authorize";
        const responseType = "response_type=code";
        const clientId = "client_id=" + id;
        const redirectUri = "redirect_uri=" + redirect;
        console.log(
            "redirecting to: " +
                baseUrl +
                "?" +
                responseType +
                "&" +
                clientId +
                "&" +
                redirectUri
        );
        window.location.href =
            baseUrl + "?" + responseType + "&" + clientId + "&" + redirectUri;
    }
}

function useGammaSignIn() {
    const [state] = useContext(DigitGammaContext);
    const { gammaPath, redirect, id } = state.options;

    return useCallback(() => signIn(gammaPath, redirect, id), [
        JSON.stringify(state.options)
    ]);
}

export default useGammaSignIn;
