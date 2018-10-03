import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitProviders } from "../components";
import DigitDatePickerReadme from "../components/elements/digit-date-picker/readme.md";
import DigitDatePicker from "../components/elements/digit-date-picker/DigitDatePicker.element";
import { Value } from "react-powerplug";

const DigitDatePickerStory = storiesOf("Elements", module);

DigitDatePickerStory.addDecorator(withKnobs);

DigitDatePickerStory.add(
  "DigitDatePicker",
  withReadme(DigitDatePickerReadme, () => {
    return (
      <DigitProviders>
        <Value
          initial={new Date()}
          render={({ set, value }) => (
            <DigitDatePicker
              value={value}
              onChange={date => {
                set(date);
              }}
            />
          )}
        />
      </DigitProviders>
    );
  })
);
