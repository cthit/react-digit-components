import React from "react";
import { DigitTextArea } from "../../components";

class StoryDigitTextArea extends React.Component {
  state = {
    textAreaValue: ""
  };

  onTextAreaChanged = e => {
    this.setState({
      textAreaValue: e.target.value
    });
  };

  render() {
    const { textAreaValue } = this.state;
    const {
      error,
      errorMessage,
      lowerLabel,
      upperLabel,
      disabled,
      style,
      rows,
      rowsMax
    } = this.props;

    return (
      <DigitTextArea
        value={textAreaValue}
        onChange={this.onTextAreaChanged}
        error={error}
        errorMessage={errorMessage}
        lowerLabel={lowerLabel}
        upperLabel={upperLabel}
        disabled={disabled}
        outline={style === "outline"}
        filled={style === "filled"}
        rows={rows}
        rowsMax={rowsMax}
      />
    );
  }
}

export default StoryDigitTextArea;
