import React from "react";
import PropTypes from "prop-types";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const DigitIfElseRendering = ({ test, ifRender, elseRender }) => {
  return test ? ifRender() : elseRender();
};

DigitIfElseRendering.displayName = "DigitIfElseRendering";
DigitIfElseRendering.propTypes = {
  /** If true, ifRender will be called. Otherwise elseRender will be called. */
  test: PropTypes.bool,
  /** The render prop for if test is true */
  ifRender: PropTypes.func.isRequired,
  /** The render prop for if test is false */
  elseRender: PropTypes.func
};

DigitIfElseRendering.defaultProps = {
  test: false,
  ifRender: () => {},
  elseRender: () => {}
};

export default DigitIfElseRendering;
