import {
    DIGIT_TRANSLATIONS_SET_ACTIVE_LANGUAGE,
    DIGIT_TRANSLATIONS_SET_COMMON_TRANSLATIONS
} from "./DigitTranslations.declarative.actions";

export function digitTranslations(state = { activeLanguage: "sv" }, action) {
    switch (action.type) {
        case DIGIT_TRANSLATIONS_SET_ACTIVE_LANGUAGE:
            return {
                ...state,
                activeLanguage: action.payload.activeLanguage
            };
        case DIGIT_TRANSLATIONS_SET_COMMON_TRANSLATIONS:
            return {
                ...state,
                commonTranslations: action.payload.commonTranslations
            };
        default:
            return state;
    }
}
