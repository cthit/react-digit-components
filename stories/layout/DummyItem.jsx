import React from "react";
import BackgroundColor from "./BackgroundColor";
import {
  Size,
  Center
} from "../../components/styles/digit-layout/DigitLayout.styles";
import { Heading5 } from "../../components/styles/digit-text/DigitText.styles";
const DummyItem = ({ text, color }) => (
  <Size absWidth="100px" absHeight="100px">
    <BackgroundColor color={color}>
      <Center>
        <Heading5 text={text} />
      </Center>
    </BackgroundColor>
  </Size>
);

export default DummyItem;
