import PropTypes from "prop-types";
import React from "react";
import ReactMarkdown from "react-markdown";
import {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Text
} from "../../styles/digit-text/DigitText.styles";
import DigitTable from "../../views/digit-table";
import styled from "styled-components";

const StyledReactMarkdown = styled(ReactMarkdown)`
    flex: ${props => props.flex || "0 1 auto"};
    align-self: ${props => props.alignSelf || "auto"};

    width: ${props => props.size.width || "auto"};
    height: ${props => props.size.height || "auto"};

    max-width: ${props => props.size.maxWidth || "none"};
    max-height: ${props => props.size.maxHeight || "none"};

    min-width: ${props => props.size.minWidth || 0};
    min-height: ${props => props.size.minHeight || 0};
`;

const DigitMarkdown = ({ markdownSource, flex, alignSelf, size }) => (
    <StyledReactMarkdown
        flex={flex}
        alignSelf={alignSelf}
        size={size}
        source={markdownSource}
        renderers={{
            table: data => {
                const headerTextsArray = data.children[0].props.children[0].props.children.map(
                    cellRawObject => {
                        return cellRawObject.props.children[0];
                    }
                );

                const headerTexts = {};

                for (let i = 0; i < headerTextsArray.length; i++) {
                    const headerText = headerTextsArray[i];
                    headerTexts[headerText] = headerText;
                }

                const rowsTexts = data.children[1].props.children.map(
                    rowRawObject => {
                        //Each cell
                        const cells = rowRawObject.props.children.map(
                            cellRawObject => {
                                return cellRawObject.props.children[0];
                            }
                        );

                        const rowObject = {};

                        for (let i = 0; i < cells.length; i++) {
                            const cellText = cells[i];
                            const headerText = headerTextsArray[i];
                            rowObject[headerText] = cellText;
                        }

                        return rowObject;
                    }
                );

                return (
                    <DigitTable
                        titleText=""
                        searchText=""
                        idProp={headerTextsArray[0]}
                        startOrderBy={headerTextsArray[0]}
                        columnsOrder={headerTextsArray}
                        headerTexts={headerTexts}
                        data={rowsTexts}
                    />
                );
            },
            heading: data => {
                const text = data.children[0];
                switch (data.level) {
                    case 1:
                        return <Heading1 text={text} />;
                    case 2:
                        return <Heading2 text={text} />;
                    case 3:
                        return <Heading3 text={text} />;
                    case 4:
                        return <Heading4 text={text} />;
                    case 5:
                        return <Heading5 text={text} />;
                    case 6:
                        return <Heading6 text={text} />;
                    default:
                        return null;
                }
            },
            paragraph: data => {
                return <Text text={data.children} />;
            },
            listItem: data => {
                return (
                    <li>
                        <Text text={data.children} />
                    </li>
                );
            }
        }}
    />
);

DigitMarkdown.displayName = "DigitMarkdown";
DigitMarkdown.propTypes = {
    /** Markdown text. */
    markdownSource: PropTypes.string.isRequired
};

DigitMarkdown.defaultProps = {
    markdownSource: "",
    size: {}
};

export default DigitMarkdown;
