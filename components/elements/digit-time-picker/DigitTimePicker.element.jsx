import React from "react";
import PropTypes from "prop-types";
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
  emptyLabel = "Tryck här för tid",
  invalidLabel = "Ogiltig tid",
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

DigitTimePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  upperLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  okLabel: PropTypes.string,
  clearLabel: PropTypes.string,
  emptyLabel: PropTypes.string,
  invalidLabel: PropTypes.string,
  classes: PropTypes.object
};

/** This is a temp solution to get the correct prop types from StoryBook. */
export { DigitTimePicker };

export default withStyles(styles)(DigitTimePicker);
