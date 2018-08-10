import React from "react";
import PropTypes from "prop-types";
import { Switch } from "@material-ui/core";

import DigitControlLabelWithError from "../utils/digit-control-label-with-error";

const DigitSwitch = ({
  onChange,
  onBlur,
  value,
  error,
  disabled,
  primary,
  secondary,
  label,
  name
}) => (
  <DigitControlLabelWithError
    error={error}
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
    label={label}
  />
);

DigitSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string
};

export default DigitSwitch;
