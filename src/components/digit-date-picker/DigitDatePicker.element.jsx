import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import DatePicker from "@material-ui/lab/DatePicker";
import PropTypes from "prop-types";
import React from "react";
import translations from "./DigitDatePicker.element.translations.json";
import useDigitTranslations from "../../hooks/use-digit-translations";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

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
    clearable,
    flex,
    alignSelf,
    justifySelf,
    size,
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
    const [text] = useDigitTranslations(translations);

    return (
        <DatePicker
            classes={classes}
            showTodayButton={showTodayButton}
            onChange={date => onChange({ target: { value: date } })}
            value={value}
            allowKeyboardControl={false}
            autoOk={false}
            disabled={disabled}
            disableFuture={disableFuture}
            disablePast={disablePast}
            disableToolbar={false}
            format={"yyyy-MM-dd"}
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
        />
    );
};

DigitDatePicker.displayName = "DigitDatePicker";
DigitDatePicker.propTypes = {
    disabled: PropTypes.bool,
    disableFuture: PropTypes.bool,
    disablePast: PropTypes.bool,
    shouldDisableDate: PropTypes.bool,
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    clearable: PropTypes.bool,
    /** Controls the flex property for the most outer element in this component.*/
    flex: PropTypes.string,
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
    errorMessage: PropTypes.string,
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
    ]),
    /** Controls grid-column-start and grid-column-end */
    gridColumn: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    }),
    /** Controls grid-row-start and grid-row-end */
    gridRow: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    })
};

DigitDatePicker.defaultProps = {
    value: null,
    upperLabel: "",
    lowerLabel: "",
    showTodayButton: false,
    filled: false,
    outlined: false,
    error: false,
    errorMessage: "",
    size: { width: "224px" }
};

export default DigitDatePicker;
