import React from "react";
import { DigitSwitch } from "../../components";

class StoryDigitSwitch extends React.Component {
  state = {
    checked: true
  };

  onCheckedChanged = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  render() {
    const { checked } = this.state;
    const { label, color, disabled, error, errorMessage } = this.props;

    return (
      <DigitSwitch
        value={checked}
        onChange={this.onCheckedChanged}
        label={label}
        primary={color === "primary"}
        secondary={color === "secondary"}
        disabled={disabled}
        error={error}
        errorMessage={errorMessage}
      />
    );
  }
}

export default StoryDigitSwitch;
