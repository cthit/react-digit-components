import React, { createContext, useReducer } from "react";
const DigitGammaContext = createContext({});

const GET_ME_LOADING = "get-me-loading";
const GET_ME_FAILED = "get-me-failed";
const GET_ME_SUCCESSFUL = "get-me-successful";

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
                me: null,
                loading: false,
                error: true
            };
        case GET_ME_SUCCESSFUL:
            return {
                me: action.me,
                loading: false,
                error: false
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
    GET_ME_SUCCESSFUL
};

export default DigitGammaContext;
