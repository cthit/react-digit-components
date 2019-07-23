import React from "react";
import Avatar from "@material-ui/core/Avatar";

const DigitAvatar = ({ icon, imageSrc, alt }) => (
    <Avatar alt={alt} src={imageSrc}>
        {icon != null ? React.createElement(icon, null) : null}
    </Avatar>
);

export default DigitAvatar;
