import React from "react";
import PropTypes from "prop-types";

import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";

import {
  FormHelperText,
  FormControl,
  InputLabel,
  Input,
  OutlinedInput,
  FilledInput
} from "@material-ui/core";

import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const element = document.createElement("canvas");
const context = element.getContext("2d");

function get_tex_size(txt, font) {
  context.font = font;
  return context.measureText(txt).width;
}

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
  disabled,
  outline,
  filled
}) => (
  <Fill>
    <FormControl
      variant={outline ? "outlined" : filled ? "filled" : "standard"}
      error={error}
    >
      <InputLabel>{upperLabel}</InputLabel>
      <DigitIfElseRendering
        test={outline != null && outline}
        ifRender={() => (
          <OutlinedInput
            name={name}
            labelWidth={get_tex_size(upperLabel, "1rem Helvetica") * 0.75 + 8}
            value={value != null ? value : ""}
            onChange={onChange}
            onBlur={onBlur}
            type={password ? "password" : numbersOnly ? "number" : "text"}
            disabled={disabled}
          />
        )}
      />

      <DigitIfElseRendering
        test={filled != null && filled}
        ifRender={() => (
          <FilledInput
            id="asdf-"
            name={name}
            value={value != null ? value : ""}
            onChange={onChange}
            onBlur={onBlur}
            type={password ? "password" : numbersOnly ? "number" : "text"}
            disabled={disabled}
          />
        )}
      />

      <DigitIfElseRendering
        test={!filled && !outline}
        ifRender={() => (
          <Input
            name={name}
            value={value != null ? value : ""}
            onChange={onChange}
            onBlur={onBlur}
            type={password ? "password" : numbersOnly ? "number" : "text"}
            disabled={disabled}
          />
        )}
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
