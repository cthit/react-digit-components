import {
    DIGIT_TRANSLATIONS_SET_ACTIVE_LANGUAGE,
    DIGIT_TRANSLATIONS_SET_COMMON_TRANSLATIONS
} from "./DigitTranslations.declarative.actions";

export function setCommonTranslations(commonTranslations) {
    return {
        type: DIGIT_TRANSLATIONS_SET_COMMON_TRANSLATIONS,
        error: false,
        payload: {
            commonTranslations: commonTranslations
        }
    };
}

export function setActiveLanguage(lang) {
    return {
        type: DIGIT_TRANSLATIONS_SET_ACTIVE_LANGUAGE,
        error: false,
        payload: {
            activeLanguage: lang
        }
    };
}
