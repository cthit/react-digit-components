import React, { createContext, useReducer } from "react";
const DigitGammaContext = createContext({});

const NOT_SIGNED_IN = "no-user";
const GET_USER_LOADING = "get-user-loading";
const REFRESH_USER_LOADING = "refresh-user-loading";
const GET_USER_FAILED = "get-user-failed";
const GET_USER_TOKEN_FAILED = "get-user-token-failed";
const GET_USER_SUCCESSFULLY = "get-user-successfully";
const UPDATE_GAMMA_OPTIONS = "update-gamma-options";
const SIGN_OUT = "sign-out";

const gammaContext = (state, action) => {
    console.log(action.type + "!");
    switch (action.type) {
        case REFRESH_USER_LOADING:
            return {
                ...state,
                loading: true,
                error: false
            };
        case GET_USER_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                user: null
            };
        case GET_USER_TOKEN_FAILED:
        case GET_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                user: null
            };
        case GET_USER_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                error: false,
                user: {
                    ...action.user
                }
            };
        case UPDATE_GAMMA_OPTIONS:
            return {
                ...state,
                ready: true,
                options: {
                    ...action.options
                }
            };
        case NOT_SIGNED_IN:
        case SIGN_OUT:
            return {
                ...state,
                loading: false,
                error: false,
                user: null
            };
        default:
            return state;
    }
};

const DigitGammaContextSingletonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gammaContext, {
        user: null,
        loading: true,
        error: false,
        options: {}
    });

    return (
        <DigitGammaContext.Provider value={[state, dispatch]}>
            {children}
        </DigitGammaContext.Provider>
    );
};

export {
    DigitGammaContextSingletonProvider,
    GET_USER_SUCCESSFULLY,
    GET_USER_FAILED,
    GET_USER_LOADING,
    GET_USER_TOKEN_FAILED,
    UPDATE_GAMMA_OPTIONS,
    SIGN_OUT,
    REFRESH_USER_LOADING,
    NOT_SIGNED_IN
};
export default DigitGammaContext;
