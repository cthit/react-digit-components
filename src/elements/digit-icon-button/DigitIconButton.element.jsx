import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import React from "react";

const DigitIconButton = ({
    disabled,
    onBlur,
    onClick,
    primary,
    secondary,
    icon
}) => (
    <IconButton
        disabled={disabled}
        onClick={onClick}
        onBlur={onBlur}
        color={primary ? "primary" : secondary ? "secondary" : "inherit"}
    >
        {React.createElement(icon, null)}
    </IconButton>
);

DigitIconButton.displayName = "DigitIconButton";
DigitIconButton.propTypes = {
    /** The function which will be called when the button is clicked. */
    onClick: PropTypes.func.isRequired,
    /** Sets the color to the primary one. This has predence precedence over secondary. */
    primary: PropTypes.bool,
    /** Sets the color to the secondary one. This has precedence over the normal button. */
    secondary: PropTypes.bool,
    /** Disables the button. onClick will not be called if you click the button.
     * The styling of the button also changes to reflect.
     */
    disabled: PropTypes.bool,
    /** The icon of the FAB. Use @material-ui/icons.  */
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
};

DigitIconButton.defaultProps = {
    primary: false,
    secondary: false,
    disabled: false,
    icon: () => null,
    onClick: () => {}
};

export default DigitIconButton;
