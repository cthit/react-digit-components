import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const DigitCustomDialog = ({
    open,
    onClose,
    onCancel,
    onConfirm,
    title,
    renderMain,
    renderButtons,
    onExited
}) => {
    const cancel = () => {
        onCancel();
        onClose();
    };
    const confirm = () => {
        onConfirm();
        onClose();
    };

    return (
        <Dialog
            onExited={onExited}
            open={open}
            onClose={cancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>{renderMain()}</DialogContent>
            <DialogActions>{renderButtons(confirm, cancel)}</DialogActions>
        </Dialog>
    );
};

DigitCustomDialog.defaultProps = {
    renderMain: () => null,
    renderButtons: () => null,
    onCancel: () => {},
    onConfirm: () => {},
    onClose: () => {}
};

export default DigitCustomDialog;
