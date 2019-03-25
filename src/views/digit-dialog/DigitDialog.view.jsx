import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { DigitButton, DigitIfElseRendering } from "../../index";

class DigitDialog extends React.Component {
    state = {
        open: false
    };

    componentDidUpdate(prevProps) {
        if (this.state.open !== this.props.options.open) {
            this.setState({ open: true });
        }
    }

    render() {
        const {
            options,
            digitDialogClosedCancel,
            digitDialogClosedConfirm,
            custom
        } = this.props;

        const { open } = this.state;

        console.log(options);

        return (
            <DigitIfElseRendering
                test={options != null}
                ifRender={() => (
                    <Dialog
                        open={open}
                        onClose={() => {
                            digitDialogClosedCancel();
                            this.setState({ open: false });
                        }}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {options != null ? options.title : ""}
                        </DialogTitle>
                        <DialogContent>
                            <DigitIfElseRendering
                                test={custom}
                                ifRender={options.renderMain}
                                elseRender={() => (
                                    <DialogContentText id="alert-dialog-description">
                                        {options != null
                                            ? options.description
                                            : ""}
                                    </DialogContentText>
                                )}
                            />
                        </DialogContent>
                        <DialogActions>
                            <DigitIfElseRendering
                                test={custom}
                                ifRender={options.renderButtons}
                                elseRender={() => (
                                    <>
                                        <DigitButton
                                            onClick={e => {
                                                digitDialogClosedCancel();
                                                if (options.onCancel != null) {
                                                    options.onCancel(e);
                                                }
                                                this.setState({ open: false });
                                            }}
                                            primary
                                            text={
                                                options != null
                                                    ? options.cancelButtonText
                                                    : ""
                                            }
                                        />
                                        <DigitButton
                                            onClick={e => {
                                                digitDialogClosedConfirm();
                                                options.onConfirm(e);
                                                this.setState({ open: false });
                                            }}
                                            primary
                                            autoFocus
                                            raised
                                            text={
                                                options != null
                                                    ? options.confirmButtonText
                                                    : ""
                                            }
                                        />
                                    </>
                                )}
                            />
                        </DialogActions>
                    </Dialog>
                )}
            />
        );
    }
}

DigitDialog.displayName = "DigitDialog";
DigitDialog.propTypes = {
    /** The options for a dialog */
    options: PropTypes.shape({
        /** When ok button has been pressed, onConfirm is called */
        onConfirm: PropTypes.func.isRequired,
        /** When cancel button has been pressed, onCancel is called */
        onCancel: PropTypes.func,
        /** The text for the cancel button */
        cancelButtonText: PropTypes.string,
        /** The text for the confirm button */
        confirmButtonText: PropTypes.text,
        /** If true, then the dialog opens */
        open: PropTypes.bool,
        /** The title of the dialog */
        title: PropTypes.string,
        /** The description of the dialog */
        description: PropTypes.string,
        /** If custom, you can render custom stuff*/
        renderMain: PropTypes.func,
        /** if custom, you can render buttons stuff*/
        renderButtons: PropTypes.func
    })
};

DigitDialog.defaultProps = {
    options: {
        renderMain: () => null,
        renderButtons: () => null
    }
};

export default DigitDialog;
