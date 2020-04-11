import { TimePicker } from "@material-ui/pickers";
import PropTypes from "prop-types";
import React from "react";
import useDigitTranslations from "../../hooks/use-digit-translations";
import translations from "./DigitTimePicker.element.translations";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

const DigitTimePicker = ({
    value,
    onChange,
    okLabel,
    outlined,
    filled,
    error,
    errorMessage,
    disabled,
    upperLabel,
    lowerLabel,
    nowLabel,
    cancelLabel,
    clearLabel,
    emptyLabel,
    invalidLabel,
    showNowButton,
    flex,
    alignSelf,
    size,
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
    const [text] = useDigitTranslations(translations);

    return (
        <TimePicker
            classes={classes}
            onChange={date => onChange({ target: { value: date } })}
            value={value}
            ampm={false}
            autoOk={false}
            disabled={disabled}
            disableToolbar={false}
            initialFocusedDate={null}
            inputVariant={
                filled ? "filled" : outlined ? "outlined" : "standard"
            }
            minutesStep={1}
            openTo={"hours"}
            orientation={"portrait"}
            readOnly={false}
            variant={"dialog"}
            views={["hours", "minutes"]}
            clearable
            showTodayButton={showNowButton}
            label={upperLabel}
            error={error}
            helperText={
                error && errorMessage !== "" ? errorMessage : lowerLabel
            }
            className={classes.root}
            invalidLabel={invalidLabel != null ? invalidLabel : text.invalid}
            okLabel={okLabel != null ? okLabel : text.ok}
            cancelLabel={cancelLabel != null ? cancelLabel : text.cancel}
            clearLabel={clearLabel != null ? clearLabel : text.clear}
            todayLabel={nowLabel != null ? nowLabel : text.today}
            emptyLabel={emptyLabel != null ? emptyLabel : text.empty}
        />
    );
};

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
    errorMessage: PropTypes.string,
    showNowButton: PropTypes.bool,
    disabled: PropTypes.bool,
    nowLabel: PropTypes.string,
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

DigitTimePicker.defaultProps = {
    outlined: false,
    filled: false,
    upperLabel: "",
    lowerLabel: "",
    size: { width: "224px" }
};

export default DigitTimePicker;
