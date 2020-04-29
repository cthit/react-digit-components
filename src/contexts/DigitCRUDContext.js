import React, { createContext, useCallback, useReducer } from "react";
import useDigitTranslations from "../hooks/use-digit-translations";

const DigitCRUDContext = createContext({});

const CREATE_LOADING = "create-loading";
const CREATE_SUCCESSFULLY = "create-successfully";
const CREATE_FAILED = "create-failed";

const DELETE_LOADING = "delete-loading";
const DELETE_SUCCESSFULLY = "delete-successfully";
const DELETE_FAILED = "delete-failed";

const UPDATE_LOADING = "update-loading";
const UPDATE_SUCCESSFULLY = "update-successfully";
const UPDATE_FAILED = "update-failed";

const READ_ONE_LOADING = "read-one-loading";
const READ_ONE_SUCCESSFULLY = "read-one-successfully";
const READ_ONE_FAILED = "read-one-failed";

const READ_ALL_LOADING = "read-all-loading";
const READ_ALL_SUCCESSFULLY = "read-all-successfully";
const READ_ALL_FAILED = "read-all-failed";

const CLEAR = "clear";

function format(input, extractActiveLanguage, activeLanguage) {
    if (!extractActiveLanguage) {
        return input;
    }

    const output = {};

    for (var key in input) {
        if (input.hasOwnProperty(key)) {
            if (typeof input[key] === "object") {
                output[key] = input[key][activeLanguage];
            } else {
                output[key] = input[key];
            }
        }
    }

    return output;
}

const crudReducer = (extractActiveLanguage, activeLanguage) => (
    state,
    action
) => {
    console.log(action.type);
    switch (action.type) {
        case CREATE_LOADING:
        case DELETE_LOADING:
        case UPDATE_LOADING:
        case READ_ONE_LOADING:
        case READ_ALL_LOADING:
            return {
                one: {},
                all: [],
                loading: true
            };
        case CREATE_FAILED:
        case DELETE_FAILED:
        case UPDATE_FAILED:
        case READ_ONE_FAILED:
        case READ_ALL_FAILED:
            return {
                one: {},
                all: [],
                error: true
            };
        case READ_ALL_SUCCESSFULLY:
            return {
                one: {},
                all: action.payload.data.map(one =>
                    format(one, extractActiveLanguage, activeLanguage)
                ),
                loading: false
            };
        case READ_ONE_SUCCESSFULLY:
            //Promise array
            if (Array.isArray(action.payload.data)) {
                const results = action.payload.data.map(result => result.data);
                return {
                    one: format(
                        Object.assign(...results),
                        extractActiveLanguage,
                        activeLanguage
                    ),
                    all: []
                };
            } else {
                return {
                    one: format(
                        action.payload.data,
                        extractActiveLanguage,
                        activeLanguage
                    ),
                    all: []
                };
            }
        case UPDATE_SUCCESSFULLY:
        case DELETE_SUCCESSFULLY:
        case CREATE_SUCCESSFULLY:
        case CLEAR:
            return {
                one: {},
                all: []
            };
        default:
            return state;
    }
};

const DigitCRUDContextProvider = ({
    children,
    extractActiveLanguage = false
}) => {
    const [, activeLanguage] = useDigitTranslations();
    const reducer = useCallback(
        (state, action) =>
            crudReducer(extractActiveLanguage, activeLanguage)(state, action),
        [extractActiveLanguage, activeLanguage]
    );
    const [state, dispatch] = useReducer(reducer, { one: {}, all: [] });
    const dispatchWithPossibleSideEffect = useCallback(action => {
        if (typeof action === "function") {
            return action(dispatch);
        }

        return dispatch(action);
    }, []);

    return (
        <DigitCRUDContext.Provider
            value={[state, dispatchWithPossibleSideEffect]}
        >
            {children}
        </DigitCRUDContext.Provider>
    );
};

export {
    DigitCRUDContextProvider,
    CREATE_LOADING,
    CREATE_SUCCESSFULLY,
    CREATE_FAILED,
    DELETE_LOADING,
    DELETE_SUCCESSFULLY,
    DELETE_FAILED,
    UPDATE_LOADING,
    UPDATE_SUCCESSFULLY,
    UPDATE_FAILED,
    READ_ONE_SUCCESSFULLY,
    READ_ONE_LOADING,
    READ_ONE_FAILED,
    READ_ALL_FAILED,
    READ_ALL_LOADING,
    READ_ALL_SUCCESSFULLY,
    CLEAR
};
export default DigitCRUDContext;
