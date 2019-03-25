import PropTypes from "prop-types";

const DigitMapStringToValue = ({ currentString, stringToValueMap, render }) =>
    render(getCurrentValue(currentString, stringToValueMap));

function getCurrentValue(currentString, stringToValueMap) {
    if (!stringToValueMap.hasOwnProperty(currentString)) {
        console.log(
            "WARNING: There isn't a Value for the string: " + currentString
        );
        return 0;
    } else {
        return stringToValueMap[currentString];
    }
}

DigitMapStringToValue.displayName = "DigitMapStringToValue";
DigitMapStringToValue.propTypes = {
    /** The current key for the map */
    currentString: PropTypes.string.isRequired,
    /** String to any map */
    stringToValueMap: PropTypes.objectOf(PropTypes.any).isRequired,
    /** Render function that has the current value of the selected key as the first and only argument */
    render: PropTypes.func.isRequired
};

DigitMapStringToValue.defaultProps = {
    stringToValueMap: {},
    render: () => null,
    currentString: ""
};

export default DigitMapStringToValue;
