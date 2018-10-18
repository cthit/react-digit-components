import React from "react";
import { DigitDateAndTimePicker } from "../../components";

class StoryDigitDateAndTimePicker extends React.Component {
  state = {
    date: null
  };

  onDateChanged = newDate => {
    this.setState({
      date: newDate
    });
  };

  render() {
    const { date } = this.state;
    const { upperLabel } = this.props;

    return (
      <DigitDateAndTimePicker
        upperLabel={upperLabel}
        value={date}
        onChange={this.onDateChanged}
      />
    );
  }
}

export default StoryDigitDateAndTimePicker;
