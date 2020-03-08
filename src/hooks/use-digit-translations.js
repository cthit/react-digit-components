import { useCallback, useContext, useEffect, useState } from "react";

import merge from "lodash/merge";
import DigitTranslationsContext, {
    SET_ACTIVE_LANGUAGE,
    SET_COMMON_TRANSLATIONS
} from "../contexts/DigitTranslationsContext";

function getNewText(translations, commonTranslations, activeLanguage) {
    let newText = {};

    merge(newText, translations, commonTranslations);

    const langIndex = activeLanguage === "en" ? 0 : 1;

    Object.keys(newText).forEach(val => {
        newText[val] = newText[val][langIndex];
    });

    return newText;
}

function useDigitTranslations(translations = {}) {
    const [state, dispatch] = useContext(DigitTranslationsContext);
    const { activeLanguage, commonTranslations } = state;
    const [text, setText] = useState({});

    //Calculates text
    useEffect(() => {
        setText(getNewText(translations, commonTranslations, activeLanguage));
    }, [
        activeLanguage,
        JSON.stringify(translations),
        JSON.stringify(commonTranslations)
    ]);

    const setActiveLanguageCallback = useCallback(
        lang => dispatch({ type: SET_ACTIVE_LANGUAGE, activeLanguage: lang }),
        [dispatch]
    );

    const setCommonTranslationsCallback = useCallback(
        commonTranslations =>
            dispatch({ type: SET_COMMON_TRANSLATIONS, commonTranslations }),
        [dispatch]
    );

    return [
        text,
        activeLanguage,
        setActiveLanguageCallback,
        setCommonTranslationsCallback
    ];
}

export default useDigitTranslations;
