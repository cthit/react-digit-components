import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {
  Select,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  FormHelperText,
  FilledInput,
  OutlinedInput
} from "@material-ui/core";
import styled from "styled-components";

import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

class DigitSelect extends React.Component {
  render() {
    const {
      value,
      onChange,
      disabled,
      valueToTextMap,
      allowToChooseNone,
      name,
      upperLabel,
      lowerLabel,
      reverse,
      inputProps,
      filled,
      outlined
    } = this.props;
    return (
      <Fill>
        <StyledFormControl
          variant={filled ? "filled" : outlined ? "outlined" : "standard"}
        >
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
          >
            {upperLabel}
          </InputLabel>
          <StyledSelect
            onChange={onChange}
            disabled={disabled}
            displayEmpty={allowToChooseNone}
            value={value}
            variant={filled ? "filled" : outlined ? "outlined" : "standard"}
            input={
              filled ? (
                <FilledInput />
              ) : outlined ? (
                <OutlinedInput
                  labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                />
              ) : (
                <Input />
              )
            }
            inputProps={{
              id: "id-" + name,
              name: name,
              color: "secondary",
              ...inputProps
            }}
          >
            {allowToChooseNone ? (
              <MenuItem value="" name="Nothing">
                {""}
              </MenuItem>
            ) : null}

            {_getValues(valueToTextMap, reverse).map(value => {
              const text = valueToTextMap[value];
              return (
                <MenuItem name={value} key={value} value={value}>
                  {text}
                </MenuItem>
              );
            })}
          </StyledSelect>
          <FormHelperText>{lowerLabel}</FormHelperText>
        </StyledFormControl>
      </Fill>
    );
  }
}

function _getValues(valueToTextMap, reverse) {
  var result = Object.keys(valueToTextMap);

  if (reverse) {
    result.reverse();
  }

  return result;
}

DigitSelect.displayName = "DigitSelect";
DigitSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  valueToTextMap: PropTypes.object.isRequired,
  allowToChooseNone: PropTypes.bool,
  upperLabel: PropTypes.string,
  lowerLabel: PropTypes.string,
  reverse: PropTypes.bool,
  inputProps: PropTypes.object,
  outlined: PropTypes.bool,
  filled: PropTypes.bool,
  name: PropTypes.string
};

const StyledFormControl = styled(FormControl)`
  display: flex;
`;

const StyledSelect = styled(Select)`
  flex: 1;
`;

export default DigitSelect;
