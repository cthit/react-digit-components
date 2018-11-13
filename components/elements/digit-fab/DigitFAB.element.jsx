import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const DigitFAB = ({ onClick, disabled, primary, secondary, submit, icon }) => (
    <Button
        variant="fab"
        type={submit ? "submit" : "button"}
        disabled={disabled}
        onClick={onClick}
        color={primary ? "primary" : secondary ? "secondary" : "default"}
    >
        {React.createElement(icon, null)}
    </Button>
);

DigitFAB.displayName = "DigitFAB";
DigitFAB.propTypes = {
    /** The function which will be called when the button has been pressed.*/
    onClick: PropTypes.func,
    /** The icon of the FAB. Use @material-ui/icons.  */
    icon: PropTypes.func.isRequired,
    /** Disables the button. onClick will not be called if you click the button.
     * The styling of the button also changes to reflect.
     */
    disabled: PropTypes.bool,
    /** Sets the color to the primary one. This has predence precedence over secondary. */
    primary: PropTypes.bool,
    /** Sets the color to the secondary one. This has precedence over the normal button. */
    secondary: PropTypes.bool,
    /** If true, then forms will be called if you press this button. No need to use onClick.
     * This can be useful for e.g. DigitForm.
     */
    submit: PropTypes.bool
};

DigitFAB.defaultProps = {
    onClick: () => {},
    disabled: false,
    primary: false,
    secondary: false,
    submit: false
};

export default DigitFAB;
