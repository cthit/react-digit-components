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
    justifySelf,
    size,
    padding,
    margin,
    gridColumn,
    gridRow,
    buttonProps
}) => {
    const [text] = useDigitTranslations(translations);
    const fileRef = useRef(null);

    return (
        <Row
            alignItems={"baseline"}
            flex={flex}
            alignSelf={alignSelf}
            justifySelf={justifySelf}
            size={size}
            padding={padding}
            margin={margin}
            gridColumn={gridColumn}
            gridRow={gridRow}
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
    ]),
    /** Controls grid-column-start and grid-column-end */
    gridColumn: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    }),
    /** Controls grid-row-start and grid-row-end */
    gridRow: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    })
};

export default DigitSelectFile;
