import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PropTypes from "prop-types";
import React from "react";
import { Text } from "../../styles/digit-text/DigitText.styles";
import { StyledBottomNavigation } from "./DigitBottomNavigation.styles.element";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

const DigitBottomNavigation = ({
    selected,
    tabs,
    showLabels,
    onChange,
    flex,
    alignSelf,
    justifySelf,
    size,
    padding,
    margin
}) => {
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        justifySelf,
        size: { height: "64px", width: "100%", ...size },
        padding,
        margin
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
    onChange: PropTypes.func.isRequired,
    /** Controls the flex property for the most outer element in this component.*/
    flex: PropTypes.string,

    /** Controls the alignSelf property for the most outer element in this component.*/
    alignSelf: PropTypes.oneOf([
        "auto",
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "baseline",
        "initial",
        "inherit"
    ]),
    /** Controls the justifySelf property for the most outer element in this component. */
    justifySelf: PropTypes.oneOf([
        "enter",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "left",
        "right",
        "baseline",
        "inherit",
        "initial"
    ]),
    /** Controls the size for the most outer element in this component. You can set minWidth/Height, maxWidth/Height
     * and width/height via an object
     */
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        minWidth: PropTypes.string,
        minHeight: PropTypes.string,
        maxWidth: PropTypes.string,
        maxHeight: PropTypes.string
    }),
    /** Padding property for the most outer element in this component.
     * It can either be a string, using the padding shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
    /** Margin property for the most outer element in this component.
     * It can either be a string, using the margin shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ])
};

DigitBottomNavigation.defaultProps = {
    showLabels: true
};

export default DigitBottomNavigation;
