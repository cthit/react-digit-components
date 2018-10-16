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
import {
  Order,
  Row,
  Size,
  Fill,
  Center
} from "../../components/styles/digit-layout/DigitLayout.styles";
import { Display } from "../../components/styles/digit-text/DigitText.styles";
import styled from "styled-components";
import DigitOrderReadme from "../../components/styles/digit-layout/row-readme.md";
import DummyItem from "./DummyItem";
import BorderSize from "./BorderSize";

const DigitOrderStory = storiesOf("Layout", module);

DigitOrderStory.addDecorator(withKnobs);

DigitOrderStory.add(
  "DigitOrder",
  withReadme(DigitOrderReadme, () => {
    const orderBlue = number("Order blue", 1);
    const orderYellow = number("Order yellow", 2);
    const orderGreen = number("Order green", 3);
    const orderRed = number("Order red", 4);

    return (
      <BorderSize absWidth="500px" absHeight="500px">
        <Row center fillElement padding="8px">
          <Order order={orderBlue}>
            <DummyItem text="1" color="blue" />
          </Order>
          <Order order={orderYellow}>
            <DummyItem text="2" color="yellow" />
          </Order>
          <Order order={orderGreen}>
            <DummyItem text="3" color="green" />
          </Order>
          <Order order={orderRed}>
            <DummyItem text="4" color="red" />
          </Order>
        </Row>
      </BorderSize>
    );
  })
);
