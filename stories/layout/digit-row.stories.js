import React from "react";

import {
    withKnobs,
    select,
    text,
    boolean,
    number
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import DigitRowReadme from "../../components/styles/digit-layout/row-readme.md";
import {
    Column,
    Row,
    Size,
    Fill,
    Center,
    Flex
} from "../../components/styles/digit-layout/DigitLayout.styles";
import { Heading5 } from "../../components/styles/digit-text/DigitText.styles";
import styled from "styled-components";
import DigitProviders from "../../components/declaratives/digit-providers";
import DummyItem from "./DummyItem";
import BorderSize from "./BorderSize";

const DigitRowStory = storiesOf("Layout", module);

const alignLabel = "Align";
const alignOptions = ["Left", "Right", "None"];
const alignDefaultValue = "None";

DigitRowStory.addDecorator(withKnobs);

DigitRowStory.add(
    "DigitRow",
    () => {
        const align = select(alignLabel, alignOptions, alignDefaultValue);
        const reverse = boolean("Reverse", false);
        const center = boolean("Center", false);
        const centerHorizontal = boolean("Center Horizontal", false);
        const centerVertical = boolean("Center Vertical", false);
        const marginHorizontal = number("Margin horizontal", 8, {
            range: true,
            min: 0,
            max: 50,
            step: 1
        });

        return (
            <DigitProviders>
                <BorderSize absWidth="500px" absHeight="500px">
                    <Row
                        leftAlign={align === "Left"}
                        rightAlign={align === "Right"}
                        reverse={reverse}
                        center={center}
                        centerHorizontal={centerHorizontal}
                        centerVertical={centerVertical}
                        fillElement
                        marginHorizontal={marginHorizontal + "px"}
                    >
                        <DummyItem text="1" color="blue" />
                        <DummyItem text="2" color="yellow" />
                        <DummyItem text="3" color="green" />
                        <DummyItem text="4" color="red" />
                    </Row>
                </BorderSize>
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitRowReadme,
            propTables: [Row],
            propTablesExclude: [DigitProviders, DummyItem, BorderSize]
        }
    }
);
