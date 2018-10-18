import React from "react";

import { withKnobs, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import { DigitProviders, DigitLayout } from "../../components";
import DigitTimePickerReadme from "../../components/elements/digit-time-picker/readme.md";
import StoryDigitTimePicker from "./StoryDigitTimePicker";

const DigitTimePickerStory = storiesOf("Elements", module);

DigitTimePickerStory.addDecorator(withKnobs);

DigitTimePickerStory.add(
  "DigitTimePicker",
  withReadme(DigitTimePickerReadme, () => {
    const upperLabel = text("Upperlabel: ", "My time");

    return (
      <DigitProviders>
        <DigitLayout.Size absWidth="300px" absHeight="300px">
          <StoryDigitTimePicker upperLabel={upperLabel} />
        </DigitLayout.Size>
      </DigitProviders>
    );
  })
);
