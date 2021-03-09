import { useCallback, useMemo, useState } from "react";

function useDigitCRUDStatus(statusHandlers, statusRenders) {
    const [status, setStatus] = useState(-1);
    const [error, setError] = useState(null);
    const [read, setRead] = useState(true);

    const reset = useCallback(
        (_read = false) => {
            setStatus(-1);
            setError(null);
            setRead(_read);
        },
        [setStatus, setError]
    );

    const statusHandle = (status, error) => {
        const handle = statusHandlers[status];
        setError(error);
        setStatus(status);

        if (handle != null) {
            handle(error, () => reset(true));
        }
    };

    const statusRender = useMemo(() => {
        if (status === -1 || statusRenders[status] == null) {
            return null;
        }

        return () => statusRenders[status](error, () => reset(true));
    }, [status, statusRenders, error, reset]);

    return [statusHandle, statusRender, reset, read, setRead];
}

export default useDigitCRUDStatus;
