import React from "react";

import {
  withKnobs,
  select,
  text,
  boolean,
  number
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import { DigitProviders } from "../../components";
import DigitHeaderReadme from "../../components/elements/digit-header/readme.md";

import StoryDigitHeader from "./StoryDigitHeader";

const iconLabel = "Icon";
const iconOptions = ["Send", "Info", "Code"];
const iconDefaultValue = "Send";

const DigitHeaderStory = storiesOf("Elements", module);

DigitHeaderStory.addDecorator(withKnobs);

DigitHeaderStory.add(
  "DigitHeader",
  withReadme(DigitHeaderReadme, () => {
    const title = text("Title", "My Website");
    const icon = select(iconLabel, iconOptions, iconDefaultValue);
    const navigation = boolean("Navigation: ", true);
    const customHeaderDemo = boolean("Custom header demo", false);
    const headerHeight = number("Header height", 64, {
      range: true,
      min: 0,
      max: 300,
      step: 1
    });

    return (
      <DigitProviders>
        <StoryDigitHeader
          title={title}
          icon={icon}
          navigation={navigation}
          customHeaderDemo={customHeaderDemo}
          headerHeight={headerHeight}
        />
      </DigitProviders>
    );
  })
);
