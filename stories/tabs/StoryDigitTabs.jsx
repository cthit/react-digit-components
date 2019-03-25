import React from "react";
import { DigitTabs } from "../../src";

class StoryDigitTabs extends React.Component {
    state = { selected: "/label-1" };

    onSelectedChange = selected => {
        this.setState({
            selected: selected
        });
    };
    render() {
        const { selected } = this.state;
        const { fullWidth, centered, titleFont, nLabels } = this.props;

        const tabs = this._generateTabs(nLabels);

        return (
            <DigitTabs
                selected={selected}
                onChange={this.onSelectedChange}
                tabs={tabs}
                centered={centered}
                fullWidth={fullWidth}
                titleFont={titleFont}
            />
        );
    }

    _generateTabs(nLabels) {
        const output = [];
        for (let i = 0; i < nLabels; i++) {
            output.push({
                text: "Label " + (i + 1),
                value: "/label-" + (i + 1)
            });
        }
        return output;
    }
}

export default StoryDigitTabs;
