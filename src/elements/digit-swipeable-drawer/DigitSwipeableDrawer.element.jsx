import React from "react";
import PropTypes from "prop-types";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(() => ({
    root: {
        position: "relative"
    }
}));

const DigitSwipeableDrawer = ({ open, onSwipe, render }) => {
    const classes = useStyles();

    return (
        <SwipeableDrawer
            open={open}
            onClose={() => onSwipe(false)}
            onOpen={() => onSwipe(true)}
            classes={classes}
        >
            {render()}
        </SwipeableDrawer>
    );
};

DigitSwipeableDrawer.displayName = "DigitSwipeableDrawer";

DigitSwipeableDrawer.propTypes = {
    /** A render prop to render the content of the drawer */
    render: PropTypes.func.isRequired,
    /** Controls if the drawer is open or not.  */
    open: PropTypes.bool.isRequired,
    /** When the drawer is swiped, onSwipe is called. onSwipe(true) if swipes open, onSwipe(false) if it's closing. */
    onSwipe: PropTypes.func.isRequired
};

DigitSwipeableDrawer.defaultProps = {
    render: () => null,
    onSwipe: () => {},
    open: false
};

export default DigitSwipeableDrawer;
