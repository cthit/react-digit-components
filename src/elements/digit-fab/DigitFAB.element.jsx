import PropTypes from "prop-types";
import React from "react";
import { Text } from "../../styles/digit-text/DigitText.styles";
import Fab from "@material-ui/core/Fab";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

const DigitFAB = ({
    onClick,
    disabled,
    primary,
    secondary,
    submit,
    icon,
    text,
    form,
    flex,
    alignSelf,
    size,
    padding,
    margin
}) => {
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        size,
        padding,
        margin
    });

    return (
        <Fab
            classes={classes}
            variant={text == null ? "round" : "extended"}
            type={submit ? "submit" : "button"}
            disabled={disabled}
            onClick={onClick}
            color={primary ? "primary" : secondary ? "secondary" : "inherit"}
            form={form}
        >
            {React.createElement(icon, null)}
            {text != null && (
                <>
                    <Text text={text} />
                </>
            )}
        </Fab>
    );
};

DigitFAB.displayName = "DigitFAB";
DigitFAB.propTypes = {
    /** The function which will be called when the button has been pressed.*/
    onClick: PropTypes.func,
    /** The icon of the FAB. Use @material-ui/icons.  */
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
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
    submit: PropTypes.bool,
    /**
     * If provided, the fab will become an extended fab
     */
    text: PropTypes.string,
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
    ])
};

DigitFAB.defaultProps = {
    onClick: () => {},
    disabled: false,
    primary: false,
    secondary: false,
    submit: false,
    icon: () => null,
    text: null
};

export default DigitFAB;
