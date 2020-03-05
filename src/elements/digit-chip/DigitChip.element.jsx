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
    const classes = useLayoutMaterialUi({ flex, alignSelf, size });

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
    deleteIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

DigitChip.defaultProps = {
    deleteIcon: Close
};

export default DigitChip;
