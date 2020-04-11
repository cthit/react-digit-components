import PropTypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

const DigitTextField = ({
    value = "",
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
    maxLength,
    onKeyPress,
    flex,
    alignSelf,
    size,
    autoFocus,
    padding,
    margin
}) => {
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        size,
        padding,
        margin
    });

    const handleOnChange = (e, maxLength, onChange) => {
        var newValue = e.target.value;
        if (maxLength === -1 || newValue.length <= maxLength) {
            if (numbersOnly) {
                newValue = newValue.replace(/[^0-9]/g, "");
                e.target.value = newValue;
            }

            onChange(e);
        }
    };

    return (
        <TextField
            classes={classes}
            autoFocus={autoFocus}
            onKeyPress={onKeyPress}
            name={name}
            error={error}
            label={upperLabel}
            value={value == null ? "" : value}
            helperText={
                error && errorMessage != null
                    ? errorMessage
                    : maxLength !== -1
                    ? value.length + "/" + maxLength
                    : lowerLabel != null
                    ? lowerLabel
                    : ""
            }
            onBlur={onBlur}
            type={password ? "password" : numbersOnly ? "number" : "text"}
            onChange={e => handleOnChange(e, maxLength, onChange)}
            margin="normal"
            disabled={disabled}
            variant={outlined ? "outlined" : filled ? "filled" : "standard"}
        />
    );
};

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
    filled: PropTypes.bool,
    /** Sets a max length for the textfield */
    maxLength: PropTypes.number,
    onKeyPress: PropTypes.func,
    /** autoFocus */
    autoFocus: PropTypes.bool,
    /** Controls the flex property for the most outer element in this component.*/
    flex: PropTypes.string,
    /** Controls the alignSelf property for the most outer element in this component.*/
    alignSelf: PropTypes.oneOf([
        "auto",
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "baseline",
        "initial",
        "inherit"
    ]),
    /** Controls the size for the most outer element in this component. You can set minWidth/Height, maxWidth/Height
     * and width/height via an object
     */
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        minWidth: PropTypes.string,
        minHeight: PropTypes.string,
        maxWidth: PropTypes.string,
        maxHeight: PropTypes.string
    }),
    /** Padding property for the most outer element in this component.
     * It can either be a string, using the padding shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
    /** Margin property for the most outer element in this component.
     * It can either be a string, using the margin shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ])
};

DigitTextField.defaultProps = {
    onBlur: () => {},
    error: false,
    errorMessage: null,
    disabled: false,
    outlined: false,
    filled: false,
    maxLength: -1,
    onKeyPress: () => {},
    autoFocus: false
};

export default DigitTextField;
