import React from "react";

import { withKnobs, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { Order, Row } from "../../src/styles/digit-layout/DigitLayout.styles";
import DigitOrderReadme from "../../src/styles/digit-layout/row-readme.md";
import DummyItem from "./DummyItem";
import BorderSize from "./BorderSize";

storiesOf("Layout", module)
    .addDecorator(withKnobs)
    .add(
        "DigitOrder",
        () => {
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
        },
        {
            info: {
                text: DigitOrderReadme,
                propTables: [Order],
                propTablesExclude: [BorderSize, Row, DummyItem],
                header: false,
                source: false
            }
        }
    );
