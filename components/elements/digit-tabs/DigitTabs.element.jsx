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
  /** The selected tab index */
  selected: PropTypes.number.isRequired,
  /** An array of labels for the tabs.*/
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** If true, then centers the tabs*/
  centered: PropTypes.bool.isRequired,
  /** If true, then expands the tabs*/
  fullWidth: PropTypes.bool.isRequired,
  /** A function with the new selected index as the only argument.
   * Use this to keep track of the currently selected tab.
   */
  onChange: PropTypes.func.isRequired,
  /** If true, then the text uses the DigitText.Title font instead */
  titleFont: PropTypes.bool
};

DigitTabs.defaultProps = {
  titleFont: false
};

export default DigitTabs;
