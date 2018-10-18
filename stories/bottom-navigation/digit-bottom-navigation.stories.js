import React from "react";

import { withKnobs, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import DigitBottomNavigationReadme from "../../components/elements/digit-bottom-navigation/readme.md";
import DigitProviders from "../../components/declaratives/digit-providers";
import StoryDigitBottomNavigation from "./StoryDigitBottomNavigation";

const DigitBottomNavigationStory = storiesOf("Elements", module);

DigitBottomNavigationStory.addDecorator(withKnobs);

DigitBottomNavigationStory.add(
  "DigitBottomNavigation",
  withReadme(DigitBottomNavigationReadme, () => {
    const showLabels = boolean("Show Labels", true);

    return (
      <DigitProviders>
        <StoryDigitBottomNavigation showLabels={showLabels} />
      </DigitProviders>
    );
  })
);