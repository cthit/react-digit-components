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

import DigitColumnReadme from "../components/styles/digit-layout/column-readme.md";
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

const DigitColumnStory = storiesOf("Layout", module);

DigitColumnStory.addDecorator(withKnobs);

const alignLabel = "Align";
const alignOptions = ["Top", "Bottom", "None"];
const alignDefaultValue = "None";

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

DigitColumnStory.add(
  "DigitColumn",
  withReadme(DigitColumnReadme, () => {
    const align = select(alignLabel, alignOptions, alignDefaultValue);
    const reverse = boolean("Reverse", false);
    const center = boolean("Center", false);
    const centerHorizontal = boolean("Center Horizontal", false);
    const centerVertical = boolean("Center Vertical", false);
    const padding = number("Padding", 8, {
      range: true,
      min: 0,
      max: 50,
      step: 1
    });

    return (
      <BorderSize absWidth="500px" absHeight="500px">
        <Column
          topAlign={align === "Top"}
          bottomAlign={align === "Bottom"}
          reverse={reverse}
          center={center}
          centerHorizontal={centerHorizontal}
          centerVertical={centerVertical}
          fill
          padding={padding + "px"}
        >
          <DummyItem text="1" color="blue" />
          <DummyItem text="2" color="yellow" />
          <DummyItem text="3" color="green" />
          <DummyItem text="4" color="red" />
        </Column>
      </BorderSize>
    );
  })
);
