import React from "react";

import { withKnobs, select, text, boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import IconOne from "@material-ui/icons/Android";

import { DigitBottomNavigation } from "../components";
import DigitBottomNavigationReadme from "../components/elements/digit-bottom-navigation/readme.md";

const labels = ["Label One", "Label Two", "Label Three"];
const icons = [<IconOne />, <IconOne />, <IconOne />];

const DigitBottomNavigationStory = storiesOf("Elements", module);

DigitBottomNavigationStory.addDecorator(withKnobs);

DigitBottomNavigationStory.add(
  "DigitBottomNavigation",
  withReadme(DigitBottomNavigationReadme, () => {
    const selected = number("Selected", labels.length, 0);
    const showLabels = boolean("Show Labels", true);

    return (
      <DigitBottomNavigation
        selected={selected}
        labels={labels}
        icons={icons}
        showLabels={showLabels}
      />
    );
  })
);



