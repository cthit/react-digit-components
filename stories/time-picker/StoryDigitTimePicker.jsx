import React from "react";
import { DigitTimePicker } from "../../components";

class StoryDigitTimePicker extends React.Component {
  state = {
    date: null
  };

  onTimeChanged = newDate => {
    this.setState({
      date: newDate
    });
  };

  render() {
    const { date } = this.state;
    const { upperLabel } = this.props;

    return (
      <DigitTimePicker
        upperLabel={upperLabel}
        value={date}
        onChange={this.onTimeChanged}
      />
    );
  }
}

export default StoryDigitTimePicker;
