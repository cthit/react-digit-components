import {
  DIGIT_DIALOG_CLOSED_CANCEL,
  DIGIT_DIALOG_CLOSED_CONFIRM,
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
      options: options
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
