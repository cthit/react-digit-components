import React from "react";
import PropTypes from "prop-types";

import DateTimePicker from "material-ui-pickers/DateTimePicker";

import DateRange from "@material-ui/icons/DateRange";
import Keyboard from "@material-ui/icons/Keyboard";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import AccessTime from "@material-ui/icons/AccessTime";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
  root: {
    flex: 1,
    width: "100%"
  }
});

const DigitDateAndTimePicker = ({
  value,
  label,
  showTodayButton,
  onChange,
  classes,
  todayLabel = "Idag",
  cancelLabel = "Avbryt",
  okLabel = "Ok",
  clearLabel = "Rensa",
  emptyLabel = "Tryck här för tid och datum",
  invalidLabel = "Ogiltigt tid och datum",
  disablePast = true,
  clearable = true
}) => (
  <DateTimePicker
    value={value}
    onChange={date => {
      onChange(date);
    }}
    label={label}
    showTodayButton={showTodayButton}
    todayLabel={todayLabel}
    cancelLabel={cancelLabel}
    okLabel={okLabel}
    clearLabel={clearLabel}
    emptyLabel={emptyLabel}
    invalidLabel={invalidLabel}
    dateRangeIcon={<DateRange />}
    keyboardIcon={<Keyboard />}
    leftArrowIcon={<ChevronLeft />}
    rightArrowIcon={<ChevronRight />}
    timeIcon={<AccessTime />}
    disablePast={disablePast}
    clearable={clearable}
    ampm={false}
    className={classes.root}
  />
);

DigitDateAndTimePicker.propTypes = {
  clearable: PropTypes.bool,
  disablePast: PropTypes.bool,
  invalidLabel: PropTypes.string,
  emptyLabel: PropTypes.string,
  clearLabel: PropTypes.string,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  todayLabel: PropTypes.string,
  value: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  showTodayButton: PropTypes.bool,
  setFieldValue: PropTypes.func,
  values: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired //Supplied by material-ui
};

export default withStyles(styles)(DigitDateAndTimePicker);
