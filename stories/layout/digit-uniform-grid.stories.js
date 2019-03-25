import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { UniformGrid } from "../../src/styles/digit-layout/DigitLayout.styles";

import DigitUniformGridReadme from "../../src/styles/digit-layout/uniform-grid-readme.md";
import { Display } from "../../src/styles/digit-text/DigitText.styles";
import DummyItem from "./DummyItem";
import { DigitProviders } from "../../src";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Layout", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(withKnobs)
    .add(
        "DigitUniformGrid",
        () => {
            const numItems = number("num of items", 5);
            const minItemWidth = text("min item width", "120px");
            const minItemHeight = text("min item height", "120px");
            const margin = number("Margin", 8, {
                range: true,
                min: 0,
                max: 50,
                step: 1
            });

            return (
                <UniformGrid
                    minItemWidth={minItemWidth}
                    minItemHeight={minItemHeight}
                    margin={`${margin}px`}
                    fillElement
                >
                    {Array.from(new Array(numItems), (_, i) => (
                        <DummyItem
                            key={i}
                            text={`${i + 1}`}
                            color={["red", "green", "blue", "yellow"][i % 4]}
                        />
                    ))}
                </UniformGrid>
            );
        },
        {
            info: {
                text: DigitUniformGridReadme,
                propTables: [UniformGrid],
                propTablesExclude: [DummyItem, DigitProviders],
                header: false,
                source: false
            }
        }
    );
