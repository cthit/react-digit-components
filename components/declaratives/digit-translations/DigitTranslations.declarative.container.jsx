import { connect } from "react-redux";
import DigitTranslations from "./DigitTranslations.declarative";

const mapStateToProps = (state, ownProps) => ({
    activeLanguage: state.digitTranslations.activeLanguage,
    commonTranslations: state.digitTranslations.commonTranslations
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DigitTranslations);
