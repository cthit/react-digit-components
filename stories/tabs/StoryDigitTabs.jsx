import React from "react";
import { DigitTabs } from "../../components";

class StoryDigitTabs extends React.Component {
    state = { selected: 0 };

    onSelectedChange = selected => {
        this.setState({
            selected: selected
        });
    };
    render() {
        const { selected } = this.state;
        const { fullWidth, centered, titleFont, nLabels } = this.props;
        const labels = this._generateLabels(nLabels);
        console.log(labels);

        return (
            <DigitTabs
                selected={selected}
                onChange={this.onSelectedChange}
                labels={labels}
                centered={centered}
                fullWidth={fullWidth}
                titleFont={titleFont}
            />
        );
    }

    _generateLabels(nLabels) {
        const output = [];
        for (let i = 0; i < nLabels; i++) {
            output.push("Label " + (i + 1));
        }
        return output;
    }
}

export default StoryDigitTabs;
