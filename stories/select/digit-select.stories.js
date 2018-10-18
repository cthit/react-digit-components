import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withReadme } from "storybook-readme";

import { DigitProviders } from "../../components";
import DigitSelectReadme from "../../components/elements/digit-select/readme.md";
import StoryDigitSelect from "./StoryDigitSelect";

const styleLabel = "style";
const styleOptions = ["filled", "outlined", "standard"];
const styleDefaultValue = "standard";

const DigitSelectStory = storiesOf("Elements", module);

DigitSelectStory.addDecorator(withKnobs);

DigitSelectStory.add(
  "DigitSelect",
  withReadme(DigitSelectReadme, () => {
    const disabled = boolean("Disabled", false);
    const upperLabel = text("Upperlabel", "Favorite Icecream flavor");
    const lowerLabel = text("Lowerlabel", "Choose the best flavor");
    const style = select(styleLabel, styleOptions, styleDefaultValue);

    return (
      <DigitProviders>
        <StoryDigitSelect
          disabled={disabled}
          upperLabel={upperLabel}
          lowerLabel={lowerLabel}
          style={style}
        />
      </DigitProviders>
    );
  })
);
