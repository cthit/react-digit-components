import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import withStyles from "@material-ui/styles/withStyles";
import PropTypes from "prop-types";
import React from "react";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";
import { Text, Title } from "../../styles/digit-text/DigitText.styles";
import findIndex from "lodash/findIndex";

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.primary.main
    },
    rootInherit: {
        flexGrow: 1,
        width: "100%",
        background: "inherit"
    },
    scrollButtons: {
        color: "white"
    }
});

const DigitTabs = ({
    selected,
    tabs,
    centered,
    fullWidth,
    onChange,
    titleFont,
    classes,
    inheritBackground,
    primaryIndicator
}) => (
    <Fill>
        <Tabs
            classes={{
                root: inheritBackground ? classes.rootInherit : classes.root,
                scrollButtons: classes.scrollButtons
            }}
            value={findIndex(tabs, tab => tab.value === selected)}
            centered={centered}
            variant={fullWidth ? "fullWidth" : "standard"}
            onChange={(event, value) => {
                onChange(tabs[value].value);
            }}
            scrollable={!centered}
            scrollButtons="on"
            textColor="primary"
            orientation="vertical"
            indicatorColor={primaryIndicator ? "primary" : "secondary"}
        >
            {tabs.map(tabs => {
                return (
                    <Tab
                        key={tabs.value}
                        label={
                            titleFont ? (
                                <Title white text={tabs.text} />
                            ) : (
                                <Text white text={tabs.text} />
                            )
                        }
                    />
                );
            })}
            ;
        </Tabs>
    </Fill>
);

DigitTabs.displayName = "DigitTabs";
DigitTabs.propTypes = {
    /** The selected tab. Is the value in the tabs array of objects. */
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    /** An array of objects with information of each tab*/
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            /** The text that is shown for the tab */
            text: PropTypes.string.isRequired,
            /** The unique value for the tab */
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired
        })
    ).isRequired,
    /** If true, then centers the tabs*/
    centered: PropTypes.bool,
    /** If true, then expands the tabs. If DigitTabs are centered, this will not take effect.*/
    fullWidth: PropTypes.bool,
    /** A function with the new selected index as the only argument.
     * Use this to keep track of the currently selected tab. (value) => {}
     */
    onChange: PropTypes.func.isRequired,
    /** If true, then the text uses the DigitText.Title font instead */
    titleFont: PropTypes.bool,
    /** Will use the background color of the parent */
    inheritBackground: PropTypes.bool,
    /** If you want to use the primary color as the indicator instead of secondary */
    primaryIndicator: PropTypes.bool
};

DigitTabs.defaultProps = {
    titleFont: false,
    tabs: []
};

export { DigitTabs };

export default withStyles(styles)(DigitTabs);
