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

DigitDatePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  upperLabel: PropTypes.string,
  showTodayButton: PropTypes.bool,
  todayLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  okLabel: PropTypes.string,
  clearLabel: PropTypes.string,
  emptyLabel: PropTypes.string,
  invalidLabel: PropTypes.string,
  classes: PropTypes.object
};

/** This is a temp solution to get the correct prop types from StoryBook. */
export { DigitDatePicker };

export default withStyles(styles)(DigitDatePicker);
