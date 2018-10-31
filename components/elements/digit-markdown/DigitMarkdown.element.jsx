import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { DigitText } from "../..";
import DigitTable from "../../views/digit-table";
import { Text } from "../../styles/digit-text/DigitText.styles";
import DigitProviders from "../../declaratives/digit-providers";

const DigitMarkdown = ({ markdownSource }) => (
  <div>
    <ReactMarkdown
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
              const cells = rowRawObject.props.children.map(cellRawObject => {
                return cellRawObject.props.children[0];
              });

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
              return <DigitText.Heading1 text={text} />;
            case 2:
              return <DigitText.Heading2 text={text} />;
            case 3:
              return <DigitText.Heading3 text={text} />;
            case 4:
              return <DigitText.Heading4 text={text} />;
            case 5:
              return <DigitText.Heading5 text={text} />;
            case 6:
              return <DigitText.Heading6 text={text} />;
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
  </div>
);

DigitMarkdown.displayName = "DigitMarkdown";
DigitMarkdown.propTypes = {
  /** Markdown text. */
  markdownSource: PropTypes.string.isRequired
};

DigitMarkdown.defaultProps = {
  markdownSource: ""
};

export default DigitMarkdown;
