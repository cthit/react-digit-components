import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { DigitLayout, DigitProviders, DigitTextField } from "../../components";
import DigitTextFieldReadme from "../../components/elements/digit-text-field/readme.md";
import StoryDigitTextField from "./StoryDigitTextField";

const typeLabel = "type";
const typeOptions = ["normal", "password", "numbersOnly"];
const typeDefaultValue = "normal";

const styleLabel = "style";
const styleOptions = ["filled", "outlined", "standard"];
const styleDefaultValue = "standard";

const DigitTextFieldStory = storiesOf("Elements", module);

DigitTextFieldStory.addDecorator(withKnobs);

DigitTextFieldStory.add(
  "DigitTextField",
  () => {
    const type = select(typeLabel, typeOptions, typeDefaultValue);
    const upperLabel = text("Upper label", "This is a upperLabel");
    const lowerLabel = text("Lower label", "This is a lowerLabel");
    const error = boolean("Error", false);
    const errorMessage = text("Error message", "Buuuh, this is a error");
    const disabled = boolean("disabled", false);
    const style = select(styleLabel, styleOptions, styleDefaultValue);

    return (
      <DigitProviders>
        <DigitLayout.Size width="300px">
          <StoryDigitTextField
            type={type}
            upperLabel={upperLabel}
            lowerLabel={lowerLabel}
            error={error}
            errorMessage={errorMessage}
            disabled={disabled}
            style={style}
          />
        </DigitLayout.Size>
      </DigitProviders>
    );
  },
  {
    info: {
      text: DigitTextFieldReadme,
      propTables: [DigitTextField],
      propTablesExclude: [DigitProviders, DigitLayout.Size, StoryDigitTextField]
    }
  }
);
