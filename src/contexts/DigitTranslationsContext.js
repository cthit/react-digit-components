import React, { createContext, useReducer } from "react";
const DigitTranslationsContext = createContext({});

const SET_ACTIVE_LANGUAGE = "set-active-language";
const SET_COMMON_TRANSLATIONS = "set-common-translations";

const translationsReducer = (state, action) => {
    switch (action.type) {
        case SET_ACTIVE_LANGUAGE:
            return {
                ...state,
                activeLanguage: action.activeLanguage
            };
        case SET_COMMON_TRANSLATIONS:
            return {
                ...state,
                commonTranslations: action.commonTranslations
            };
    }
};

const DigitTranslationsContextSingletonProvider = ({
    defaultLanguage = "en",
    children
}) => {
    const [state, dispatch] = useReducer(translationsReducer, {
        activeLanguage: defaultLanguage,
        commonTranslations: {}
    });

    return (
        <DigitTranslationsContext.Provider value={[state, dispatch]}>
            {children}
        </DigitTranslationsContext.Provider>
    );
};

export {
    DigitTranslationsContextSingletonProvider,
    SET_COMMON_TRANSLATIONS,
    SET_ACTIVE_LANGUAGE
};
export default DigitTranslationsContext;
