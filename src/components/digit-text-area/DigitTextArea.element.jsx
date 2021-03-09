import PropTypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useFullFlex = makeStyles({
    root: {
        flex: "1"
    }
});

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
    filled,
    maxLength,
    onKeyPress,
    flex,
    alignSelf,
    justifySelf,
    size,
    autoFocus,
    padding,
    margin,
    gridColumn,
    gridRow
}) => {
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        justifySelf,
        size,
        padding,
        margin,
        gridColumn,
        gridRow
    });

    const inputFlex = useFullFlex();

    const handleOnChange = (e, maxLength, onChange) => {
        const newValue = e.target.value || "";
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
                    ? (value || "").length + "/" + maxLength
                    : lowerLabel != null
                    ? lowerLabel
                    : ""
            }
            name={name}
            error={error}
            disabled={disabled}
            variant={filled ? "filled" : "outlined"}
            minRows={rows}
            maxRows={rowsMax}
            multiline
            onKeyPress={onKeyPress}
            InputProps={{ classes: inputFlex }}
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
    /** Controls the justifySelf property for the most outer element in this component. */
    justifySelf: PropTypes.oneOf([
        "enter",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "left",
        "right",
        "baseline",
        "inherit",
        "initial"
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
    autoFocus: false,
    size: { width: "224px" }
};

export default DigitTextArea;
