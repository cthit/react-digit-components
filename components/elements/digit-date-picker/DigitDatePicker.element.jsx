import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import DatePicker from "material-ui-pickers/DatePicker";

import DateRange from "@material-ui/icons/DateRange";
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
  label,
  showTodayButton,
  todayLabel = "Idag",
  cancelLabel = "Avbryt",
  okLabel = "Ok",
  clearLabel = "Rensa",
  emptyLabel = "Tryck här för datum",
  invalidLabel = "Ogiltigt datum",
  classes
}) => (
  <DatePicker
    label={label}
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

export default withStyles(styles)(DigitDatePicker);
