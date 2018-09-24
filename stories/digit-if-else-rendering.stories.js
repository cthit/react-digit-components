import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitIfElseRendering } from "../components";
import DigitIfElseRenderingReadme from "../components/elements/digit-button/readme.md";

const DigitIfElseRenderingStory = storiesOf("Declaratives", module);

DigitIfElseRenderingStory.addDecorator(withKnobs);

DigitIfElseRenderingStory.add(
  "DigitIfElseRendering",
  withReadme(DigitIfElseRenderingReadme, () => {
    const renderIf = boolean("Render if", true);

    return (
      <DigitIfElseRendering
        ifRender={() => <div>Render this?</div>}
        elseRender={() => <div>Render That</div>}
        test={renderIf}
      />
    );
  })
);
