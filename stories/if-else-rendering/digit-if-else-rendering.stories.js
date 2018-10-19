import React from "react";

import { withKnobs, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { DigitIfElseRendering } from "../../components";
import DigitProviders from "../../components/declaratives/digit-providers";
import DigitIfElseRenderingReadme from "../../components/declaratives/digit-if-else-rendering/readme.md";
import {
  Text,
  Title
} from "../../components/styles/digit-text/DigitText.styles";

const DigitIfElseRenderingStory = storiesOf("Declaratives", module);

DigitIfElseRenderingStory.addDecorator(withKnobs);

DigitIfElseRenderingStory.add(
  "DigitIfElseRendering",
  () => {
    const renderIf = boolean("Render if", true);

    return (
      <DigitProviders>
        <DigitIfElseRendering
          ifRender={() => <Text text="Render this?" />}
          elseRender={() => <Title text="Render That" />}
          test={renderIf}
        />
      </DigitProviders>
    );
  },
  {
    info: {
      text: DigitIfElseRenderingReadme,
      propTables: [DigitIfElseRendering],
      propTablesExclude: [DigitProviders]
    }
  }
);
