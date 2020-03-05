import PropTypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

const DigitTextArea = ({
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
    const classes = useLayoutMaterialUi({ flex, alignSelf, size });

    const handleOnChange = (e, maxLength, onChange) => {
        const newValue = e.target.value;
        if (maxLength === -1 || newValue.length <= maxLength) {
            onChange(e);
        }
    };

    return (
        <TextField
            classes={classes}
            autoFocus={autoFocus}
            value={value}
            onChange={e => handleOnChange(e, maxLength, onChange)}
            onBlur={onBlur}
            label={upperLabel}
            helperText={
                error && errorMessage != null
                    ? errorMessage
                    : maxLength !== -1
                    ? value.length + "/" + maxLength
                    : lowerLabel != null
                    ? lowerLabel
                    : ""
            }
            name={name}
            error={error}
            disabled={disabled}
            rows={rows}
            variant={outlined ? "outlined" : filled ? "filled" : "standard"}
            rowsMax={rowsMax}
            multiline
            onKeyPress={onKeyPress}
        />
    );
};

DigitTextArea.displayName = "DigitTextArea";
DigitTextArea.propTypes = {
    /** The value of the text area. Note that this
     * element is uncontrolled, meaning you have to store
     * the value of the text area yourself. For updates of the value,
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
    /** If true, then errorMessage will be shown instead of lowerLabel */
    error: PropTypes.bool,
    /** If error is true, then this errorMessage will be shown instead of lowerLabel */
    errorMessage: PropTypes.string,
    /** If true, then you can't edit this text area. */
    disabled: PropTypes.bool,
    /** The least amount of rows for this text area. */
    rows: PropTypes.number,
    /** The max amount of rows for this text area. After
     * the text area has hit this amount of rows, it will begin to
     * scroll instead of expanding.
     */
    rowsMax: PropTypes.number,
    /**
     * Adds an outline around the text area in black color.
     */
    outlined: PropTypes.bool,
    /** Adds a grey isch background */
    filled: PropTypes.bool,
    onKeyPress: PropTypes.func,
    autoFocus: PropTypes.bool
};

DigitTextArea.defaultProps = {
    onBlur: () => {},
    upperLabel: "",
    lowerLabel: "",
    name: "",
    error: false,
    errorMessage: null,
    disabled: false,
    outlined: false,
    filled: false,
    rows: 3,
    rowsMax: 6,
    maxLength: -1,
    onKeyPress: () => {},
    autoFocus: false
};

export default DigitTextArea;
