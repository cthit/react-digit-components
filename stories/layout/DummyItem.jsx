import React from "react";
import { Center, Size } from "../../src/styles/digit-layout/DigitLayout.styles";
import { Heading5 } from "../../src/styles/digit-text/DigitText.styles";
import BackgroundColor from "./BackgroundColor";

const DummyItem = ({ text, color }) => (
    <div style={{ width: "100px", height: "100px" }}>
        <BackgroundColor color={color}>
            <Center>
                <Heading5 text={text} />
            </Center>
        </BackgroundColor>
    </div>
);

export default DummyItem;
