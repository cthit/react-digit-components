import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitProviders } from "../components";
import DigitTimePickerReadme from "../components/elements/digit-time-picker/readme.md";
import DigitTimePicker from "../components/elements/digit-time-picker/DigitTimePicker.element";
import { Value } from "react-powerplug";

const DigitTimePickerStory = storiesOf("Elements", module);

DigitTimePickerStory.addDecorator(withKnobs);

DigitTimePickerStory.add(
  "DigitTimePicker",
  withReadme(DigitTimePickerReadme, () => {
    return (
      <DigitProviders>
        <Value
          initial={new Date()}
          render={({ set, value }) => (
            <DigitTimePicker
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
