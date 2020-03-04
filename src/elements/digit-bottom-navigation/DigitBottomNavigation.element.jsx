import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PropTypes from "prop-types";
import React from "react";
import { Text } from "../../styles/digit-text/DigitText.styles";
import { StyledBottomNavigation } from "./DigitBottomNavigation.styles.element";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

const DigitBottomNavigation = ({
    selected,
    tabs,
    showLabels,
    onChange,
    flex,
    alignSelf,
    size
}) => {
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        size: { height: "64px", width: "100%", ...size }
    });

    return (
        <StyledBottomNavigation
            classes={classes}
            value={selected}
            showLabels={showLabels}
            onChange={(event, selected) => {
                onChange(selected);
            }}
        >
            {tabs.map(tab => {
                return (
                    <BottomNavigationAction
                        key={tab.label}
                        label={<Text text={tab.label} />}
                        icon={tab.icon}
                    />
                );
            })}
        </StyledBottomNavigation>
    );
};

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
    /**
     * Array of tabs, with label and icon
     */
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
                .isRequired
        })
    ).isRequired,
    /** A function with the new selected index as the only argument.
     * Use this to keep track of the currently selected tab.
     */
    onChange: PropTypes.func.isRequired
};

DigitBottomNavigation.defaultProps = {
    showLabels: true
};

export default DigitBottomNavigation;
