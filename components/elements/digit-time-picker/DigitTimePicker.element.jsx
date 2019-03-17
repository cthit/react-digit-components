import withStyles from "@material-ui/core/styles/withStyles";
import { TimePicker } from "material-ui-pickers";
import PropTypes from "prop-types";
import React from "react";

const styles = () => ({
    root: {
        flex: 1,
        width: "100%"
    }
});

const DigitTimePicker = ({
    value,
    onChange,
    upperLabel,
    cancelLabel,
    okLabel,
    clearLabel,
    emptyLabel,
    invalidLabel,
    classes,
    outlined,
    filled,
    lowerLabel,
    error,
    errorMessage
}) => (
    <TimePicker
        label={upperLabel}
        error={error}
        helperText={error && errorMessage !== "" ? errorMessage : lowerLabel}
        value={value}
        onChange={date => onChange({ target: { value: date } })}
        cancelLabel={cancelLabel}
        okLabel={okLabel}
        clearLabel={clearLabel}
        emptyLabel={emptyLabel}
        invalidLabel={invalidLabel}
        className={classes.root}
        ampm={false}
        variant={filled ? "filled" : outlined ? "outlined" : "standard"}
    />
);

DigitTimePicker.displayName = "DigitTimePicker";
DigitTimePicker.propTypes = {
    /** The current value. This component is uncontrolled, meaning that
     * you have to store the value and react on changes using
     * the onChange function.
     */
    value: PropTypes.instanceOf(Date),
    /** This function will be called when the user has selected
     * a new time.
     */
    onChange: PropTypes.func,
    /** A label that is shown over the input field. */
    upperLabel: PropTypes.string,
    /** The label for the cancel button. The user presses button
     * when they want to close the dialog and not save time.
     */
    cancelLabel: PropTypes.string,
    /** The label for the ok button. The user presses this button
     * when they have selected a time.
     */
    okLabel: PropTypes.string,
    /** Button text for the clear button, which will clear the button.
     * The clear button will only be shown if clearable is true.
     */
    clearLabel: PropTypes.string,
    /** What will be presented if no time has been selected */
    emptyLabel: PropTypes.string,
    /** What will be presented if a time is invalid */
    invalidLabel: PropTypes.string,
    outlined: PropTypes.bool,
    filled: PropTypes.bool,
    lowerLabel: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string
};

DigitTimePicker.defaultProps = {
    cancelLabel: "Avbryt",
    okLabel: "Ok",
    clearLabel: "Rensa",
    emptyLabel: "Tryck här för tid",
    invalidLabel: "Ogiltig tid",
    upperLabel: "",
    outlined: false,
    filled: false,
    lowerLabel: ""
};

/** This is a temp solution to get the correct prop types from StoryBook. */
export { DigitTimePicker };

export default withStyles(styles)(DigitTimePicker);
