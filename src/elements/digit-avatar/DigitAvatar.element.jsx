import React from "react";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

const DigitAvatar = ({
    icon,
    imageSrc,
    imageAlt,
    flex,
    alignSelf,
    justifySelf,
    size,
    padding,
    margin
}) => {
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        justifySelf,
        size,
        padding,
        margin
    });

    return (
        <Avatar classes={classes} alt={imageAlt} src={imageSrc}>
            {icon != null ? React.createElement(icon, null) : null}
        </Avatar>
    );
};

DigitAvatar.propTypes = {
    /** The icon of the FAB. Use @material-ui/icons.  */
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /** URL to an image src.*/
    imageSrc: PropTypes.string,
    /** Alternative text for the image, used if for example the image isn't loaded. */
    imageAlt: PropTypes.string,
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
    ])
};

export default DigitAvatar;
