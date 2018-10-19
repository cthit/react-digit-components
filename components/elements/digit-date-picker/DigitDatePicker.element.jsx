import React from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import DatePicker from "material-ui-pickers/DatePicker";

import Keyboard from "@material-ui/icons/Keyboard";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

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
  showTodayButton = true,
  todayLabel = "Idag",
  cancelLabel = "Avbryt",
  okLabel = "Ok",
  clearLabel = "Rensa",
  emptyLabel = "Tryck här för datum",
  invalidLabel = "Ogiltigt datum",
  classes
}) => (
  <DatePicker
    label={upperLabel}
    value={value}
    onChange={date => onChange(date)}
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
  onChange: PropTypes.func,
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
  invalidLabel: PropTypes.string
};

/** This is a temp solution to get the correct prop types from StoryBook. */
export { DigitDatePicker };

export default withStyles(styles)(DigitDatePicker);
