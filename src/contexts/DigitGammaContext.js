import { createContext, useReducer } from "react";
const DigitGammaContext = createContext({});

const GET_USER_LOADING = "get-user-loading";
const GET_USER_FAILED = "get-user-failed";
const GET_USER_TOKEN_FAILED = "get-user-token-failed";
const GET_USER_SUCCESSFULLY = "get-user-successfully";

const gammaContext = (state, action) => {
    switch (action.type) {
        case GET_USER_LOADING:
            return {
                loading: true
            };
        case GET_USER_TOKEN_FAILED:
        case GET_USER_FAILED:
            return {
                loading: false,
                error: true
            };
        case GET_USER_SUCCESSFULLY:
            return {
                user: {
                    ...action.user
                },
                loading: false,
                error: false
            };
    }
};

const DigitGammaContextSingletonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gammaContext, {
        user: null,
        loading: true,
        error: false
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
    GET_USER_TOKEN_FAILED
};
export default DigitGammaContext;
