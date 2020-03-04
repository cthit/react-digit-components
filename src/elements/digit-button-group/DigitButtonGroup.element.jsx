import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

const DigitButtonGroup = ({
    buttons,
    raised,
    outlined,
    primary,
    secondary,
    disabled,
    small,
    large,
    flex,
    alignSelf,
    size
}) => {
    const classes = useLayoutMaterialUi({ flex, alignSelf, size });

    return (
        <ButtonGroup
            classes={classes}
            variant={raised ? "contained" : outlined ? "outlined" : "text"}
            color={primary ? "primary" : secondary ? "secondary" : "inherit"}
            disabled={disabled}
            size={small ? "small" : large ? "large" : "medium"}
        >
            {buttons.map(button => (
                <Button
                    disabled={button.disabled}
                    startIcon={button.startIcon}
                    endIcon={button.endIcon}
                    onClick={button.onClick}
                >
                    {button.text}
                </Button>
            ))}
        </ButtonGroup>
    );
};

DigitButtonGroup.displayName = "DigitButtonGroup";
DigitButtonGroup.propTypes = {
    /** Array of buttons to be in the ButtonGroup. */
    buttons: PropTypes.array,
    /** Sets the color to the primary one. This has predence precedence over secondary. */
    primary: PropTypes.bool,
    /** Sets the color to the secondary one. This has precedence over the normal button. */
    secondary: PropTypes.bool,
    /** Makes the primary color, secondary or gray the background color.
     * Also gives it a "depth" feeling.
     * */
    raised: PropTypes.bool,
    /** Adds an outline around the buttons. */
    outlined: PropTypes.bool,
    /** Disables the buttons. */
    disabled: PropTypes.bool,
    /** If true, then the buttons will be slightly samller. */
    small: PropTypes.bool,
    /** If true, then the buttons will be slightly larger. */
    large: PropTypes.bool
};

DigitButtonGroup.defaultProps = {
    buttons: [],
    primary: false,
    secondary: false,
    raised: false,
    outlined: false,
    disabled: false,
    small: false,
    large: false
};

export default DigitButtonGroup;
