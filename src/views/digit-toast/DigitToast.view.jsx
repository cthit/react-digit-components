import PropTypes from "prop-types";
import React from "react";
import { StyledSnackbar, ToastButton } from "./DigitToast.view.styles";

const DigitToast = ({
    open,
    onClose,
    onExited,
    duration,
    text,
    actionText,
    actionHandler
}) => {
    return (
        <StyledSnackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
            }}
            autoHideDuration={duration}
            open={open}
            onClose={onClose}
            onExited={onExited}
            message={<span>{text}</span>}
            action={
                <>
                    {actionText != null && (
                        <ToastButton
                            key="undo"
                            color="secondary"
                            size="small"
                            onClick={() => {
                                actionHandler();
                                onClose();
                            }}
                        >
                            {actionText}
                        </ToastButton>
                    )}
                </>
            }
        />
    );
};

DigitToast.displayName = "DigitToast";
DigitToast.propTypes = {
    /** The text inside the toast */
    text: PropTypes.string,
    /** The duration in miliseconds of the toast */
    duration: PropTypes.number,
    /** Callback function when you press the button on a toast */
    actionHandler: PropTypes.func,
    /** Button text */
    actionText: PropTypes.string
};

export default DigitToast;
