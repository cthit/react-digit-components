import { connect } from "react-redux";

import DigitRedirect from "./DigitRedirect.declarative";
import { redirectFinished } from "./DigitRedirect.declarative.action-creator";

const mapStateToProps = state => ({
    redirectPath: state.redirect.redirectPath
});

const mapDispatchToProps = dispatch => ({
    redirectFinished: () => dispatch(redirectFinished())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DigitRedirect);
