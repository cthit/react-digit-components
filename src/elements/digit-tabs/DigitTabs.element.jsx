import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import withStyles from "@material-ui/styles/withStyles";
import PropTypes from "prop-types";
import React from "react";
import { Text, Title } from "../../styles/digit-text/DigitText.styles";
import findIndex from "lodash/findIndex";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

const styles = ({ inheritBackground, ...theme }) => ({
    backgroundPrimary: {
        backgroundColor: theme.palette.primary.main
    },
    backgroundInherit: {
        background: "inherit"
    },
    scrollButtons: {
        color: "white !important"
    },
    tabTextColorPrimary: {
        color: "white !important"
    },
    indicator: {
        height: "3px"
    }
});

const DigitTabs = ({
    selected,
    tabs,
    centered,
    onChange,
    titleFont,
    fullWidth,
    classes,
    primaryIndicator,
    inheritBackground,
    size,
    alignSelf,
    flex
}) => {
    const layoutClasses = useLayoutMaterialUi({ flex, alignSelf, size });
    console.log();

    return (
        <Tabs
            classes={{
                root:
                    layoutClasses.root +
                    " " +
                    (inheritBackground
                        ? classes.backgroundInherit
                        : classes.backgroundPrimary),

                scrollButtons: classes.scrollButtons,
                indicator: classes.indicator
            }}
            value={findIndex(tabs, tab => tab.value === selected)}
            centered={centered}
            onChange={(event, value) => {
                onChange(tabs[value].value);
            }}
            scrollButtons="on"
            textColor="primary"
            variant={
                fullWidth ? "fullWidth" : centered ? "standard" : "scrollable"
            }
            orientation="horizontal"
            indicatorColor={primaryIndicator ? "primary" : "secondary"}
        >
            {tabs.map(tab => {
                return (
                    <Tab
                        classes={{
                            textColorPrimary: classes.tabTextColorPrimary
                        }}
                        disabled={tab.disabled}
                        key={tab.value}
                        icon={
                            tab.icon != null
                                ? React.createElement(tab.icon, null)
                                : null
                        }
                        textColor={"primary"}
                        label={
                            titleFont ? (
                                <Title white text={tab.text} />
                            ) : (
                                <Text white text={tab.text} />
                            )
                        }
                    />
                );
            })}
            ;
        </Tabs>
    );
};

DigitTabs.displayName = "DigitTabs";
DigitTabs.propTypes = {
    /** The selected tab. Is the value in the tabs array of objects. */
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    /** An array of objects with information of each tab*/
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            /** The text that is shown for the tab */
            text: PropTypes.string,
            /** The unique value for the tab */
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            /** Icon that would be on top of the text */
            icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
            /** If the tab is disabled */
            disabled: PropTypes.bool
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
    tabs: [],
    size: {}
};

export { DigitTabs };

export default withStyles(styles)(DigitTabs);
