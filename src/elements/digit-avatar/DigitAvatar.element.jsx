import React from "react";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";

const DigitAvatar = ({ icon, imageSrc, imageAlt }) => (
    <Avatar alt={imageAlt} src={imageSrc}>
        {icon != null ? React.createElement(icon, null) : null}
    </Avatar>
);

DigitAvatar.propTypes = {
    /** The icon of the FAB. Use @material-ui/icons.  */
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /** URL to an image src.*/
    imageSrc: PropTypes.string,
    /** Alternative text for the image, used if for example the image isn't loaded. */
    imageAlt: PropTypes.string
};

export default DigitAvatar;
