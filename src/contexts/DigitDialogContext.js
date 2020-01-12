import React, { createContext, useReducer } from "react";
import DigitDialog from "../elements/digit-dialog";
import DigitCustomDialog from "../elements/digit-custom-dialog";
const DigitDialogContext = createContext({});

const OPEN_CUSTOM_DIALOG = "open-custom-dialog";
const OPEN_DIALOG = "open-dialog";
const CLOSE_DIALOG = "close-dialog";
const CLOSING_DIALOG = "closing-dialog";
const UPDATE_DIALOG = "update-dialog";

const dialogReducer = (state, action) => {
    switch (action.type) {
        case OPEN_CUSTOM_DIALOG:
            return {
                open: true,
                ...action.dialog,
                custom: true,
                closing: false
            };
        case OPEN_DIALOG:
            return {
                open: true,
                ...action.dialog,
                custom: false,
                closing: false
            };
        case CLOSE_DIALOG:
            return { open: false, closing: false };
        case CLOSING_DIALOG:
            return { ...state, open: false, closing: true };
        case UPDATE_DIALOG:
            return {
                ...state,
                ...action.dialog
            };
        default:
            return state;
    }
};

const DigitDialogContextSingletonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dialogReducer, { open: false });

    const handleClose = () => {
        if (state.onClose != null) {
            state.onClose();
        }
        dispatch({ type: CLOSING_DIALOG });
    };

    const handleExited = () => {
        dispatch({ type: CLOSE_DIALOG });
    };

    return (
        <DigitDialogContext.Provider value={[state, dispatch]}>
            <>
                {(state.open || state.closing) && state.custom && (
                    <DigitCustomDialog
                        onExited={handleExited}
                        open={state.open}
                        title={state.title}
                        onConfirm={state.onConfirm}
                        onCancel={state.onCancel}
                        renderMain={state.renderMain}
                        renderButtons={state.renderButtons}
                        onClose={
                            state.preventDefaultClose ? () => {} : handleClose
                        }
                    />
                )}
                {(state.open || state.closing) && !state.custom && (
                    <DigitDialog
                        onExited={handleExited}
                        open={state.open}
                        onConfirm={state.onConfirm}
                        onCancel={state.onCancel}
                        confirmButtonText={state.confirmButtonText}
                        title={state.title}
                        cancelButtonText={state.cancelButtonText}
                        description={state.description}
                        onClose={handleClose}
                    />
                )}
                {children}
            </>
        </DigitDialogContext.Provider>
    );
};

export {
    DigitDialogContextSingletonProvider,
    OPEN_CUSTOM_DIALOG,
    OPEN_DIALOG,
    CLOSING_DIALOG,
    UPDATE_DIALOG
};
export default DigitDialogContext;
