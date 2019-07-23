import React from "react";

import { withKnobs, select, boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import DigitRowReadme from "../../src/styles/digit-layout/row-readme.md";
import { Row, Center } from "../../src/styles/digit-layout/DigitLayout.styles";
import DigitProviders from "../../src/declaratives/digit-providers";
import DummyItem from "./DummyItem";
import BorderSize from "./BorderSize";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const alignLabel = "Align";
const alignOptions = ["Left", "Right", "None"];
const alignDefaultValue = "None";

storiesOf("Layout", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(withKnobs)
    .add(
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
            );
        },
        {
            info: {
                text: DigitRowReadme,
                propTables: [Row],
                propTablesExclude: [DigitProviders, DummyItem, BorderSize],
                source: false,
                header: false
            }
        }
    );
