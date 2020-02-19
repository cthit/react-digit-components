import { useCallback, useContext, useEffect, useState } from "react";
import trimEnd from "lodash/trimEnd";
import DigitGammaContext from "../contexts/DigitGammaContext";

export function signIn(gammaPath, redirect, id) {
    if (gammaPath != null && redirect != null && id != null) {
        const baseUrl = trimEnd(gammaPath, "/") + "/oauth/authorize";
        const responseType = "response_type=code";
        const clientId = "client_id=" + id;
        const redirectUri = "redirect_uri=" + redirect;
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
