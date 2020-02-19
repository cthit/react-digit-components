import { useCallback, useContext } from "react";
import DigitDialogContext, {
    OPEN_DIALOG
} from "../contexts/DigitDialogContext";

function useDigitDialog(defaultDialogProps = {}) {
    const [, dispatch] = useContext(DigitDialogContext);
    const showDialog = useCallback(
        dialog =>
            dispatch({
                type: OPEN_DIALOG,
                dialog: { ...defaultDialogProps, ...dialog }
            }),
        [JSON.stringify(defaultDialogProps), dispatch]
    );

    return [showDialog];
}

export default useDigitDialog;
