import React from "react";
import { DigitTextField } from "../../components";

class StoryDigitTextField extends React.Component {
  state = {
    textFieldValue: ""
  };

  onTextFieldChanged = e => {
    this.setState({
      textFieldValue: e.target.value
    });
  };

  render() {
    const { textFieldValue } = this.state;
    const {
      type,
      error,
      errorMessage,
      lowerLabel,
      upperLabel,
      disabled,
      style
    } = this.props;

    return (
      <DigitTextField
        value={textFieldValue}
        onChange={this.onTextFieldChanged}
        password={type === "password"}
        numbersOnly={type === "numbersOnly"}
        error={error}
        errorMessage={errorMessage}
        lowerLabel={lowerLabel}
        upperLabel={upperLabel}
        disabled={disabled}
        outlined={style === "outlined"}
        filled={style === "filled"}
      />
    );
  }
}

export default StoryDigitTextField;
