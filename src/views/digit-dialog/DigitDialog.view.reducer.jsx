import {
    DIGIT_DIALOG_CLOSED_CANCEL,
    DIGIT_DIALOG_CLOSED_CONFIRM,
    DIGIT_DIALOG_CUSTOM_OPEN,
    DIGIT_DIALOG_OPEN
} from "./DigitDialog.view.actions";

export function dialog(state = null, action) {
    switch (action.type) {
        case DIGIT_DIALOG_OPEN:
            return {
                ...action.payload.options,
                open: true,
                custom: false
            };
        case DIGIT_DIALOG_CLOSED_CONFIRM:
            return {
                ...state,
                open: false
            };
        case DIGIT_DIALOG_CLOSED_CANCEL:
            return {
                ...state,
                open: false
            };
        case DIGIT_DIALOG_CUSTOM_OPEN:
            return {
                ...action.payload.options,
                open: true,
                custom: true
            };
        default:
            return state;
    }
}
