import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React from "react";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

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
    justifySelf,
    size,
    padding,
    margin,
    gridColumn,
    gridRow
}) => {
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        justifySelf,
        size,
        padding,
        margin,
        gridColumn,
        gridRow
    });

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
    /** The name of the form that this button should be connected to via submit.  */
    form: PropTypes.string,
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
    ]),
    /** Controls grid-column-start and grid-column-end */
    gridColumn: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    }),
    /** Controls grid-row-start and grid-row-end */
    gridRow: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    }),
    /** Icon at the start of the button. Use @material-ui/icons.  */
    startIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /** Icon at the start of the button. Use @material-ui/icons.  */
    endIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
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
