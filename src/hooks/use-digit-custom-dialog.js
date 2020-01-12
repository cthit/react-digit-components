import { useContext } from "react";
import DigitDialogContext, {
    OPEN_CUSTOM_DIALOG
} from "../contexts/DigitDialogContext";

function useDigitCustomDialog(defaultCustomDialogProps) {
    const [, dispatch] = useContext(DigitDialogContext);
    return [
        dialog =>
            dispatch({
                type: OPEN_CUSTOM_DIALOG,
                dialog: { ...defaultCustomDialogProps, ...dialog }
            })
    ];
}

export default useDigitCustomDialog;
