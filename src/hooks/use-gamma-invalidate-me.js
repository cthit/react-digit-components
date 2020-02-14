import { useCallback, useContext } from "react";
import DigitGammaContext, {
    GET_USER_FAILED,
    GET_USER_LOADING,
    GET_USER_SUCCESSFULLY
} from "../contexts/DigitGammaContext";
import trimEnd from "lodash/trimEnd";
import axios from "axios";

export function updateMe(dispatch, gammaPath, name) {
    dispatch({ type: GET_USER_LOADING });
    return new Promise((resolve, reject) => {
        axios
            .get(trimEnd(gammaPath, "/") + "/users/me", {
                headers: {
                    Authorization:
                        "Bearer " + sessionStorage.getItem("auth-" + name)
                }
            })
            .then(response => {
                if (typeof response.data !== "object") {
                    //prob html file that says "plz sign in"
                    dispatch({ type: GET_USER_FAILED });
                } else {
                    dispatch({
                        type: GET_USER_SUCCESSFULLY,
                        user: response.data
                    });
                    resolve(response);
                }
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: GET_USER_FAILED });
                reject(error);
            });
    });
}

function useGammaInvalidateMe() {
    const [state, dispatch] = useContext(DigitGammaContext);
    const { gammaPath, name } = state.options;
    const invalidateMe = useCallback(() => {
        return updateMe(dispatch, gammaPath, name);
    }, [gammaPath, dispatch, name]);
    return invalidateMe;
}

export default useGammaInvalidateMe;
