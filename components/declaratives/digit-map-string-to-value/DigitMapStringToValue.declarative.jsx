import React from "react";
import PropTypes from "prop-types";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const DigitMapStringToValue = ({ currentString, stringtoValueMap, render }) =>
  render(getCurrentValue(currentString, stringtoValueMap));

function getCurrentValue(currentString, stringtoValueMap) {
  if (!StringtoValueMap.hasOwnProperty(currentString)) {
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
  currentString: PropTypes.string.isRequired,
  stringtoValueMap: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired
};

export default DigitMapStringToValue;
