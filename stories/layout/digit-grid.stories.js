import React from "react";

import { withKnobs, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import DigitGridReadme from "../../components/styles/digit-layout/grid-readme.md";
import {
  Fill,
  Center,
  Grid
} from "../../components/styles/digit-layout/DigitLayout.styles";
import { Display } from "../../components/styles/digit-text/DigitText.styles";
import styled from "styled-components";
import DummyItem from "./DummyItem";

const DigitGridStory = storiesOf("Layout", module);

DigitGridStory.addDecorator(withKnobs);

DigitGridStory.add(
  "DigitGrid",
  withReadme(DigitGridReadme, () => {
    let numItems = number("num of items", 5);
    let numCols = number("number of columns", 3);
    const padding = number("Padding", 8, {
      range: true,
      min: 0,
      max: 50,
      step: 1
    });

    return (
      <Grid
        inline
        fillElement
        columns={`repeat(${numCols}, 1fr)`}
        padding={`${padding}px`}
      >
        {Array.from(new Array(numItems), (_, i) => (
          <DummyItem
            key={i}
            text={`${i + 1}`}
            color={["red", "green", "blue", "yellow"][i % 4]}
          />
        ))}
      </Grid>
    );
  })
);
