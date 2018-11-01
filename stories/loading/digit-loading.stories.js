import { boolean, number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitLoading, DigitProviders } from "../../components";
import DigitLoadingReadme from "../../components/elements/digit-loading/readme.md";

const DigitLoadingStory = storiesOf("Elements", module);

DigitLoadingStory.addDecorator(withKnobs);

DigitLoadingStory.add(
  "DigitLoading",
  () => {
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
  },
  {
    info: {
      text: DigitLoadingReadme,
      propTables: [DigitLoading],
      propTablesExclude: [DigitProviders]
    }
  }
);
