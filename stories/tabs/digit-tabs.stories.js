import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../components";
import DigitTabs from "../../components/elements/digit-tabs";
import DigitTabsReadme from "../../components/elements/digit-tabs/readme.md";
import StoryDigitTabs from "./StoryDigitTabs";

const DigitTabsStory = storiesOf("Elements", module);

DigitTabsStory.addDecorator(withKnobs);

DigitTabsStory.add(
  "DigitTabs",
  () => {
    const fullWidth = boolean("Full width", true);
    const centered = boolean("Centered", true);
    const titleFont = boolean("Title font", false);

    return (
      <DigitProviders>
        <StoryDigitTabs
          fullWidth={fullWidth}
          centered={centered}
          titleFont={titleFont}
        />
      </DigitProviders>
    );
  },
  {
    info: {
      text: DigitTabsReadme,
      propTables: [DigitTabs],
      propTablesExclude: [StoryDigitTabs, DigitProviders]
    }
  }
);
