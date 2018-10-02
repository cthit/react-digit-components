import React from "react";

import {
  withKnobs,
  select,
  text,
  boolean,
  number
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import DigitGridReadme from "../components/styles/digit-layout/grid-readme.md";
import {
  Column,
  Row,
  Size,
  Fill,
  Center,
  Flex,
  Grid,
  GridItem
} from "../components/styles/digit-layout/DigitLayout.styles";
import { Display } from "../components/styles/digit-text/DigitText.styles";
import styled from "styled-components";

const DigitGridStory = storiesOf("Layout", module);

const alignLabel = "Align";
const alignOptions = ["Left", "Right", "None"];
const alignDefaultValue = "None";

DigitGridStory.addDecorator(withKnobs);

const BorderSize = styled(Size)`
  border: 1px solid black;
`;

const BackgroundColor = styled(Fill)`
  background-color: ${props => props.color};
`;

const DummyItem = ({ text, color }) => (
  <BackgroundColor color={color}>
    <Center>
      <Display text={text} />
    </Center>
  </BackgroundColor>
);

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
      <Grid fill columns={`repeat(${numCols}, 1fr)`} padding={`${padding}px`}>
        {Array.from(new Array(numItems), (_, i) => (
          <DummyItem
            text={`Item ${i + 1}`}
            color={["red", "green", "blue", "yellow"][i % 4]}
          />
        ))}
      </Grid>
    );
  })
);
