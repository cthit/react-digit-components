import React from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Checkbox } from "@material-ui/core";

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
  error
}) => (
  <DigitControlLabelWithError
    error={error}
    label={label}
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

DigitCheckbox.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.bool.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool
};

export default DigitCheckbox;
