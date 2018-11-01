import PropTypes from "prop-types";

const DigitIfElseRendering = ({ test, ifRender, elseRender }) => {
  return test ? ifRender() : elseRender();
};

DigitIfElseRendering.displayName = "DigitIfElseRendering";
DigitIfElseRendering.propTypes = {
  /** If true, ifRender will be called. Otherwise elseRender will be called. */
  test: PropTypes.bool,
  /** The render prop for if test is true */
  ifRender: PropTypes.func,
  /** The render prop for if test is false */
  elseRender: PropTypes.func
};

DigitIfElseRendering.defaultProps = {
  test: false,
  ifRender: () => null,
  elseRender: () => null
};

export default DigitIfElseRendering;
