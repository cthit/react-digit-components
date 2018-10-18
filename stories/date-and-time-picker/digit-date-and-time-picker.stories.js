import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitProviders, DigitLayout } from "../../components";
import DigitDateAndTimePickerReadme from "../../components/elements/digit-date-and-time-picker/readme.md";
import DigitDateAndTimePicker from "../../components/elements/digit-date-and-time-picker/DigitDateAndTimePicker.element";
import { Value } from "react-powerplug";

const DigitDateAndTimePickerStory = storiesOf("Elements", module);

DigitDateAndTimePickerStory.addDecorator(withKnobs);

DigitDateAndTimePickerStory.add(
  "DigitDateAndTimePicker",
  withReadme(DigitDateAndTimePickerReadme, () => {
    const upperLabel = text("Upperlabel: ", "My date and time");
    return (
      <DigitProviders>
        <Value
          render={({ set, value }) => (
            <DigitLayout.Size absWidth="300px" absHeight="300px">
              <DigitDateAndTimePicker
                upperLabel={upperLabel}
                value={value}
                onChange={date => {
                  set(date);
                }}
              />
            </DigitLayout.Size>
          )}
        />
      </DigitProviders>
    );
  })
);
