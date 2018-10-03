import React from "react";
import PropTypes from "prop-types";
import IfElseRendering from "../../declaratives/digit-if-else-rendering";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

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
      digitDialogClosedConfirm
    } = this.props;

    const { open } = this.state;

    return (
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
          <DialogContentText id="alert-dialog-description">
            {options != null ? options.description : ""}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={e => {
              digitDialogClosedCancel();
              if (options.onCancel != null) {
                options.onCancel(e);
              }
              this.setState({ open: false });
            }}
            color="primary"
          >
            {options != null ? options.cancelButtonText : ""}
          </Button>
          <Button
            onClick={e => {
              digitDialogClosedConfirm();
              options.onConfirm(e);
              this.setState({ open: false });
            }}
            color="primary"
            autoFocus
          >
            {options != null ? options.confirmButtonText : ""}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DigitDialog.propTypes = {
  options: PropTypes.shape({
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    cancelButtonText: PropTypes.string,
    confirmButtonText: PropTypes.text,
    open: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string
  }),
  digitDialogClosedCancel: PropTypes.func.isRequired,
  digitDialogClosedConfirm: PropTypes.func.isRequired
};

export default DigitDialog;
