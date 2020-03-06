import React, { useRef } from "react";
import PropTypes from "prop-types";
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

DigitSelectFile.propTypes = {
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

export default DigitSelectFile;
