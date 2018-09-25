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
} from "../components/styles/digit-layout/DigitLayout.styles";
import styled from "styled-components";

import DigitUniformGridReadme from "../components/styles/digit-layout/uniform-grid-readme.md";
import { withReadme } from "storybook-readme";
import { Display } from "../components/styles/digit-text/DigitText.styles";

const DigitUniformGridStory = storiesOf("Layout", module);
DigitUniformGridStory.addDecorator(withKnobs);

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

DigitUniformGridStory.add(
  "DigitUniformGrid",
  withReadme(DigitUniformGridReadme, () => {
    let numItems = number("num of items", 5);
    let minWidth = text("min width", "120px");

    return (
      <BorderSize absWidth="500px" absHeight="500px">
        <UniformGrid minWidth={minWidth} fill>
          {Array.from(new Array(numItems), (_, i) => (
            <GridItem>
              <DummyItem
                text={`${i + 1}`}
                color={["red", "green", "blue", "yellow"][i % 4]}
              >
                {" "}
              </DummyItem>
            </GridItem>
          ))}
        </UniformGrid>
      </BorderSize>
    );
  })
);
