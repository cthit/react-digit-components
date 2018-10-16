import React from "react";

import { withKnobs, boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import { DigitLoading, DigitProviders } from "../components";
import DigitLoadingReadme from "../components/elements/digit-loading/readme.md";

const DigitLoadingStory = storiesOf("Elements", module);

DigitLoadingStory.addDecorator(withKnobs);

DigitLoadingStory.add(
  "DigitLoading",
  withReadme(DigitLoadingReadme, () => {
    const loading = boolean("Loading", true);
    const size = number("Size", 40, {
      range: true,
      min: 0,
      max: 200,
      step: 1
    });

    return (
      <DigitProviders>
        <DigitLoading size={size} loading={loading} />
      </DigitProviders>
    );
  })
);
