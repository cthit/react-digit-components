import { useContext } from "react";
import DigitDialogContext, {
    OPEN_DIALOG
} from "../contexts/DigitDialogContext";

function useDigitDialog(defaultDialogProps = {}) {
    const [, dispatch] = useContext(DigitDialogContext);
    return [
        dialog =>
            dispatch({
                type: OPEN_DIALOG,
                dialog: { ...defaultDialogProps, ...dialog }
            })
    ];
}

export default useDigitDialog;
