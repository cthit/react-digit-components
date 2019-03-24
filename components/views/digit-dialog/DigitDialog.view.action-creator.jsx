import {
    DIGIT_DIALOG_CLOSED_CANCEL,
    DIGIT_DIALOG_CLOSED_CONFIRM,
    DIGIT_DIALOG_CUSTOM_OPEN,
    DIGIT_DIALOG_OPEN
} from "./DigitDialog.view.actions";

/*
 * Options
 *  - title
 *  - description
 *  - cancelButtonText
 *  - confirmButtonText
 */
export function digitDialogOpen(options) {
    return {
        type: DIGIT_DIALOG_OPEN,
        error: false,
        payload: {
            options
        }
    };
}

/**
 * Options
 *  - renderMain
 *  - title
 *  - renderButtons
 */
export function digitDialogCustomOpen(options) {
    return {
        type: DIGIT_DIALOG_CUSTOM_OPEN,
        error: false,
        payload: {
            options
        }
    };
}

export function digitDialogClosedConfirm() {
    return {
        type: DIGIT_DIALOG_CLOSED_CONFIRM,
        error: false
    };
}

export function digitDialogClosedCancel() {
    return {
        type: DIGIT_DIALOG_CLOSED_CANCEL,
        error: false
    };
}
