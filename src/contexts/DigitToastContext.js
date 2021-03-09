import React, { createContext, useEffect, useReducer, useState } from "react";
import DigitToast from "../components/digit-toast";
const DigitToastContext = createContext({});

const QUEUE_TOAST = "queue-toast";
const POP_TOAST = "pop-toast";

const toastReducer = (state, action) => {
    switch (action.type) {
        case QUEUE_TOAST:
            return [...state, { ...action.toast }];
        case POP_TOAST:
            const newState = [...state];
            newState.pop();
            return newState;
        default:
            return state;
    }
};

const DigitToastContextSingletonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(toastReducer, []);
    const [current, setCurrent] = useState({});
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setClosing(true);
        setOpen(false);
    };

    const handleExited = () => {
        setClosing(false);
    };

    useEffect(() => {
        if (state.length > 0 && !open && !closing) {
            setCurrent(state[0]);
            setOpen(true);
            dispatch({ type: POP_TOAST });
        }
    }, [state, open, closing]);

    return (
        <DigitToastContext.Provider value={[state, dispatch]}>
            <>
                <DigitToast
                    open={open}
                    onClose={handleClose}
                    onExited={handleExited}
                    {...current}
                />
                {children}
            </>
        </DigitToastContext.Provider>
    );
};

export { DigitToastContextSingletonProvider, QUEUE_TOAST };
export default DigitToastContext;
