import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "@material-ui/core";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";
import { Title, Text } from "../../styles/digit-text/DigitText.styles";

const DigitTabs = ({
  selected,
  labels,
  centered,
  fullWidth,
  onChange,
  titleFont
}) => (
  <Fill>
    <Tabs
      value={selected}
      centered={centered}
      fullWidth={fullWidth}
      onChange={(event, value) => {
        onChange(value);
      }}
    >
      {labels.map(label => {
        return (
          <Tab
            key={label}
            label={titleFont ? <Title text={label} /> : <Text text={label} />}
          />
        );
      })}
      ;
    </Tabs>
  </Fill>
);

DigitTabs.displayName = "DigitTabs";
DigitTabs.propTypes = {
  selected: PropTypes.number.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  centered: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  titleFont: PropTypes.bool
};

export default DigitTabs;
