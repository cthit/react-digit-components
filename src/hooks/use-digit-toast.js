import { useCallback, useContext } from "react";
import DigitToastContext, { QUEUE_TOAST } from "../contexts/DigitToastContext";

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
    const queueToast = useCallback(
        toast => {
            dispatch({
                type: QUEUE_TOAST,
                toast: { ...defaultToastProps, ...toast }
            });
        },
        [JSON.stringify(defaultToastProps), dispatch]
    );

    return [queueToast];
}

export default useDigitToast;
