import { useCallback, useContext } from "react";
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
    const signInCB = useCallback(() => {
        signIn(gammaPath, redirect, id);
    }, [gammaPath, redirect, id]);
    return signInCB;
}

export default useGammaSignIn;
