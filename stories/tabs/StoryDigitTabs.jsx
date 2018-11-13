import React from "react";
import { DigitTabs } from "../../components";

const labels = ["Label One", "Label Two", "Label Three"];

class StoryDigitTabs extends React.Component {
    state = { selected: 0 };

    onSelectedChange = selected => {
        this.setState({
            selected: selected
        });
    };
    render() {
        const { selected } = this.state;
        const { fullWidth, centered, titleFont } = this.props;

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
}

export default StoryDigitTabs;
