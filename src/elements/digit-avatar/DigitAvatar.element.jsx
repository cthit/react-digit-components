import React from "react";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

const DigitAvatar = ({
    icon,
    imageSrc,
    imageAlt,
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
    imageAlt: PropTypes.string
};

export default DigitAvatar;
