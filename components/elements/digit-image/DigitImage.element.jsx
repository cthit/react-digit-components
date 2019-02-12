import React from "react";
import Image from "material-ui-image";

const DigitImage = ({
    src,
    imageStyle,
    aspectRatio,
    onClick,
    backgroundColor
}) => (
    <Image
        disableTransition
        src={src}
        imageStyle={imageStyle}
        aspectRatio={aspectRatio}
        onClick={onClick}
        // backgroundColor={backgroundColor}
    />
);

export default DigitImage;
