import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import {
  UniformGrid,
  Size,
  GridItem,
  Grid,
  Center,
  Fill
} from "../../components/styles/digit-layout/DigitLayout.styles";
import styled from "styled-components";

import DigitUniformGridReadme from "../../components/styles/digit-layout/uniform-grid-readme.md";
import { withReadme } from "storybook-readme";
import { Display } from "../../components/styles/digit-text/DigitText.styles";
import DummyItem from "./DummyItem";

const DigitUniformGridStory = storiesOf("Layout", module);
DigitUniformGridStory.addDecorator(withKnobs);

DigitUniformGridStory.add(
  "DigitUniformGrid",
  withReadme(DigitUniformGridReadme, () => {
    const numItems = number("num of items", 5);
    const minItemWidth = text("min item width", "120px");
    const minItemHeight = text("min item height", "120px");
    const padding = number("Padding", 8, {
      range: true,
      min: 0,
      max: 50,
      step: 1
    });

    return (
      <UniformGrid
        minItemWidth={minItemWidth}
        minItemHeight={minItemHeight}
        padding={`${padding}px`}
        fillElement
      >
        {Array.from(new Array(numItems), (_, i) => (
          <DummyItem
            key={i}
            text={`${i + 1}`}
            color={["red", "green", "blue", "yellow"][i % 4]}
          />
        ))}
      </UniformGrid>
    );
  })
);