import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import {
  FormHelperText,
  FormControl,
  InputLabel,
  Input,
  OutlinedInput,
  FilledInput
} from "@material-ui/core";

import { Fill } from "../../styles/digit-layout/DigitLayout.styles";
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";

class DigitTextArea extends React.Component {
  render() {
    const {
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
      rowsMax,
      outline,
      filled
    } = this.props;
    return (
      <Fill>
        <FormControl
          variant={outline ? "outlined" : filled ? "filled" : "standard"}
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
            test={outline != null && outline}
            ifRender={() => (
              <OutlinedInput
                name={name}
                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                value={value || ""}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                rows={rows}
                rowsMax={rowsMax}
                multiline
              />
            )}
          />

          <DigitIfElseRendering
            test={filled != null && filled}
            ifRender={() => (
              <FilledInput
                name={name}
                value={value != null ? value : ""}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                rows={rows}
                rowsMax={rowsMax}
                multiline
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
                disabled={disabled}
                rows={rows}
                rowsMax={rowsMax}
                multiline
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

DigitTextArea.propTypes = {
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
  rows: PropTypes.number.isRequired,
  rowsMax: PropTypes.number.isRequired,
  outline: PropTypes.bool,
  filled: PropTypes.bool
};

export default DigitTextArea;
