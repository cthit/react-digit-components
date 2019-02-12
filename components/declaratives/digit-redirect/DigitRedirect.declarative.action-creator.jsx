import {
    REDIRECT_FINISHED,
    REDIRECT_TO
} from "./DigitRedirect.declarative.actions";

export function digitRedirectTo(path, externalRedirect = false) {
    return {
        type: REDIRECT_TO,
        error: false,
        payload: {
            path: path,
            externalRedirect: externalRedirect
        }
    };
}

export function redirectFinished() {
    return {
        type: REDIRECT_FINISHED,
        error: false,
        payload: null
    };
}
