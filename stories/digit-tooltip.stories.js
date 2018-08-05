import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitTooltip, DigitButton } from "../components";
import DigitTooltipReadme from "../components/elements/digit-tooltip/readme.md";
import { Size } from "../components/styles/digit-layout/DigitLayout.styles";

const DigitTooltipStory = storiesOf("Elements", module);

DigitTooltipStory.addDecorator(withKnobs);

DigitTooltipStory.add(
  "DigitTooltip",
  withReadme(DigitTooltipReadme, () => {
    return (
      <Size width="200px">
        <DigitTooltip text={text("Tooltip text", "This is a tooltip")}>
          <DigitButton text="Hover me" />
        </DigitTooltip>
      </Size>
    );
  })
);
