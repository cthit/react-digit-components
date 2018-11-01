import { connect } from "react-redux";
import DigitToast from "./DigitToast.view";

const mapStateToProps = state => ({
  toastOptions: state.toast
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DigitToast);
