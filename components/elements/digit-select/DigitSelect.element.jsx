import React from "react";
import PropTypes from "prop-types";
import {
  Select,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  FormHelperText
} from "@material-ui/core";
import styled from "styled-components";

import generateId from "../../utils/generators/id.generator";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

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
  inputProps
}) => (
  <Fill>
    <StyledFormControl>
      <InputLabel>{upperLabel}</InputLabel>
      <StyledSelect
        onChange={onChange}
        disabled={disabled}
        displayEmpty={allowToChooseNone}
        value={value}
        inputProps={{
          id: "id-" + name,
          name: name,
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
