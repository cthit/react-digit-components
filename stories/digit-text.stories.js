import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitText, DigitLayout, DigitProviders } from "../components";
import DigitTextReadme from "../components/elements/digit-button/readme.md";

const DigitTextStory = storiesOf("Texts", module);

DigitTextStory.addDecorator(withKnobs);

DigitTextStory.add(
  "DigitText",
  withReadme(DigitTextReadme, () => {
    return (
      <DigitProviders>
        <DigitLayout.Column>
          <DigitText.Heading1 text="Heading1;" />
          <DigitText.Heading2 text="Heading2;" />
          <DigitText.Heading3 text="Heading3;" />
          <DigitText.Heading4 text="Heading4;" />
          <DigitText.Heading5 text="Heading5;" />
          <DigitText.Heading6 text="Heading6;" />
          <DigitText.Title text="Title; The quick brown fox jumps over the lazy dog" />
          <DigitText.Subtitle text="Subtitle;  The quick brown fox jumps over the lazy dog" />
          <DigitText.Subtitle2 text="Subtitle2;  The quick brown fox jumps over the lazy dog" />
          <DigitText.Text text="Text;  The quick brown fox jumps over the lazy dog" />
        </DigitLayout.Column>
      </DigitProviders>
    );
  })
);
