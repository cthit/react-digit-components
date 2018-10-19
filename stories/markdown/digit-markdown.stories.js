import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import { DigitProviders, DigitMarkdown } from "../../components";
import DigitMarkdownReadme from "../../components/elements/digit-markdown/readme.md";
import StoryDigitMarkdown from "./StoryDigitMarkdown";

const DigitMarkdownStory = storiesOf("Elements", module);

DigitMarkdownStory.addDecorator(withKnobs);

DigitMarkdownStory.add(
  "DigitMarkdown",
  () => {
    return (
      <DigitProviders>
        <StoryDigitMarkdown />
      </DigitProviders>
    );
  },
  {
    info: {
      text: DigitMarkdownReadme,
      propTables: [DigitMarkdown],
      propTablesExclude: [DigitProviders, StoryDigitMarkdown]
    }
  }
);
