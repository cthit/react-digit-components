import React from "react";
import PropTypes from "prop-types";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const DigitIfElseRendering = ({ test, ifRender, elseRender }) => {
  return (test == null
  ? false
  : test)
    ? ifRender()
    : elseRender != null
      ? elseRender()
      : null;
};

DigitIfElseRendering.propTypes = {
  test: PropTypes.bool,
  ifRender: PropTypes.func.isRequired,
  elseRender: PropTypes.func
};

export default DigitIfElseRendering;
