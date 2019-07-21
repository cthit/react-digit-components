import withStyles from "@material-ui/styles/withStyles";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Keyboard from "@material-ui/icons/Keyboard";
import { DatePicker } from "@material-ui/pickers";
import PropTypes from "prop-types";
import React from "react";

const styles = () => ({
    root: {
        flex: 1,
        width: "100%"
    }
});

const DigitDatePicker = ({
    value,
    onChange,
    upperLabel,
    showTodayButton,
    todayLabel,
    cancelLabel,
    okLabel,
    clearLabel,
    emptyLabel,
    invalidLabel,
    classes,
    filled,
    outlined,
    lowerLabel,
    error,
    errorMessage
}) => (
    <DatePicker
        label={upperLabel}
        error={error}
        helperText={error && errorMessage !== "" ? errorMessage : lowerLabel}
        value={value}
        onChange={date => onChange({ target: { value: date } })}
        showTodayButton={showTodayButton}
        todayLabel={todayLabel}
        cancelLabel={cancelLabel}
        okLabel={okLabel}
        clearLabel={clearLabel}
        emptyLabel={emptyLabel}
        invalidLabel={invalidLabel}
        className={classes.root}
        keyboardIcon={<Keyboard />}
        leftArrowIcon={<ChevronLeft />}
        rightArrowIcon={<ChevronRight />}
        variant={filled ? "filled" : outlined ? "outlined" : "standard"}
    />
);

DigitDatePicker.displayName = "DigitDatePicker";
DigitDatePicker.propTypes = {
    /** The current value. This component is uncontrolled, meaning that
     * you have to store the value and react on changes using
     * the onChange function.
     */
    value: PropTypes.instanceOf(Date),
    /** This function will be called when the user has selected
     * a new date.
     */
    onChange: PropTypes.func.isRequired,
    /** A label that is shown over the input field. */
    upperLabel: PropTypes.string,
    /** If true, then a today button will be shown.  */
    showTodayButton: PropTypes.bool,
    /** A button to select todays date. Is only shown
     * if showTodayButton is true.
     */
    todayLabel: PropTypes.string,
    /** The label for the cancel button. The user presses button
     * when they want to close the dialog and not save the date.
     */
    cancelLabel: PropTypes.string,
    /** The label for the ok button. The user presses this button
     * when they have selected a date.
     */
    okLabel: PropTypes.string,
    /** Button text for the clear button, which will clear the button.
     * The clear button will only be shown if clearable is true.
     */
    clearLabel: PropTypes.string,
    /** What will be presented if no date has been selected */
    emptyLabel: PropTypes.string,
    /** What will be presented if a date is invalid */
    invalidLabel: PropTypes.string,
    outlined: PropTypes.bool,
    filled: PropTypes.bool,
    lowerLabel: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string
};

DigitDatePicker.defaultProps = {
    value: null,
    upperLabel: "",
    lowerLabel: "",
    showTodayButton: false,
    todayLabel: "Idag",
    cancelLabel: "Avbryt",
    okLabel: "Ok",
    clearLabel: "Rensa",
    emptyLabel: "Tryck här för datum",
    invalidLabel: "Ogiltigt datum",
    filled: false,
    outlined: false,
    error: false,
    errorMessage: ""
};

/** This is a temp solution to get the correct prop types from StoryBook. */
export { DigitDatePicker };

export default withStyles(styles)(DigitDatePicker);
