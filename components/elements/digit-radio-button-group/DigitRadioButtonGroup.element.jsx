import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import {
  Lowerlabel,
  StyledFormControl,
  UpperLabel
} from "./DigitRadioButtonGroup.element.styles";

const DigitRadioButtonGroup = ({
  value,
  onChange,
  onBlur,
  name,
  upperLabel,
  lowerLabel,
  radioButtons,
  error,
  errorMessage
}) => (
  <StyledFormControl component="fieldset">
    <UpperLabel component="legend">{upperLabel}</UpperLabel>
    <RadioGroup value={value} name={name} onBlur={onBlur} onChange={onChange}>
      {radioButtons.map(value => {
        const { id, label, disabled, primary, secondary } = value;
        return (
          <FormControlLabel
            key={id}
            value={id}
            label={label}
            disabled={disabled}
            control={
              <Radio
                color={
                  primary ? "primary" : secondary ? "secondary" : "default"
                }
              />
            }
          />
        );
      })}
    </RadioGroup>
    <Lowerlabel error={error}>
      {error && errorMessage != null ? errorMessage : lowerLabel}
    </Lowerlabel>
  </StyledFormControl>
);

DigitRadioButtonGroup.displayName = "DigitRadioButtonGroup";
DigitRadioButtonGroup.propTypes = {
  /** The chosen value of the radio buttons. The value must be one of
   * the ids of the radio buttons. Note that this component is uncontrolled.
   */
  value: PropTypes.string.isRequired,
  /**
   * Fires on radio button change. Only argument is the event object
   * with the new selected value, use `e.target.value`.
   */
  onChange: PropTypes.func.isRequired,
  /** The onBlur event occurs when an object loses focus. */
  onBlur: PropTypes.func,
  /** A unique name relative to a form. e.g. acceptedTerms or pizza.*/
  name: PropTypes.string,
  /** An upper label over all radio buttons */
  upperLabel: PropTypes.string,
  /** A lower label under all radio buttons */
  lowerLabel: PropTypes.string,
  /** All the radio button for this group. Has label, disabled, primary and secondary.*/
  radioButtons: PropTypes.arrayOf(
    PropTypes.shape({
      /** Unique id to identify the radio button. */
      id: PropTypes.string,
      /** The label that is next to the radio button. */
      label: PropTypes.string,
      /** If true, then you cannot select this value. */
      disabled: PropTypes.bool,
      /** If true, then the primary color is used on the radio button when selected. */
      primary: PropTypes.bool,
      /** If true, then the secondary color is used on the radio button when selected. */
      secondary: PropTypes.bool
    })
  ),
  /** If true, then the lower label will be red and errorMessage
   * will be used instead of lowerLabel.
   */
  error: PropTypes.bool,
  /** Will replace lowerLabel if error is true.  */
  errorMessage: PropTypes.string
};

DigitRadioButtonGroup.defaultProps = {
  onBlur: () => {},
  name: "",
  upperLabel: "",
  lowerLabel: "",
  error: false,
  errorMessage: null
};

export default DigitRadioButtonGroup;
