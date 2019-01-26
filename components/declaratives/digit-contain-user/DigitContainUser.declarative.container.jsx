import { connect } from "react-redux";
import { DigitRedirectActions, DigitToastActions } from "../../index";
import DigitContainUser from "./DigitContainUser.declarative";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    digitRedirectTo: to => dispatch(DigitRedirectActions.digitRedirectTo(to)),
    digitToastOpen: data => dispatch(DigitToastActions.digitToastOpen(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DigitContainUser);
