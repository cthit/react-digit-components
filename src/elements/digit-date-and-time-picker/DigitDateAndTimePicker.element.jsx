import withStyles from "@material-ui/styles/withStyles";
import AccessTime from "@material-ui/icons/AccessTime";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import DateRange from "@material-ui/icons/DateRange";
import Keyboard from "@material-ui/icons/Keyboard";
import { DateTimePicker } from "@material-ui/pickers";
import PropTypes from "prop-types";
import React from "react";
import translations from "./DigitDateAndTimePicker.element.translations";
import useDigitTranslations from "../../hooks/use-digit-translations";

const styles = () => ({
    root: {
        flex: 1,
        width: "100%"
    }
});

const DigitDateAndTimePicker = ({
    value,
    upperLabel,
    onChange,
    classes,
    todayLabel,
    cancelLabel,
    okLabel,
    clearLabel,
    emptyLabel,
    invalidLabel,
    showTodayButton,
    disabled,
    disableFuture,
    disablePast,
    clearable,
    filled,
    outlined,
    lowerLabel,
    error,
    errorMessage,
    minDate,
    maxDate,
    shouldDisableDate
}) => {
    const [text] = useDigitTranslations(translations);

    return (
        <DateTimePicker
            value={value}
            onChange={date => onChange({ target: { value: date } })}
            label={upperLabel}
            error={error}
            helperText={
                error && errorMessage !== "" ? errorMessage : lowerLabel
            }
            showTodayButton={showTodayButton}
            invalidLabel={invalidLabel}
            dateRangeIcon={<DateRange />}
            keyboardIcon={<Keyboard />}
            leftArrowIcon={<ChevronLeft />}
            rightArrowIcon={<ChevronRight />}
            timeIcon={<AccessTime />}
            disabled={disabled}
            disableFuture={disableFuture}
            disablePast={disablePast}
            clearable={clearable}
            ampm={false}
            className={classes.root}
            inputVariant={
                filled ? "filled" : outlined ? "outlined" : "standard"
            }
            todayLabel={todayLabel != null ? todayLabel : text.today}
            emptyLabel={emptyLabel != null ? emptyLabel : text.empty}
            cancelLabel={cancelLabel != null ? cancelLabel : text.cancel}
            okLabel={okLabel != null ? okLabel : text.ok}
            clearLabel={clearLabel != null ? clearLabel : text.clear}
            maxDate={maxDate}
            minDate={minDate}
            shouldDisableDate={shouldDisableDate}
            format={"yyyy-mm-dd hh:mm"}
        />
    );
};

DigitDateAndTimePicker.displayName = "DigitDateAndTimePicker";
DigitDateAndTimePicker.propTypes = {
    /** If true, then a button will exists to let the user clear the date. */
    clearable: PropTypes.bool,
    /** If true, then the user can't select a date past now. */
    disablePast: PropTypes.bool,
    /** What will be presented if a date and or time is invalid */
    invalidLabel: PropTypes.string,
    /** What will be presented if no date and time has been selected */
    emptyLabel: PropTypes.string,
    /** Button text for the clear button, which will clear the button.
     * The clear button will only be shown if clearable is true.
     */
    clearLabel: PropTypes.string,
    /** The label for the ok button. The user presses this button
     * when they have selected a date and a time.
     */
    okLabel: PropTypes.string,
    /** The label for the cancel button. The user presses button
     * when they want to close the dialog and not save the date and time.
     */
    cancelLabel: PropTypes.string,
    /** A button to select todays date and time. Is only shown
     * if showTodayButton is true.
     */
    todayLabel: PropTypes.string,
    /** The current value. This component is uncontrolled, meaning that
     * you have to store the value and react on changes using
     * the onChange function.
     */
    value: PropTypes.instanceOf(Date),
    /** This function will be called when the user has selected
     * a new date and a new time.
     */
    onChange: PropTypes.func.isRequired,
    /** A label that is shown over the input field. */
    upperLabel: PropTypes.string,
    /** If true, then a today button will be shown.  */
    showTodayButton: PropTypes.bool,
    outlined: PropTypes.bool,
    filled: PropTypes.bool,
    lowerLabel: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string
};

DigitDateAndTimePicker.defaultProps = {
    value: null,
    clearable: false,
    disablePast: false,
    upperLabel: "",
    lowerLabel: "",
    showTodayButton: false,
    filled: false,
    outlined: false,
    error: false,
    errorMessage: ""
};

/** This is a temp solution to get the correct prop types from StoryBook. */
export { DigitDateAndTimePicker };

export default withStyles(styles)(DigitDateAndTimePicker);
