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

import { DigitEditData } from "../components";
import DigitEditDataReadme from "../components/elements/digit-edit-data/readme.md";

const DigitEditDataStory = storiesOf("Elements", module);

DigitEditDataStory.addDecorator(withKnobs);

DigitEditDataStory.add(
  "DigitEditData",
  withReadme(DigitEditDataReadme, () => {
    return <div>hej</div>;
  })
);
