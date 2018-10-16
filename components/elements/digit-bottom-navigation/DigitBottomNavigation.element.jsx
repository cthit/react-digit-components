import React from "react";
import PropTypes from "prop-types";
import { BottomNavigationAction } from "@material-ui/core";
import { StyledBottomNavigation } from "./DigitBottomNavigation.styles.element";
import { Text } from "../../styles/digit-text/DigitText.styles";

const DigitBottomNavigation = ({
  selected,
  labels,
  icons,
  showLabels,
  onChange
}) => (
  <StyledBottomNavigation
    value={selected}
    showLabels={showLabels}
    onChange={(event, selected) => {
      onChange(selected);
    }}
  >
    {labels.map((label, index) => {
      return (
        <BottomNavigationAction
          key={label}
          label={<Text text={label} />}
          icon={icons[index]}
        />
      );
    })}
  </StyledBottomNavigation>
);

DigitBottomNavigation.propTypes = {
  selected: PropTypes.number.isRequired,
  showLabels: PropTypes.bool,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  icons: PropTypes.arrayOf(PropTypes.element).isRequired,
  onChange: PropTypes.func.isRequired
};

export default DigitBottomNavigation;
