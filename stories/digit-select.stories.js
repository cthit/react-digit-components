import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitSelect, DigitProviders } from "../components";
import DigitSelectReadme from "../components/elements/digit-select/readme.md";
import { Value } from "react-powerplug";

const DigitSelectStory = storiesOf("Elements", module);

DigitSelectStory.addDecorator(withKnobs);

DigitSelectStory.add(
  "DigitSelect",
  withReadme(DigitSelectReadme, () => {
    const disabled = boolean("Disabled", false);
    const upperLabel = text("Upperlabel", "Favorite Icecream flavor");
    const lowerLabel = text("Lowerlabel", "Choose the best flavor");

    return (
      <DigitProviders>
        <Value
          initial="chocolate"
          render={selected => (
            <DigitSelect
              onChange={e => {
                selected.set(e.target.value);
                action("Selected")(e);
              }}
              value={selected.value}
              disabled={disabled}
              upperLabel={upperLabel}
              lowerLabel={lowerLabel}
              valueToTextMap={{
                chocolate: "Chocolate",
                vanilla: "Vanilla",
                strawberry: "Strawberry"
              }}
              allowToChooseNone
            />
          )}
        />
      </DigitProviders>
    );
  })
);
