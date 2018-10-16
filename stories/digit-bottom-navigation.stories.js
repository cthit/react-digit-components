import React from "react";

import {
  withKnobs,
  select,
  text,
  boolean,
  number
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { Value } from "react-powerplug";

import IconOne from "@material-ui/icons/Android";

import { DigitBottomNavigation } from "../components";
import DigitBottomNavigationReadme from "../components/elements/digit-bottom-navigation/readme.md";
import DigitProviders from "../components/declaratives/digit-providers";

const labels = ["Label One", "Label Two", "Label Three"];
const icons = [<IconOne />, <IconOne />, <IconOne />];

const DigitBottomNavigationStory = storiesOf("Elements", module);

DigitBottomNavigationStory.addDecorator(withKnobs);

DigitBottomNavigationStory.add(
  "DigitBottomNavigation",
  withReadme(DigitBottomNavigationReadme, () => {
    const showLabels = boolean("Show Labels", true);

    return (
      <DigitProviders>
        <Value
          initial={0}
          render={({ value, set }) => (
            <DigitBottomNavigation
              selected={value}
              labels={labels}
              icons={icons}
              showLabels={showLabels}
              onChange={selected => {
                set(selected);
              }}
            />
          )}
        />
      </DigitProviders>
    );
  })
);
