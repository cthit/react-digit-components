import React from "react";
import { DigitRadioButtonGroup } from "../../src";

class StoryRadioButtonGroup extends React.Component {
    state = {
        selected: ""
    };

    onSelectedChange = e => {
        this.setState({
            selected: e.target.value
        });
    };

    render() {
        const { upperLabel, lowerLabel, error, errorMessage } = this.props;

        return (
            <DigitRadioButtonGroup
                value={this.state.selected}
                onChange={this.onSelectedChange}
                upperLabel={upperLabel}
                lowerLabel={lowerLabel}
                error={error}
                errorMessage={errorMessage}
                radioButtons={[
                    {
                        id: "5000",
                        primary: true,
                        label: "Primary"
                    },
                    {
                        id: "4000",
                        secondary: true,
                        label: "Secondary"
                    },
                    {
                        id: "3000",
                        label: "Default"
                    },
                    {
                        id: "2000",
                        disabled: true,
                        label: "Disabled"
                    }
                ]}
            />
        );
    }
}

export default StoryRadioButtonGroup;
