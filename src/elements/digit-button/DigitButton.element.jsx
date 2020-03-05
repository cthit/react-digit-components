import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React from "react";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

const DigitButton = ({
    text,
    onClick,
    primary,
    secondary,
    raised,
    disabled,
    submit,
    outlined,
    form,
    startIcon,
    endIcon,
    flex,
    alignSelf,
    size,
    padding,
    margin
}) => {
    const classes = useLayoutMaterialUi({ flex, alignSelf, size });

    return (
        <Button
            classes={classes}
            type={submit ? "submit" : "button"}
            onClick={onClick}
            disabled={disabled}
            color={primary ? "primary" : secondary ? "secondary" : "inherit"}
            variant={raised ? "contained" : outlined ? "outlined" : "text"}
            form={form}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {text}
        </Button>
    );
};

DigitButton.displayName = "DigitButton";
DigitButton.propTypes = {
    /** The text on your button. Will be capitalized. */
    text: PropTypes.string.isRequired,
    /** The function which will be called when the button has been pressed.*/
    onClick: PropTypes.func,
    /** Sets the color to the primary one. This has predence precedence over secondary. */
    primary: PropTypes.bool,
    /** Sets the color to the secondary one. This has precedence over the normal button. */
    secondary: PropTypes.bool,
    /** Makes the primary color, secondary or gray the background color. Also gives it
     * a "depth" feeling.
     */
    raised: PropTypes.bool,
    /**
     * Adds an outline around the button in the primary, secondary or black color.
     */
    outlined: PropTypes.bool,
    /** Disables the button. onClick will not be called if you click the button.
     * The styling of the button also changes to reflect.
     */
    disabled: PropTypes.bool,
    /** If true, then forms will be called if you press this button. No need to use onClick.
     * This can be useful for e.g. DigitForm.
     */
    submit: PropTypes.bool,
    form: PropTypes.string
};

DigitButton.defaultProps = {
    onClick: () => {},
    primary: false,
    secondary: false,
    raised: false,
    outlined: false,
    disabled: false,
    submit: false,
    deleteDialogForm: "",
    startIcon: null,
    endIcon: null,
    text: "Button"
};

export default DigitButton;
