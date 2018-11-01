import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitLayout, DigitProviders } from "../../components";
import { DigitTimePicker } from "../../components/elements/digit-time-picker/DigitTimePicker.element";
import DigitTimePickerReadme from "../../components/elements/digit-time-picker/readme.md";
import StoryDigitTimePicker from "./StoryDigitTimePicker";

const DigitTimePickerStory = storiesOf("Elements", module);

DigitTimePickerStory.addDecorator(withKnobs);

DigitTimePickerStory.add(
  "DigitTimePicker",
  () => {
    const upperLabel = text("Upperlabel: ", "My time");

    return (
      <DigitProviders>
        <DigitLayout.Size absWidth="300px" absHeight="300px">
          <StoryDigitTimePicker upperLabel={upperLabel} />
        </DigitLayout.Size>
      </DigitProviders>
    );
  },
  {
    info: {
      text: DigitTimePickerReadme,
      propTables: [DigitTimePicker],
      propTablesExclude: [
        DigitProviders,
        DigitLayout.Size,
        StoryDigitTimePicker
      ]
    }
  }
);
