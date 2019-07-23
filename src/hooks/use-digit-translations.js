import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setActiveLanguage } from "../declaratives/digit-translations/DigitTranslations.declarative.action-creator";
import merge from "lodash/merge";

function getNewText(translations, commonTranslations, activeLanguage) {
    let newText = {};

    merge(newText, translations, commonTranslations);

    const langIndex = activeLanguage === "en" ? 0 : 1;

    Object.keys(newText).forEach(val => {
        newText[val] = newText[val][langIndex];
    });

    return newText;
}

function useDigitTranslations(translations) {
    const dispatch = useDispatch();
    const activeLanguage = useSelector(
        state => state.digitTranslations.activeLanguage
    );
    const commonTranslations = useSelector(
        state => state.digitTranslations.commonTranslations
    );
    const [text, setText] = useState({});

    //Calculates text
    useEffect(() => {
        setText(getNewText(translations, commonTranslations, activeLanguage));
    }, [
        activeLanguage,
        JSON.stringify({ ...translations, ...commonTranslations })
    ]);

    return [text, activeLanguage, lang => dispatch(setActiveLanguage(lang))];
}

export default useDigitTranslations;
