import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitProviders } from "../components";
import DigitDateAndTimePickerReadme from "../components/elements/digit-button/readme.md";
import DigitDateAndTimePicker from "../components/elements/digit-date-and-time-picker/DigitDateAndTimePicker.element";
import { Value } from "react-powerplug";

const DigitDateAndTimePickerStory = storiesOf("Elements", module);

DigitDateAndTimePickerStory.addDecorator(withKnobs);

DigitDateAndTimePickerStory.add(
  "DigitDateAndTimePicker",
  withReadme(DigitDateAndTimePickerReadme, () => {
    return (
      <DigitProviders>
        <Value
          render={({ set, value }) => (
            <DigitDateAndTimePicker
              value={value}
              onChange={date => {
                console.log(date);
                set(date);
              }}
            />
          )}
        />
      </DigitProviders>
    );
  })
);
