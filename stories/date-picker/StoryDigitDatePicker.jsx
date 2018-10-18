import React from "react";
import { DigitDatePicker } from "../../components";

class StoryDigitDatePicker extends React.Component {
  state = {
    date: null
  };

  onDateChanged = newDate => {
    this.setState({
      date: newDate
    });
  };

  render() {
    const { upperLabel } = this.props;
    const { date } = this.state;

    return (
      <DigitDatePicker
        upperLabel={upperLabel}
        value={date}
        onChange={this.onDateChanged}
      />
    );
  }
}

export default StoryDigitDatePicker;
