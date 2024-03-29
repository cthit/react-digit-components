import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

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
        <ButtonGroup
            classes={classes}
            variant={raised ? "contained" : outlined ? "outlined" : "text"}
            color={primary ? "primary" : secondary ? "secondary" : "inherit"}
            disabled={disabled}
            size={small ? "small" : large ? "large" : "medium"}
        >
            {buttons.map(button => (
                <Button
                    key={button.text}
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
    /** Array of buttons to be in the ButtonGroup. Read more about the prop types in DigitButton.*/
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            disabled: PropTypes.bool,
            startIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
            endIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
            onClick: PropTypes.func
        })
    ),
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
    large: PropTypes.bool,
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
    })
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
