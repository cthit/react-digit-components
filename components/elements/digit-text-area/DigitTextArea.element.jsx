import React from "react";
import PropTypes from "prop-types";

import {
  FormHelperText,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";

import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const DigitTextArea = ({
  value,
  onChange,
  onBlur,
  upperLabel,
  lowerLabel,
  name,
  error,
  errorMessage,
  disabled,
  rows,
  rowsMax
}) => (
  <Fill>
    <FormControl error={error}>
      <InputLabel>{upperLabel}</InputLabel>
      <Input
        name={name}
        value={value != null ? value : ""}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        rows={rows}
        rowsMax={rowsMax}
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

export default DigitTextArea;
