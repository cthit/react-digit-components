import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import React from "react";
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";
import DigitButton from "../../elements/digit-button";

class DigitDialog extends React.Component {
    state = {
        open: false
    };

    componentDidUpdate(prevProps) {
        if (this.state.open !== this.props.options.open) {
            this.setState({ open: true });
        }
    }

    cancel = () => {
        const { options, digitDialogClosedCancel } = this.props;
        digitDialogClosedCancel();
        if (options.onCancel != null) {
            options.onCancel();
        }
        this.setState({ open: false });
    };

    confirm = () => {
        const { options, digitDialogClosedConfirm } = this.props;
        digitDialogClosedConfirm();
        options.onConfirm();
        this.setState({ open: false });
    };

    render() {
        const { options, custom } = this.props;

        const { open } = this.state;

        return (
            <DigitIfElseRendering
                test={options != null}
                ifRender={() => (
                    <Dialog
                        open={open}
                        onClose={this.cancel}
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
                                ifRender={() =>
                                    options.renderButtons(
                                        this.confirm,
                                        this.cancel
                                    )
                                }
                                elseRender={() => (
                                    <>
                                        <DigitButton
                                            onClick={this.cancel}
                                            text={
                                                options != null
                                                    ? options.cancelButtonText
                                                    : ""
                                            }
                                        />
                                        <DigitButton
                                            onClick={this.confirm}
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
        confirmButtonText: PropTypes.string,
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