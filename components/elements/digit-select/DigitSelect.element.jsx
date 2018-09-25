import React from "react";
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

const element = document.createElement("canvas");
const context = element.getContext("2d");

function get_tex_size(txt, font) {
  context.font = font;
  return context.measureText(txt).width;
}

const DigitSelect = ({
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
  outline
}) => (
  <Fill>
    <StyledFormControl
      variant={filled ? "filled" : outline ? "outlined" : "standard"}
    >
      <InputLabel>{upperLabel}</InputLabel>
      <StyledSelect
        onChange={onChange}
        disabled={disabled}
        displayEmpty={allowToChooseNone}
        value={value}
        variant={filled ? "filled" : outline ? "outlined" : "standard"}
        input={
          filled ? (
            <FilledInput />
          ) : outline ? (
            <OutlinedInput
              labelWidth={get_tex_size(upperLabel, "1rem Helvetica") * 0.75 + 8}
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

function _getValues(valueToTextMap, reverse) {
  var result = Object.keys(valueToTextMap);

  if (reverse) {
    result.reverse();
  }

  return result;
}

DigitSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  valueToTextMap: PropTypes.object.isRequired,
  allowToChooseNone: PropTypes.bool,
  upperLabel: PropTypes.string,
  lowerLabel: PropTypes.string,
  reverse: PropTypes.bool,
  inputProps: PropTypes.object
};

const StyledFormControl = styled(FormControl)`
  display: flex;
`;

const StyledSelect = styled(Select)`
  flex: 1;
`;

export default DigitSelect;
