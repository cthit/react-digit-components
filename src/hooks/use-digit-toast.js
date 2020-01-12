import { useContext } from "react";
import DigitToastContext, { SHOW_TOAST } from "../contexts/DigitToastContext";

/**
 * {
 *     text: String,
 *     duration: int in milliseconds,
 *     actionText: String,
 *     actionHandler: Callback function () => {}
 * }
 */

function useDigitToast(
    defaultToastProps = {
        duration: 5000
    }
) {
    const [, dispatch] = useContext(DigitToastContext);
    return [
        toast =>
            dispatch({
                type: SHOW_TOAST,
                toast: { ...defaultToastProps, ...toast }
            })
    ];
}

export default useDigitToast;
