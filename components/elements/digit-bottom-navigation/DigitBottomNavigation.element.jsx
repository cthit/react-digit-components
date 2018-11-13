import { BottomNavigationAction } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Text } from "../../styles/digit-text/DigitText.styles";
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
                <BottomNavigationAction
                    key={label}
                    label={<Text text={label} />}
                    icon={icons[index]}
                />
            );
        })}
    </StyledBottomNavigation>
);

DigitBottomNavigation.displayName = "DigitBottomNavigation";
DigitBottomNavigation.propTypes = {
    /** The selected tab, can be 0 -> (number of tabs - 1).
     * This is an element, which means its uncontrolled.
     * You need to save selected your self and with
     * onChange update it.
     */
    selected: PropTypes.number.isRequired,
    /** If you want the non selected tabs to show a label. */
    showLabels: PropTypes.bool,
    /** An array of labels for the tabs. Needs to have the same length as icons*/
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    /** An array of images (use @material-ui/icons). Needs to have the same length as labels */
    icons: PropTypes.arrayOf(PropTypes.element).isRequired,
    /** A function with the new selected index as the only argument.
     * Use this to keep track of the currently selected tab.
     */
    onChange: PropTypes.func.isRequired
};

DigitBottomNavigation.defaultProps = {
    showLabels: true
};

export default DigitBottomNavigation;
