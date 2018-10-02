import React from "react";
import PropTypes from "prop-types";
import { BottomNavigationAction } from "@material-ui/core";
import { StyledBottomNavigation } from "./styles.js";

const GammaBottomNavigation = ({
  selected,
  labels,
  icons,
  showLabels,
  onChange
}) => (
  <StyledBottomNavigation value={selected} showLabels={showLabels} onChange={(event, selected) => {onChange(selected)}} >
    {labels.map((label, index) => {
      return(
        <BottomNavigationAction key={label} label={label} icon={icons[index]} />
      );
    })}
  </StyledBottomNavigation>
);

export default GammaBottomNavigation;
