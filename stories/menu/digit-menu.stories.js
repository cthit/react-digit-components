import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitMenu, DigitProviders } from "../../components";
import DigitMenuReadme from "../../components/views/digit-menu/readme.md";

const DigitMenuStory = storiesOf("Views", module);

DigitMenuStory.addDecorator(withKnobs);

DigitMenuStory.add(
  "DigitMenu",
  withReadme(DigitMenuReadme, () => {
    return (
      <DigitProviders>
        <DigitMenu
          onClick={value => {
            action(value + " has been selected")(value);
          }}
          valueToTextMap={{
            first_option: "First option",
            second_option: "Second option"
          }}
        />
      </DigitProviders>
    );
  })
);
