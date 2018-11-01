import { Checkbox } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import DigitControlLabelWithError from "../utils/digit-control-label-with-error";

const DigitCheckbox = ({
  name,
  value,
  onChange,
  onBlur,
  primary,
  secondary,
  disabled,
  label,
  error,
  errorMessage
}) => (
  <DigitControlLabelWithError
    error={error}
    label={error ? errorMessage : label}
    disabled={disabled}
    control={
      <Checkbox
        color={primary ? "primary" : secondary ? "secondary" : "default"}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
    }
  />
);

DigitCheckbox.displayName = "DigitCheckbox";
DigitCheckbox.propTypes = {
  /** A unique name relative to a form. e.g. acceptedTerms or pizza.*/
  name: PropTypes.string,
  /** Fires on input change. Note that this component is uncontrolled, and that
   * you have to save value by yourself. Only argument is the event object. If you want
   * the new text value, use `e.target.value`.
   */
  onChange: PropTypes.func.isRequired,
  /** The onBlur event occurs when an object loses focus. */
  onBlur: PropTypes.func,
  /** A label that is to the right of the checkbox. */
  label: PropTypes.string,
  /** The checked value of the checkbox. Note that this component is uncontrolled, and that you have to
   * save your value of yourself.
   */
  value: PropTypes.bool.isRequired,
  /** Sets the color to the primary one. This has predence precedence over secondary. */
  primary: PropTypes.bool,
  /** Sets the color to the secondary one. This has precedence over the normal button. */
  secondary: PropTypes.bool,
  /** If true, then the user can't changed the value of the checkbox.
   * The value is persisted though when disabled.
   */
  disabled: PropTypes.bool,
  /** If true, then the text will be red and errorMessage will be replaced with errorMessage */
  error: PropTypes.bool,
  /** Will be shown instead of label if error is true. */
  errorMessage: PropTypes.string
};

DigitCheckbox.defaultProps = {
  name: "",
  onBlur: () => {},
  label: "",
  primary: false,
  secondary: false,
  disabled: false,
  error: false,
  errorMessage: null
};

export default DigitCheckbox;
