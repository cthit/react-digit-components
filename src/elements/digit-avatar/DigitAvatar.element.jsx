import React from "react";
import { Avatar } from "@material-ui/core";

const DigitAvatar = ({ icon, imageSrc, alt }) => (
    <Avatar alt={alt} src={imageSrc}>
        {icon != null ? React.createElement(icon, null) : null}
    </Avatar>
);

export default DigitAvatar;
