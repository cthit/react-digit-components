import withStyles from "@material-ui/styles/withStyles";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Keyboard from "@material-ui/icons/Keyboard";
import { DatePicker } from "@material-ui/pickers";
import PropTypes from "prop-types";
import React from "react";
import translations from "./DigitDatePicker.element.translations";
import useDigitTranslations from "../../hooks/use-digit-translations";

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
    errorMessage,
    disabled,
    disableFuture,
    disablePast,
    shouldDisableDate,
    minDate,
    maxDate,
    clearable
}) => {
    const [text] = useDigitTranslations(translations);

    return (
        <DatePicker
            showTodayButton={showTodayButton}
            keyboardIcon={<Keyboard />}
            onChange={date => onChange({ target: { value: date } })}
            value={value}
            allowKeyboardControl={false}
            autoOk={false}
            disabled={disabled}
            disableFuture={disableFuture}
            disablePast={disablePast}
            disableToolbar={false}
            format={"yyyy-mm-dd"}
            initialFocusedDate={null}
            inputVariant={
                filled ? "filled" : outlined ? "outlined" : "standard"
            }
            invalidLabel={invalidLabel != null ? invalidLabel : text.invalid}
            // labelFunc
            //leftArrowButtonProps
            leftArrowIcon={<ChevronLeft />}
            // loadingIndicator
            maxDate={maxDate}
            // maxDateMessage={}
            minDate={minDate}
            // minDateMessage={}
            // onAccept={}
            // onClose={}
            // onError={}
            // onMonthChange={}
            // onOpen={}
            // onYearChange={}
            // open={}
            openTo={"date"}
            orientation={"portrait"}
            // PopoverProps={}
            readOnly={false}
            // renderDay={}
            // rightArrowButtonProps={}
            rightArrowIcon={<ChevronRight />}
            shouldDisableDate={shouldDisableDate}
            strictCompareDates={false}
            // TextFieldComponent={}
            // ToolbarComponent={}
            variant={"dialog"} //kan vara intressant
            views={["year", "month", "date"]}
            label={upperLabel}
            error={error}
            helperText={
                error && errorMessage !== "" ? errorMessage : lowerLabel
            }
            clearable={clearable}
            todayLabel={todayLabel != null ? todayLabel : text.today}
            emptyLabel={emptyLabel != null ? emptyLabel : text.empty}
            cancelLabel={cancelLabel != null ? cancelLabel : text.cancel}
            okLabel={okLabel != null ? okLabel : text.ok}
            clearLabel={clearLabel != null ? clearLabel : text.clear}
            className={classes.root}
        />
    );
};

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
    filled: false,
    outlined: false,
    error: false,
    errorMessage: ""
};

/** This is a temp solution to get the correct prop types from StoryBook. */
export { DigitDatePicker };

export default withStyles(styles)(DigitDatePicker);
