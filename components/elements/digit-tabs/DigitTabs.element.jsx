import { Tab, Tabs, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";
import { Text, Title } from "../../styles/digit-text/DigitText.styles";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.main
    },
    scrollButtonsAuto: {
        color: "white"
    }
});

const DigitTabs = ({
    selected,
    labels,
    centered,
    fullWidth,
    onChange,
    titleFont,
    classes
}) => (
    <Fill>
        <Tabs
            classes={{
                root: classes.root,
                scrollButtonsAuto: classes.scrollButtonsAuto
            }}
            value={selected}
            centered={centered}
            fullWidth={fullWidth}
            onChange={(event, value) => {
                onChange(value);
            }}
            scrollable
            scrollButtons="auto"
            textColor="primary"
        >
            {labels.map(label => {
                return (
                    <Tab
                        key={label}
                        label={
                            titleFont ? (
                                <Title white text={label} />
                            ) : (
                                <Text white text={label} />
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

export { DigitTabs };

export default withStyles(styles)(DigitTabs);
