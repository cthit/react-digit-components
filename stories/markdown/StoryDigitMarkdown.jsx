import React from "react";
import { DigitLayout, DigitTextArea, DigitMarkdown } from "../../components";

class StoryDigitMarkdown extends React.Component {
  state = {
    markdownSource: "# Hej digIT"
  };

  onTextAreaChanged = e => {
    this.setState({
      markdownSource: e.target.value
    });
  };

  render() {
    const { markdownSource } = this.state;

    return (
      <div>
        <DigitLayout.Size absWidth="500px">
          <DigitTextArea
            upperLabel="Markdown"
            value={markdownSource}
            rows={5}
            rowsMax={10}
            onChange={this.onTextAreaChanged}
          />
        </DigitLayout.Size>
        <DigitMarkdown markdownSource={markdownSource} />
      </div>
    );
  }
}

export default StoryDigitMarkdown;
