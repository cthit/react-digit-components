import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { DigitProviders } from "../../components";
import DigitRadioButtonGroupReadme from "../../components/elements/digit-radio-button-group/readme.md";
import {
  MarginTop,
  Center,
  Size
} from "../../components/styles/digit-layout/DigitLayout.styles";
import DigitRadioButtonGroup from "../../components/elements/digit-radio-button-group";
import StoryRadioButtonGroup from "./StoryRadioButtonGroup";

const DigitRadioButtonGroupStory = storiesOf("Elements", module);

DigitRadioButtonGroupStory.addDecorator(withKnobs);

DigitRadioButtonGroupStory.add(
  "DigitRadioButtonGroup",
  () => {
    const upperLabel = text("Upperlabel", "Upperlabel");
    const lowerLabel = text("Lowerlabel", "Lowerlabel");
    const error = boolean("Error", false);
    const errorMessage = text("ErrorMessage", "This is an error");

    return (
      <DigitProviders>
        <StoryRadioButtonGroup
          upperLabel={upperLabel}
          lowerLabel={lowerLabel}
          error={error}
          errorMessage={errorMessage}
        />
      </DigitProviders>
    );
  },
  {
    info: {
      text: DigitRadioButtonGroupReadme,
      propTables: [DigitRadioButtonGroup],
      propTablesExclude: [StoryRadioButtonGroup, DigitProviders]
    }
  }
);
