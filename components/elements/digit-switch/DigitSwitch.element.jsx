import React from "react";
import PropTypes from "prop-types";
import { Switch } from "@material-ui/core";

import DigitControlLabelWithError from "../utils/digit-control-label-with-error";

const DigitSwitch = ({
  onChange,
  onBlur,
  value,
  error,
  errorMessage,
  disabled,
  primary,
  secondary,
  label,
  name
}) => (
  <DigitControlLabelWithError
    error={error}
    label={error ? errorMessage : label}
    control={
      <Switch
        checked={value}
        disabled={disabled}
        color={primary ? "primary" : secondary ? "secondary" : "default"}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
      />
    }
  />
);

DigitSwitch.displayName = "DigitSwitch";
DigitSwitch.propTypes = {
  /** Fires on input change. Note that this component is uncontrolled, and that
   * you have to save value by yourself. Only argument is the event object. If you want
   * the new text value, use `e.target.value`.
   */
  onChange: PropTypes.func.isRequired,
  /** The onBlur event occurs when an object loses focus. */
  onBlur: PropTypes.func,
  /** The checked value of the checkbox. Note that this component is uncontrolled, and that you have to
   * save your value of yourself.
   */
  value: PropTypes.bool.isRequired,
  /** If true, then the text will be red and errorMessage will be replaced with errorMessage */
  error: PropTypes.bool,
  /** Will be shown instead of label if error is true. */
  errorMessage: PropTypes.string,
  /** If true, then the user can't changed the value of the checkbox.
   * The value is persisted though when disabled.
   */
  disabled: PropTypes.bool,
  /** Sets the color to the primary one. This has predence precedence over secondary. */
  primary: PropTypes.bool,
  /** Sets the color to the secondary one. This has precedence over the normal button. */
  secondary: PropTypes.bool,
  /** A label that is to the right of the switch. */
  label: PropTypes.string,
  /** A unique name relative to a form. e.g. acceptedTerms or pizza.*/
  name: PropTypes.string
};

export default DigitSwitch;
