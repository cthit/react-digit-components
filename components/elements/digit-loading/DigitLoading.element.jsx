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

DigitLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  size: PropTypes.number
};

export default DigitLoading;
