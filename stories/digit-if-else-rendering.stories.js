import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitIfElseRendering } from "../components";
import DigitProviders from "../components/declaratives/digit-providers";
import DigitIfElseRenderingReadme from "../components/elements/digit-button/readme.md";
import { Text, Title } from "../components/styles/digit-text/DigitText.styles";

const DigitIfElseRenderingStory = storiesOf("Declaratives", module);

DigitIfElseRenderingStory.addDecorator(withKnobs);

DigitIfElseRenderingStory.add(
  "DigitIfElseRendering",
  withReadme(DigitIfElseRenderingReadme, () => {
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
  })
);
