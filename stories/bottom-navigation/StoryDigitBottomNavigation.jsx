import React from "react";
import IconOne from "@material-ui/icons/Android";
import { DigitBottomNavigation } from "../../components";

const labels = ["Label One", "Label Two", "Label Three"];
const icons = [<IconOne />, <IconOne />, <IconOne />];

class StoryDigitBottomNavigation extends React.Component {
  state = {
    selected: 0
  };

  onSelectedChange = selected => {
    this.setState({
      selected: selected
    });
  };

  render() {
    const { selected } = this.state;
    const { showLabels } = this.props;

    return (
      <DigitBottomNavigation
        selected={selected}
        onChange={this.onSelectedChange}
        labels={labels}
        icons={icons}
        showLabels={showLabels}
      />
    );
  }
}

export default StoryDigitBottomNavigation;
