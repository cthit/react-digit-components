import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "@material-ui/core";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const DigitTabs = ({
selected,
labels,
centered,
fullWidth,
handleChange
}) => (
  <Fill>
    <Tabs value={selected} centered={centered} fullWidth={fullWidth} onChange={handleChange}>
      {labels.map(label => {
        return (
          <Tab key={label} label={label} />
        );
      })};
    </Tabs>
  </Fill>
);

DigitTabs.propTypes = {
  selected: PropTypes.number.isRequired,
  labels: PropTypes.arrayOf(String).isRequired,
  centered: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default DigitTabs;
