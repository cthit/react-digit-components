import { connect } from "react-redux";
import DigitContainUser from "./DigitContainUser.declarative";
import { digitToastOpen } from "../../views/digit-toast/DigitToast.view.action-creator";
import { digitRedirectTo } from "../digit-redirect/DigitRedirect.declarative.action-creator";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    digitRedirectTo: (to, externalRedirect) =>
        dispatch(digitRedirectTo(to, externalRedirect)),
    digitToastOpen: data => dispatch(digitToastOpen(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DigitContainUser);
