import {
  REDIRECT_FINISHED,
  REDIRECT_TO
} from "./DigitRedirect.declarative.actions";

export function redirect(state = {}, action) {
  switch (action.type) {
    case REDIRECT_TO:
      return {
        ...state,
        redirectPath: action.payload.path
      };
    case REDIRECT_FINISHED:
      return {
        ...state,
        redirectPath: null
      };
    default:
      return state;
  }
}
