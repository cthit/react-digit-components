import React from "react";

import { withKnobs, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import { DigitProviders, DigitLayout } from "../../components";
import DigitDatePickerReadme from "../../components/elements/digit-date-picker/readme.md";
import StoryDigitDatePicker from "./StoryDigitDatePicker";

const DigitDatePickerStory = storiesOf("Elements", module);

DigitDatePickerStory.addDecorator(withKnobs);

DigitDatePickerStory.add(
  "DigitDatePicker",
  withReadme(DigitDatePickerReadme, () => {
    const upperLabel = text("Upperlabel: ", "My date");

    return (
      <DigitProviders>
        <DigitLayout.Size absWidth="300px" absHeight="300px">
          <StoryDigitDatePicker upperLabel={upperLabel} />
        </DigitLayout.Size>
      </DigitProviders>
    );
  })
);
