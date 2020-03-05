import React, { useRef } from "react";
import DigitButton from "../digit-button";
import useDigitTranslations from "../../hooks/use-digit-translations";
import translations from "./DigitSelectFile.element.translations";
import { Row } from "../../styles/digit-layout/DigitLayout.styles";
import { Text } from "../../styles/digit-text/DigitText.styles";

const DigitSelectFile = ({
    onSelectFile,
    selectedFileName,
    image,
    selectText,
    noFileSelect,
    flex,
    alignSelf,
    size,
    padding,
    margin,
    buttonProps
}) => {
    const [text] = useDigitTranslations(translations);
    const fileRef = useRef(null);

    return (
        <Row
            alignItems={"baseline"}
            flex={flex}
            alignSelf={alignSelf}
            size={size}
            padding={padding}
            margin={margin}
            inline
        >
            <input
                type="file"
                style={{ display: "none" }}
                ref={fileRef}
                onChange={e => onSelectFile(e.target.files[0])}
            />
            <DigitButton
                text={
                    selectText != null
                        ? selectText
                        : image
                        ? text.SelectImage
                        : text.SelectFile
                }
                onClick={() => fileRef.current.click()}
                {...buttonProps}
            />
            <Text
                text={
                    selectedFileName != null
                        ? selectedFileName
                        : noFileSelect != null
                        ? noFileSelect
                        : image
                        ? text.NoImageChosen
                        : text.NoFileChosen
                }
            />
        </Row>
    );
};

export default DigitSelectFile;
