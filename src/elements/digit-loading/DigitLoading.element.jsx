import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import React from "react";
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";

const DigitLoading = ({ loading, size }) => {
    if (!loading) {
        return null;
    }

    return <CircularProgress size={size} />;
};

DigitLoading.displayName = "DigitLoading";
DigitLoading.propTypes = {
    /** If true, then the loading animation will be rendered, else nothing will render. */
    loading: PropTypes.bool.isRequired,
    /** The size in px how big the loading circle should be. E.g. 30 or 60 */
    size: PropTypes.number
};

DigitLoading.defaultProps = {
    loading: true,
    size: 40
};

export default DigitLoading;
