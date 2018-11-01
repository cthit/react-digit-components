import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { DigitProviders, DigitSwitch } from "../../components";
import DigitSwitchReadme from "../../components/elements/digit-switch/readme.md";
import StoryDigitSwitch from "./StoryDigitSwitch";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

const DigitSwitchStory = storiesOf("Elements", module);

DigitSwitchStory.addDecorator(withKnobs);

DigitSwitchStory.add(
  "DigitSwitch",
  () => {
    const label = text("Label", "This is a label");
    const color = select(colorLabel, colorOptions, colorDefaultValue);
    const disabled = boolean("Disabled", false);
    const error = boolean("error", false);
    const errorMessage = text("Error message", "Error oh no");

    return (
      <DigitProviders>
        <StoryDigitSwitch
          label={label}
          color={color}
          disabled={disabled}
          error={error}
          errorMessage={errorMessage}
        />
      </DigitProviders>
    );
  },
  {
    info: {
      text: DigitSwitchReadme,
      propTables: [DigitSwitch],
      propTablesExclude: [DigitProviders, StoryDigitSwitch]
    }
  }
);
