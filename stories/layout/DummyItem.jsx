import React from "react";
import { Center } from "../../src/styles/digit-layout/DigitLayout.styles";
import { Heading5 } from "../../src/styles/digit-text/DigitText.styles";

const DummyItem = ({ text, color }) => (
    <div style={{ width: "100px", height: "100px", backgroundColor: color }}>
        <Center>
            <Heading5 text={text} />
        </Center>
    </div>
);

export default DummyItem;
