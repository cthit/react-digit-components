import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import {
  DigitMarkdown,
  DigitProviders,
  DigitTextArea,
  DigitLayout
} from "../components";
import DigitMarkdownReadme from "../components/elements/digit-markdown/readme.md";
import { Value } from "react-powerplug";

const DigitMarkdownStory = storiesOf("Elements", module);

DigitMarkdownStory.addDecorator(withKnobs);

DigitMarkdownStory.add(
  "DigitMarkdown",
  withReadme(DigitMarkdownReadme, () => {
    return (
      <DigitProviders>
        <Value
          initial=""
          render={({ value, set }) => (
            <div>
              <DigitLayout.Size absWidth="500px">
                <DigitTextArea
                  upperLabel="Markdown"
                  value={value}
                  rows={5}
                  rowsMax={10}
                  onChange={e => {
                    set(e.target.value);
                  }}
                />
              </DigitLayout.Size>
              <DigitMarkdown markdownSource={value} />
            </div>
          )}
        />
      </DigitProviders>
    );
  })
);
