import React from "react";

import { withKnobs, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { DigitTooltip, DigitButton, DigitProviders } from "../../components";
import DigitTooltipReadme from "../../components/elements/digit-tooltip/readme.md";
import { Size } from "../../components/styles/digit-layout/DigitLayout.styles";

const DigitTooltipStory = storiesOf("Elements", module);

DigitTooltipStory.addDecorator(withKnobs);

DigitTooltipStory.add(
  "DigitTooltip",
  () => {
    return (
      <DigitProviders>
        <Size width="200px">
          <DigitTooltip text={text("Tooltip text", "This is a tooltip")}>
            <DigitButton text="Hover me" />
          </DigitTooltip>
        </Size>
      </DigitProviders>
    );
  },
  {
    info: {
      text: DigitTooltipReadme,
      propTables: [DigitTooltip],
      propTablesExclude: [DigitProviders, Size, DigitButton]
    }
  }
);
