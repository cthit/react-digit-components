import React from "react";
import ReactDOM from "react-dom";
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

class DigitTextField extends React.Component {
  render() {
    const {
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
      outlined,
      filled
    } = this.props;

    return (
      <Fill>
        <FormControl
          variant={outlined ? "outlined" : filled ? "filled" : "standard"}
          error={error}
        >
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
          >
            {upperLabel}
          </InputLabel>
          <DigitIfElseRendering
            test={outlined}
            ifRender={() => (
              <OutlinedInput
                name={name}
                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                value={value || ""}
                onChange={onChange}
                onBlur={onBlur}
                type={password ? "password" : numbersOnly ? "number" : "text"}
                disabled={disabled}
              />
            )}
          />

          <DigitIfElseRendering
            test={filled}
            ifRender={() => (
              <FilledInput
                name={name}
                value={value || ""}
                onChange={onChange}
                onBlur={onBlur}
                type={password ? "password" : numbersOnly ? "number" : "text"}
                disabled={disabled}
              />
            )}
          />

          <DigitIfElseRendering
            test={!filled && !outlined}
            ifRender={() => (
              <Input
                name={name}
                value={value || ""}
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
  }
}

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
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  filled: PropTypes.bool
};

export default DigitTextField;
