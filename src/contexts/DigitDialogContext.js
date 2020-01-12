import React, { createContext, useReducer } from "react";
import DigitDialog from "../views/digit-dialog/DigitDialog.view";
import DigitCustomDialog from "../elements/digit-custom-dialog";
const DigitDialogContext = createContext({});

const OPEN_CUSTOM_DIALOG = "open-custom-dialog";
const OPEN_DIALOG = "open-dialog";
const CLOSE_DIALOG = "close-dialog";

const dialogReducer = (state, action) => {
    switch (action.type) {
        case OPEN_CUSTOM_DIALOG:
            return { open: true, ...action.dialog, custom: true };
        case OPEN_DIALOG:
            return { open: true, ...action.dialog, custom: false };
        case CLOSE_DIALOG:
            return { open: false };
        default:
            return state;
    }
};

const DigitDialogContextSingletonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dialogReducer, { open: false });

    const handleClose = () => {
        dispatch({ type: CLOSE_DIALOG });
    };

    return (
        <DigitDialogContext.Provider value={[state, dispatch]}>
            <>
                {state.open && state.custom && (
                    <DigitCustomDialog
                        open={state.open}
                        title={state.title}
                        onConfirm={state.onConfirm}
                        onCancel={state.onCancel}
                        renderMain={state.renderMain}
                        renderButtons={state.renderButtons}
                        onClose={handleClose}
                    />
                )}
                {state.open && !state.custom && (
                    <DigitDialog
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

export { DigitDialogContextSingletonProvider, OPEN_CUSTOM_DIALOG, OPEN_DIALOG };
export default DigitDialogContext;
