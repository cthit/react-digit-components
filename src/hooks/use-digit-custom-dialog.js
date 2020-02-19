import { useCallback, useContext } from "react";
import DigitDialogContext, {
    CLOSING_DIALOG,
    OPEN_CUSTOM_DIALOG,
    UPDATE_DIALOG
} from "../contexts/DigitDialogContext";

function useDigitCustomDialog(defaultCustomDialogProps) {
    const [, dispatch] = useContext(DigitDialogContext);
    const showDialog = useCallback(
        dialog =>
            dispatch({
                type: OPEN_CUSTOM_DIALOG,
                dialog: { ...defaultCustomDialogProps, ...dialog }
            }),
        [JSON.stringify(defaultCustomDialogProps), dispatch]
    );

    const closeDialog = useCallback(
        () =>
            dispatch({
                type: CLOSING_DIALOG
            }),
        [dispatch]
    );

    const updateDialog = useCallback(
        dialog =>
            dispatch({
                type: UPDATE_DIALOG,
                dialog
            }),
        [dispatch]
    );

    return [showDialog, closeDialog, updateDialog];
}

export default useDigitCustomDialog;
