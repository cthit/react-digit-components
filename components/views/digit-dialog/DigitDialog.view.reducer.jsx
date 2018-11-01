import {
  DIGIT_DIALOG_OPEN,
  DIGIT_DIALOG_CLOSED_CONFIRM,
  DIGIT_DIALOG_CLOSED_CANCEL
} from "./DigitDialog.view.actions";

export function dialog(state = null, action) {
  switch (action.type) {
    case DIGIT_DIALOG_OPEN:
      return {
        ...action.payload.options,
        open: true
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
    default:
      return state;
  }
}
