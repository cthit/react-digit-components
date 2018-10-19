import React from "react";
import PropTypes from "prop-types";
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";
import { CircularProgress } from "@material-ui/core";

const DigitLoading = ({ loading, size }) => (
  <DigitIfElseRendering
    test={loading}
    ifRender={() => <CircularProgress size={size} />}
  />
);

DigitLoading.defaultProps = {
  size: "40"
};

DigitLoading.displayName = "DigitLoading";
DigitLoading.propTypes = {
  /** If true, then the loading animation will be rendered, else nothing will render. */
  loading: PropTypes.bool.isRequired,
  /** The size in px how big the loading circle should be. E.g. 30 or 60 */
  size: PropTypes.number
};

export default DigitLoading;
