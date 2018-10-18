import React from "react";

import {
  withKnobs,
  select,
  text,
  boolean,
  number
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitTabs, DigitProviders } from "../../components";
import DigitTabsReadme from "../../components/elements/digit-tabs/readme.md";

import { Value } from "react-powerplug";

const labels = ["Label One", "Label Two", "Label Three"];

const DigitTabsStory = storiesOf("Elements", module);

DigitTabsStory.addDecorator(withKnobs);

DigitTabsStory.add(
  "DigitTabs",
  withReadme(DigitTabsReadme, () => {
    const fullWidth = boolean("Full width", true);
    const centered = boolean("Centered", true);
    const titleFont = boolean("Title font", false);

    return (
      <DigitProviders>
        <Value
          initial={1}
          render={({ value, set }) => (
            <DigitTabs
              selected={value}
              labels={labels}
              centered={centered}
              fullWidth={fullWidth}
              onChange={selected => {
                set(selected);
              }}
              titleFont={titleFont}
            />
          )}
        />
      </DigitProviders>
    );
  })
);
