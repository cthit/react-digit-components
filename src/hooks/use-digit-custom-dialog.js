import { useContext } from "react";
import DigitDialogContext, {
    CLOSING_DIALOG,
    OPEN_CUSTOM_DIALOG,
    UPDATE_DIALOG
} from "../contexts/DigitDialogContext";

function useDigitCustomDialog(defaultCustomDialogProps) {
    const [, dispatch] = useContext(DigitDialogContext);
    return [
        dialog =>
            dispatch({
                type: OPEN_CUSTOM_DIALOG,
                dialog: { ...defaultCustomDialogProps, ...dialog }
            }),
        () =>
            dispatch({
                type: CLOSING_DIALOG
            }),
        dialog =>
            dispatch({
                type: UPDATE_DIALOG,
                dialog
            })
    ];
}

export default useDigitCustomDialog;
