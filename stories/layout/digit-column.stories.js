import React from "react";

import { withKnobs, select, boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import DigitColumnReadme from "../../components/styles/digit-layout/column-readme.md";
import {
    Column,
    Center
} from "../../components/styles/digit-layout/DigitLayout.styles";
import DigitProviders from "../../components/declaratives/digit-providers";
import DummyItem from "./DummyItem";
import BorderSize from "./BorderSize";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const alignLabel = "Align";
const alignOptions = ["Top", "Bottom", "None"];
const alignDefaultValue = "None";

storiesOf("Layout", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(withKnobs)
    .add(
        "DigitColumn",
        () => {
            const align = select(alignLabel, alignOptions, alignDefaultValue);
            const reverse = boolean("Reverse", false);
            const center = boolean("Center", false);
            const centerHorizontal = boolean("Center Horizontal", false);
            const centerVertical = boolean("Center Vertical", false);
            const marginVertical = number("Margin vertical", 8, {
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
                        fillElement
                        marginVertical={marginVertical + "px"}
                    >
                        <DummyItem text="1" color="blue" />
                        <DummyItem text="2" color="yellow" />
                        <DummyItem text="3" color="green" />
                        <DummyItem text="4" color="red" />
                    </Column>
                </BorderSize>
            );
        },
        {
            info: {
                text: DigitColumnReadme,
                propTables: [Column],
                propTablesExclude: [DigitProviders, DummyItem, BorderSize],
                header: false,
                source: false
            }
        }
    );
