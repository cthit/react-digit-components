import React from "react";
import PropTypes from "prop-types";

import {
  FormHelperText,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";

import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const DigitTextField = ({
  value,
  onChange,
  onBlur,
  upperLabel,
  lowerLabel,
  name,
  password,
  numbersOnly,
  error,
  errorMessage,
  disabled
}) => (
  <Fill>
    <FormControl error={error}>
      <InputLabel>{upperLabel}</InputLabel>
      <Input
        name={name}
        value={value != null ? value : ""}
        onChange={onChange}
        onBlur={onBlur}
        type={password ? "password" : numbersOnly ? "number" : "text"}
        disabled={disabled}
      />

      <FormHelperText>
        {error && errorMessage != null
          ? errorMessage
          : lowerLabel != null
            ? lowerLabel
            : ""}
      </FormHelperText>
    </FormControl>
  </Fill>
);

DigitTextField.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  upperLabel: PropTypes.string,
  lowerLabel: PropTypes.string,
  name: PropTypes.string,
  password: PropTypes.bool,
  numbersOnly: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool
};

export default DigitTextField;
