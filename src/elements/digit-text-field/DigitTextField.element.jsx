import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

class DigitTextField extends React.Component {
    handleOnChange = (e, maxLength, onChange) => {
        const newValue = e.target.value;
        if (maxLength === -1 || newValue.length <= maxLength) {
            onChange(e);
        }
    };

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
            filled,
            maxLength
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
                                onChange={e =>
                                    this.handleOnChange(e, maxLength, onChange)
                                }
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
                                onChange={e =>
                                    this.handleOnChange(e, maxLength, onChange)
                                }
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
                        test={!filled && !outlined}
                        ifRender={() => (
                            <Input
                                name={name}
                                value={value || ""}
                                onChange={e =>
                                    this.handleOnChange(e, maxLength, onChange)
                                }
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
                            : maxLength !== -1
                            ? value.length + "/" + maxLength
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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
    value: "",
    error: false,
    errorMessage: null,
    disabled: false,
    outlined: false,
    filled: false,
    maxLength: -1
};

export default DigitTextField;