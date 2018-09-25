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

import DigitRowReadme from "../components/styles/digit-layout/row-readme.md";
import {
  Column,
  Row,
  Size,
  Fill,
  Center,
  Flex
} from "../components/styles/digit-layout/DigitLayout.styles";
import { Display } from "../components/styles/digit-text/DigitText.styles";
import styled from "styled-components";

const DigitRowStory = storiesOf("Layout", module);

DigitRowStory.addDecorator(withKnobs);

const BackgroundColor = styled(Fill)`
  background-color: ${props => props.color};
`;

const DummyItem = ({ text, color }) => (
  <Size absWidth="50px" absHeight="50px">
    <BackgroundColor color={color}>
      <Center>
        <Display text={text} />
      </Center>
    </BackgroundColor>
  </Size>
);

DigitRowStory.add(
  "DigitRow",
  withReadme(DigitRowReadme, () => {
    const padding = number("Padding", 8, {
      range: true,
      min: 0,
      max: 50,
      step: 1
    });

    return (
      <div>
        <Display text="Row" />
        <Row padding={padding + "px"}>
          <DummyItem text="1" color="blue" />
          <DummyItem text="2" color="yellow" />
          <DummyItem text="3" color="green" />
          <DummyItem text="4" color="red" />
        </Row>
      </div>
    );
  })
);
