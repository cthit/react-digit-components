import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitMenu, DigitProviders } from "../../components";
import DigitMenuReadme from "../../components/views/digit-menu/readme.md";

const DigitMenuStory = storiesOf("Views", module);

DigitMenuStory.addDecorator(withKnobs);

DigitMenuStory.add(
  "DigitMenu",
  () => {
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
  },
  {
    info: {
      text: DigitMenuReadme,
      propTables: [DigitMenu],
      propTablesExclude: [DigitProviders]
    }
  }
);
