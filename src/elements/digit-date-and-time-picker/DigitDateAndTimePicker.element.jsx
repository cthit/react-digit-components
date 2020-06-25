import AccessTime from "@material-ui/icons/AccessTime";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import DateRange from "@material-ui/icons/DateRange";
import { DateTimePicker } from "@material-ui/pickers";
import PropTypes from "prop-types";
import React from "react";
import translations from "./DigitDateAndTimePicker.element.translations";
import useDigitTranslations from "../../hooks/use-digit-translations";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

const DigitDateAndTimePicker = ({
    value,
    upperLabel,
    onChange,
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
    shouldDisableDate,
    flex,
    alignSelf,
    justifySelf,
    size,
    padding,
    margin
}) => {
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        justifySelf,
        size,
        padding,
        margin
    });
    const [text] = useDigitTranslations(translations);

    return (
        <DateTimePicker
            classes={classes}
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
            leftArrowIcon={<ChevronLeft />}
            rightArrowIcon={<ChevronRight />}
            timeIcon={<AccessTime />}
            disabled={disabled}
            disableFuture={disableFuture}
            disablePast={disablePast}
            clearable={clearable}
            ampm={false}
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
            format={"yyyy-MM-dd hh:mm"}
        />
    );
};

DigitDateAndTimePicker.displayName = "DigitDateAndTimePicker";
DigitDateAndTimePicker.propTypes = {
    disabled: PropTypes.bool,
    disableFuture: PropTypes.bool,
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    shouldDisableDate: PropTypes.bool,
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
    errorMessage: PropTypes.string,
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
    errorMessage: "",
    size: { width: "224px" }
};

export default DigitDateAndTimePicker;
