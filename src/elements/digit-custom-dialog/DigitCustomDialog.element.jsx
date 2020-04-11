import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

const DigitCustomDialog = ({
    open,
    onClose,
    onCancel,
    onConfirm,
    title,
    renderMain,
    renderButtons,
    onExited,
    size
}) => {
    const classes = useLayoutMaterialUi({ size });

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
            classes={classes}
            onExited={onExited}
            open={open || false}
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

DigitCustomDialog.propTypes = {
    /** Called either when confirm or cancel function from renderButtons has been called. Is called after onConfirm/onCancel. */
    onClose: PropTypes.func,
    /** Render for the main area of the dialog. */
    renderMain: PropTypes.func,
    /** Render for the bottom area of the dialog. Has two arguments, (confirm, cancel). Both functions that should be called when a confirm or cancel button has been clicked. */
    renderButtons: PropTypes.func,
    /** Called when material-ui has finished the out animation. As a result open should be set to false. */
    onExited: PropTypes.func,
    /** When ok button has been pressed, onConfirm is called */
    onConfirm: PropTypes.func,
    /** When cancel button has been pressed, onCancel is called */
    onCancel: PropTypes.func,
    /** If true, then the dialog is open */
    open: PropTypes.bool,
    /** Title of the dialog */
    title: PropTypes.string
};

DigitCustomDialog.defaultProps = {
    renderMain: () => null,
    renderButtons: () => null,
    onCancel: () => {},
    onConfirm: () => {},
    onClose: () => {}
};

export default DigitCustomDialog;
