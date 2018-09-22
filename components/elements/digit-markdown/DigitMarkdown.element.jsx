import React from "react";
import ReactMarkdown from "react-markdown";
import { DigitText } from "../..";

const DigitMarkdown = ({ markdownSource }) => (
  <div>
    <ReactMarkdown
      source={markdownSource}
      renderers={{
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
        }
      }}
    />
  </div>
);

export default DigitMarkdown;
