
import { useMemo, useContext, useEffect, useCallback, useState } from "react";
import axios from "axios";
import DigitGammaContext, {
    GET_ME_FAILED,
    GET_ME_SUCCESSFUL,
    POST_CODE_FAILED,
    POST_CODE_LOADING,
    POST_CODE_SUCCESSFUL
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
    const [codePosted, setCodePosted] = useState(false);
    const [text] = useDigitTranslations(translations);
    const [{ loading, error, me }, dispatch] = useContext(DigitGammaContext);
    const [queueToast] = useDigitToast();
    const history = useHistory();

    const code = useMemo(() => {
        const paramsResponse = new URLSearchParams(window.location.search);
        return paramsResponse.get("code");
    }, []);

    const getMe = useCallback(
        (forceRedirect = false) => {
            getRequest(getMeUrl)
                .then(response => {
                    dispatch({ type: GET_ME_SUCCESSFUL, me: response.data });
                })
                .catch(err => {
                    dispatch({ type: GET_ME_FAILED });
                    //If failed to login, then redirect to the url provided.
                    if (
                        err.response.status === 401 &&
                        (redirectAutomatically || forceRedirect)
                    ) {
                        window.location.href = err.response.data;
                    }
                });
        },
        [getMeUrl, dispatch, redirectAutomatically]
    );

    const signIn = useCallback(() => {
        getMe(true);
    }, [getMe]);

    useEffect(() => {
        if (code && !error && !codePosted && me == null) {
            history.push("/");
            setCodePosted(true);
            dispatch({ type: POST_CODE_LOADING });
            postRequest(postCodeUrl, { code })
                .then(() => {
                    dispatch({ type: POST_CODE_SUCCESSFUL });
                    getMe();
                })
                .catch(error => {
                    dispatch({ type: POST_CODE_FAILED });
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
        text.SomethingWentWrong,
        error,
        codePosted,
        setCodePosted,
        me,
        dispatch
    ]);

    useEffect(() => {
        if (loading && me == null && code == null) {
            getMe();
        }
    }, [loading, me, code, getMe]);

    return [loading, error, signIn];
}

export default useGamma;
