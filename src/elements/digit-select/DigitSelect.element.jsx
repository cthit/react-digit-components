import {
    FilledInput,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
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
            filled,
            outlined
        } = this.props;
        return (
            <Fill>
                <StyledFormControl
                    variant={
                        filled ? "filled" : outlined ? "outlined" : "standard"
                    }
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
                        variant={
                            filled
                                ? "filled"
                                : outlined
                                ? "outlined"
                                : "standard"
                        }
                        input={
                            filled ? (
                                <FilledInput />
                            ) : outlined ? (
                                <OutlinedInput
                                    labelWidth={
                                        this.labelRef
                                            ? this.labelRef.offsetWidth
                                            : 0
                                    }
                                />
                            ) : (
                                <Input />
                            )
                        }
                        inputProps={{
                            id: "id-" + name,
                            name: name,
                            color: "secondary"
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
                                <MenuItem
                                    name={value}
                                    key={value}
                                    value={value}
                                >
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
    /** The selected value of the DigitSelect. Note that
     * this component is uncontrolled, which means you need to
     * store the selected value yourself. Use onChange to
     * get new selected values.
     */
    value: PropTypes.string.isRequired,
    /** This function will be called when a new
     * value has been selected inside the DigitSelect. The
     * first argument is the new selected value.
     */
    onChange: PropTypes.func.isRequired,
    /** If true, then you can't select a new value. */
    disabled: PropTypes.bool,
    /** A string to string map, the pretty text to render. */
    valueToTextMap: PropTypes.objectOf(PropTypes.string).isRequired,
    /** If true, then the user can select nothing. */
    allowToChooseNone: PropTypes.bool,
    /** The text label over the DigitSelect */
    upperLabel: PropTypes.string,
    /** The text label under the DigitSelect */
    lowerLabel: PropTypes.string,
    /** If true, then reverses the list */
    reverse: PropTypes.bool,
    /**
     * Adds an outline around the button in black color.
     */
    outlined: PropTypes.bool,
    /** Adds a grey isch background */
    filled: PropTypes.bool,
    /** A unique name relative to a form. e.g. pizzaTopping or attendanceYear.*/
    name: PropTypes.string
};

DigitSelect.defaultProps = {
    disabled: false,
    allowToChooseNone: false,
    upperLabel: "",
    lowerLabel: "",
    reverse: false,
    outlined: false,
    filled: false,
    name: "",
    valueToTextMap: {}
};

const StyledFormControl = styled(FormControl)`
    display: flex;
`;

const StyledSelect = styled(Select)`
    flex: 1;
`;

export default DigitSelect;
