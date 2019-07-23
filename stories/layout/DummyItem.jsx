import React from "react";
import { Center, Size } from "../../src/styles/digit-layout/DigitLayout.styles";
import { Heading5 } from "../../src/styles/digit-text/DigitText.styles";
import BackgroundColor from "./BackgroundColor";
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
