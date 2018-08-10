import React from "react";

import { withKnobs, select, text, boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitTabs } from "../components";
import DigitTabsReadme from "../components/elements/digit-tabs/readme.md";

const labels = ["Label One", "Label Two", "Label Three"];

const DigitTabsStory = storiesOf("Elements", module);

const options = {
  range: true,
  min: 0,
  max: 2,
  step: 1,
};

const groupId = 'GROUP-ID1';

DigitTabsStory.addDecorator(withKnobs);

DigitTabsStory.add(
  "DigitTabs",
  withReadme(DigitTabsReadme, () => {
    const selected = number("Selected", 0, options, groupId);
    const fullWidth = boolean("Full width", true);
    const centered = boolean("Centered", true);

    return (
      <DigitTabs
        selected={selected}
        labels={labels}
        centered={centered}
        fullWidth={fullWidth}
      />
    );
  })
);


