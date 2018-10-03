import React from "react";
import TimePicker from "material-ui-pickers/TimePicker";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
  root: {
    flex: 1,
    width: "100%"
  }
});

const DigitTimePicker = ({
  value,
  onChange,
  upperLabel,
  cancelLabel = "Avbryt",
  okLabel = "Ok",
  clearLabel = "Rensa",
  emptyLabel = "Tryck här för datum",
  invalidLabel = "Ogiltigt datum",
  classes
}) => (
  <TimePicker
    label={upperLabel}
    value={value}
    onChange={date => onChange(date)}
    cancelLabel={cancelLabel}
    okLabel={okLabel}
    clearLabel={clearLabel}
    emptyLabel={emptyLabel}
    invalidLabel={invalidLabel}
    className={classes.root}
    ampm={false}
  />
);

export default withStyles(styles)(DigitTimePicker);
