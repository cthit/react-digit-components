import React from "react";
import PropTypes from "prop-types";
import { BottomNavigationAction } from "@material-ui/core";
import { StyledBottomNavigation } from "./DigitBottomNavigation.styles.element";

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
        <BottomNavigationAction key={label} label={label} icon={icons[index]} />
      );
    })}
  </StyledBottomNavigation>
);

DigitBottomNavigation.propTypes = {
  selected: PropTypes.number.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  icons: PropTypes.arrayOf(PropTypes.element).isRequired,
  onChange: PropTypes.func.isRequired
};

export default DigitBottomNavigation;
