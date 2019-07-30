import { connect } from "react-redux";
import DigitDialog from "./DigitDialog.view";
import {
    digitDialogClosedCancel,
    digitDialogClosedConfirm
} from "./DigitDialog.view.action-creator";

const mapStateToProps = (state, ownProps) => ({
    options: state.dialog,
    custom: state.dialog != null ? state.dialog.custom : false
});

const mapDispatchToProps = dispatch => ({
    digitDialogClosedConfirm: () => dispatch(digitDialogClosedConfirm()),
    digitDialogClosedCancel: () => dispatch(digitDialogClosedCancel())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DigitDialog);