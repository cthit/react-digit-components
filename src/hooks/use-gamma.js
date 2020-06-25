import { useMemo, useContext, useEffect, useCallback, useState } from "react";
import axios from "axios";
import DigitGammaContext, {
    GET_ME_SUCCESSFUL
} from "../contexts/DigitGammaContext";
import useDigitToast from "./use-digit-toast";
import useDigitTranslations from "./use-digit-translations";
import trimEnd from "lodash/trimEnd";
import { useHistory } from "react-router-dom";

const translations = {
    SomethingWentWrong: [
        "Something went wrong when trying to sign in",
        "Någonting gick fel med inloggningen"
    ]
};

const getRequest = endpoint => axios.get(removeLastSlash(endpoint));

const postRequest = (endpoint, data) =>
    axios.post(removeLastSlash(endpoint), data);

function removeLastSlash(path) {
    return trimEnd(path, "/");
}

function useGamma(
    getMeUrl = "/api/me",
    postCodeUrl = "/api/auth",
    redirectAutomatically = true
) {
    const [text] = useDigitTranslations(translations);
    const [{ loading, error, me }, dispatch] = useContext(DigitGammaContext);
    const [queueToast] = useDigitToast();
    const history = useHistory();
    const [forceRedirect, setForceRedirect] = useState(false);

    const code = useMemo(() => {
        const paramsResponse = new URLSearchParams(window.location.search);
        return paramsResponse.get("code");
    }, []);

    const getMe = useCallback(() => {
        getRequest(getMeUrl)
            .then(response => {
                dispatch({ type: GET_ME_SUCCESSFUL, me: response.data });
            })
            .catch(err => {
                //If failed to login, then redirect to the url provided.
                if (
                    err.response.status === 401 &&
                    (redirectAutomatically || forceRedirect)
                ) {
                    window.location.href = err.response.data;
                    setForceRedirect(false);
                }
            });
    }, [
        getMeUrl,
        dispatch,
        forceRedirect,
        setForceRedirect,
        redirectAutomatically
    ]);

    const signIn = useCallback(() => {
        setForceRedirect(true);
        getMe();
    }, [setForceRedirect, getMe]);

    useEffect(() => {
        if (code) {
            postRequest(postCodeUrl, { code })
                .then(() => {
                    history.push("/");
                    getMe();
                })
                .catch(error => {
                    history.push("/");
                    queueToast({ text: text.SomethingWentWrong });
                    console.log("Something went wrong...");
                    console.log(error);
                });
        }
    }, [
        code,
        history,
        postCodeUrl,
        queueToast,
        getMe,
        text.SomethingWentWrong
    ]);

    useEffect(() => {
        if (loading && me == null && code == null) {
            getMe();
        }
    }, [loading, me, code, getMe]);

    return [loading, error, signIn];
}

export default useGamma;
