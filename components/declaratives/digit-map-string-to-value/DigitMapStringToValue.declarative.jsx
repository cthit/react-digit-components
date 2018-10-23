import React from "react";
import PropTypes from "prop-types";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const DigitMapStringToValue = ({ currentString, stringtoValueMap, render }) =>
  render(getCurrentValue(currentString, stringtoValueMap));

function getCurrentValue(currentString, stringtoValueMap) {
  if (!stringtoValueMap.hasOwnProperty(currentString)) {
    console.log(
      "WARNING: There isn't a Value for the string: " + currentString
    );
    return 0;
  } else {
    return stringtoValueMap[currentString];
  }
}

DigitMapStringToValue.displayName = "DigitMapStringToValue";
DigitMapStringToValue.propTypes = {
  /** The current key for the map */
  currentString: PropTypes.string.isRequired,
  /** String to any map */
  stringtoValueMap: PropTypes.objectOf(PropTypes.any).isRequired,
  /** Render function that has the current value of the selected key as the first and only argument */
  render: PropTypes.func.isRequired
};

export default DigitMapStringToValue;
