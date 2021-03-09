import PropTypes from "prop-types";
import React from "react";
import { ToastButton } from "./DigitToast.element.styles";
import CloseIcon from "@material-ui/icons/Close";
import DigitIconButton from "../digit-icon-button";
import Snackbar from "@material-ui/core/Snackbar";

const DigitToast = ({
    open,
    onClose,
    onExited,
    duration,
    text,
    actionText,
    actionHandler,
    disableCloseable
}) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
            }}
            autoHideDuration={duration}
            open={open}
            message={<span>{text}</span>}
            TransitionProps={{
                onClose,
                onExited
            }}
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
                    {!disableCloseable && (
                        <DigitIconButton
                            icon={CloseIcon}
                            onClick={onClose}
                            small
                        />
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
    /** The duration in milliseconds of the toast */
    duration: PropTypes.number,
    /** Callback function when you press the button on a toast */
    actionHandler: PropTypes.func,
    /** Button text */
    actionText: PropTypes.string,
    /** If true, then there's no close button */
    disableCloseable: PropTypes.bool
};

export default DigitToast;
