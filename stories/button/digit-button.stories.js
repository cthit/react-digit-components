import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitButton, DigitProviders } from "../../components";
import DigitButtonReadme from "../../components/elements/digit-button/readme.md";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

const styleLabel = "style";
const styleOptions = ["raised", "outline", "flat"];
const styleDefaultValue = "flat";

const DigitButtonStory = storiesOf("Elements", module);

DigitButtonStory.addDecorator(withKnobs);

DigitButtonStory.add(
  "DigitButton",
  withReadme(DigitButtonReadme, () => {
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
          outline={style === "outline"}
          disabled={disabled}
        />
      </DigitProviders>
    );
  })
);
