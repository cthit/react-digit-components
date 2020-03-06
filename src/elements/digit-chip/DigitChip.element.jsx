import React from "react";
import Chip from "@material-ui/core/Chip";
import Close from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

const DigitChip = ({
    avatar,
    label,
    primary,
    secondary,
    outlined,
    onDelete,
    deleteIcon,
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
        <Chip
            classes={classes}
            deleteIcon={
                deleteIcon != null
                    ? React.createElement(deleteIcon, null)
                    : null
            }
            onDelete={onDelete}
            avatar={avatar}
            label={label}
            variant={outlined ? "outlined" : "default"}
            color={primary ? "primary" : secondary ? "secondary" : "default"}
        />
    );
};

DigitChip.propTypes = {
    /** Usually a DigitAvatar. An image for the chip. */
    avatar: PropTypes.element,
    /** Text label inside the chip */
    label: PropTypes.string,
    /** If primary color should be used */
    primary: PropTypes.bool,
    /** If secondary color should be used */
    secondary: PropTypes.bool,
    /** If the chip should be outlined */
    outlined: PropTypes.bool,
    /** If not null, then the deleteIcon will be shown and this function will be its callback function */
    onDelete: PropTypes.func,
    /** The icon that invokes onDelete. Not shown if onDelete is null */
    deleteIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
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
    padding: PropTypes.oneOf([
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
    margin: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ])
};

DigitChip.defaultProps = {
    deleteIcon: Close
};

export default DigitChip;
