import React from "react";
import { DigitSelect, DigitLayout } from "../../src";

class StoryDigitSelect extends React.Component {
    state = {
        selectedFlavour: "chocolate"
    };

    onSelectChanged = e => {
        this.setState({
            selectedFlavour: e.target.value
        });
    };

    render() {
        const { selectedFlavour } = this.state;
        const { disabled, upperLabel, lowerLabel, style } = this.props;

        return (
            <DigitLayout.Size width="200px" height="150px">
                <DigitSelect
                    onChange={this.onSelectChanged}
                    value={selectedFlavour}
                    disabled={disabled}
                    upperLabel={upperLabel}
                    lowerLabel={lowerLabel}
                    valueToTextMap={{
                        chocolate: "Chocolate",
                        vanilla: "Vanilla",
                        strawberry: "Strawberry"
                    }}
                    allowToChooseNone
                    outlined={style === "outlined"}
                    filled={style === "filled"}
                />
            </DigitLayout.Size>
        );
    }
}

export default StoryDigitSelect;
