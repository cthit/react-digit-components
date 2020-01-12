import DialogContentText from "@material-ui/core/DialogContentText";
import PropTypes from "prop-types";
import React from "react";
import DigitButton from "../../elements/digit-button";
import DigitCustomDialog from "../../elements/digit-custom-dialog";

const DigitDialog = ({
    title,
    open,
    onClose,
    onCancel,
    onConfirm,
    cancelButtonText,
    confirmButtonText,
    description
}) => {
    return (
        <DigitCustomDialog
            open={open}
            title={title}
            onCancel={onCancel}
            onClose={onClose}
            onConfirm={onConfirm}
            renderMain={() => (
                <DialogContentText id="alert-dialog-description">
                    {description}
                </DialogContentText>
            )}
            renderButtons={(confirm, cancel) => (
                <>
                    <DigitButton onClick={cancel} text={cancelButtonText} />
                    <DigitButton
                        onClick={confirm}
                        primary
                        autoFocus
                        raised
                        text={confirmButtonText}
                    />
                </>
            )}
        />
    );
};

DigitDialog.displayName = "DigitDialog";
DigitDialog.propTypes = {
    /** The options for a dialog */
    /** When ok button has been pressed, onConfirm is called */
    onConfirm: PropTypes.func.isRequired,
    /** When cancel button has been pressed, onCancel is called */
    onCancel: PropTypes.func,
    /** The text for the cancel button */
    cancelButtonText: PropTypes.string,
    /** The text for the confirm button */
    confirmButtonText: PropTypes.string,
    /** If true, then the dialog opens */
    open: PropTypes.bool,
    /** The title of the dialog */
    title: PropTypes.string,
    /** The description of the dialog */
    description: PropTypes.string
};

export default DigitDialog;
