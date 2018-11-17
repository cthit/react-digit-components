import {
    FilledInput,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    OutlinedInput,
    withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";
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
                    variant={
                        outlined ? "outlined" : filled ? "filled" : "standard"
                    }
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
                                labelWidth={
                                    this.labelRef
                                        ? this.labelRef.offsetWidth
                                        : 0
                                }
                                value={value || ""}
                                onChange={onChange}
                                onBlur={onBlur}
                                type={
                                    password
                                        ? "password"
                                        : numbersOnly
                                        ? "number"
                                        : "text"
                                }
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
                                type={
                                    password
                                        ? "password"
                                        : numbersOnly
                                        ? "number"
                                        : "text"
                                }
                                disabled={disabled}
                            />
                        )}
                    />
                    {console.log(lightColor)}
                    {console.log(classes.inputLightColor)}

                    <DigitIfElseRendering
                        test={!filled && !outlined}
                        ifRender={() => (
                            <Input
                                name={name}
                                value={value || ""}
                                onChange={onChange}
                                onBlur={onBlur}
                                type={
                                    password
                                        ? "password"
                                        : numbersOnly
                                        ? "number"
                                        : "text"
                                }
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

DigitTextField.displayName = "DigitTextField";
DigitTextField.propTypes = {
    /** The value of the text field. Note that this
     * element is uncontrolled, meaning you have to store
     * the value of the text field yourself. For updates of the value,
     * use the onChange function.
     */
    value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    /** This function will be called when the input changes.
     * The first argument is the event. To get the new value,
     * use e.target.value.
     */
    onChange: PropTypes.func.isRequired,
    /** The onBlur event occurs when DigitTextArea loses focus. */
    onBlur: PropTypes.func,
    /** The text label over the DigitSelect */
    upperLabel: PropTypes.string,
    /** The text label under the DigitSelect */
    lowerLabel: PropTypes.string,
    /** A unique name relative to a form. e.g. pizzaTopping or attendanceYear.*/
    name: PropTypes.string,
    /** If true, then every character will be replaced by a dot. */
    password: PropTypes.bool,
    /** If true, then only number are allowed. */
    numbersOnly: PropTypes.bool,
    /** If true, then errorMessage will be shown instead of lowerLabel */
    error: PropTypes.bool,
    /** If error is true, then this errorMessage will be shown instead of lowerLabel */
    errorMessage: PropTypes.string,
    /** If true, then you can't edit this text field. */
    disabled: PropTypes.bool,
    /**
     * Adds an outline around the text field in black color.
     */
    outlined: PropTypes.bool,
    /** Adds a grey isch background */
    filled: PropTypes.bool
};

DigitTextField.defaultProps = {
    onBlur: () => {},
    upperLabel: "",
    lowerLabel: "",
    name: "",
    error: false,
    errorMessage: null,
    disabled: false,
    outlined: false,
    filled: false
};

export default DigitTextField;
