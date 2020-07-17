import React, { createContext, useReducer } from "react";
const DigitGammaContext = createContext({});

const GET_ME_LOADING = "get-me-loading";
const GET_ME_FAILED = "get-me-failed";
const GET_ME_SUCCESSFUL = "get-me-successful";
const POST_CODE_LOADING = "post-code-loading";
const POST_CODE_FAILED = "post-code-failed";
const POST_CODE_SUCCESSFUL = "post-code-successful";

const defaultState = {
    me: null,
    loading: true,
    error: false
};

const gammaReducer = (state, action) => {
    switch (action.type) {
        case GET_ME_LOADING:
            return { ...defaultState };
        case GET_ME_FAILED:
            return {
                ...state,
                me: null,
                loading: false,
                error: true
            };
        case GET_ME_SUCCESSFUL:
            return {
                ...state,
                me: action.me,
                loading: false,
                error: false
            };
        case POST_CODE_LOADING:
            return {
                ...state,
                me: null,
                loading: true,
                error: false
            };
        case POST_CODE_SUCCESSFUL:
            return {
                ...state,
                loading: true,
                error: false
            };
        case POST_CODE_FAILED:
            return {
                ...state,
                me: null,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

const DigitGammaContextSingletonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gammaReducer, { ...defaultState });

    return (
        <DigitGammaContext.Provider value={[state, dispatch]}>
            {children}
        </DigitGammaContext.Provider>
    );
};

export {
    DigitGammaContextSingletonProvider,
    GET_ME_LOADING,
    GET_ME_FAILED,
    GET_ME_SUCCESSFUL,
    POST_CODE_LOADING,
    POST_CODE_FAILED,
    POST_CODE_SUCCESSFUL
};

export default DigitGammaContext;
