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

const BorderSize = styled(Size)`
  border: 1px solid black;
`;

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
    const center = boolean("Center", false);
    const padding = number("Padding", 8, {
      range: true,
      min: 0,
      max: 50,
      step: 1
    });

    return (
      <BorderSize absWidth="500px" absHeight="500px">
        <Row center={center} fill padding={padding + "px"}>
          <DummyItem text="1" color="blue" />
          <DummyItem text="2" color="yellow" />
          <DummyItem text="3" color="green" />
          <DummyItem text="4" color="red" />
        </Row>
      </BorderSize>
    );
  })
);
