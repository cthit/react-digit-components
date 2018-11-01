import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitButton, DigitProviders } from "../../components";
import DigitButtonReadme from "../../components/elements/digit-button/readme.md";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

const styleLabel = "style";
const styleOptions = ["raised", "outlined", "flat"];
const styleDefaultValue = "flat";

const DigitButtonStory = storiesOf("Elements", module);

DigitButtonStory.addDecorator(withKnobs);

DigitButtonStory.add(
  "DigitButton",
  () => {
    const buttonText = text("Text", "This is a button");
    const color = select(colorLabel, colorOptions, colorDefaultValue);
    const style = select(styleLabel, styleOptions, styleDefaultValue);
    const disabled = boolean("Disabled", false);

    return (
      <DigitProviders>
        <DigitButton
          text={buttonText}
          primary={color === "primary"}
          secondary={color === "secondary"}
          raised={style === "raised"}
          outlined={style === "outlined"}
          disabled={disabled}
        />
      </DigitProviders>
    );
  },
  {
    info: {
      text: DigitButtonReadme,
      propTablesExclude: [DigitProviders]
    }
  }
);
