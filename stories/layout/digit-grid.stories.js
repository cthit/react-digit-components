import React from "react";

import { withKnobs, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { DigitProviders } from "../../components";

import DigitGridReadme from "../../components/styles/digit-layout/grid-readme.md";
import { Grid } from "../../components/styles/digit-layout/DigitLayout.styles";
import DummyItem from "./DummyItem";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Layout", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(withKnobs)
    .add(
        "DigitGrid",
        () => {
            let numItems = number("num of items", 5);
            let numCols = number("number of columns", 3);
            const margin = number("Margin", 8, {
                range: true,
                min: 0,
                max: 50,
                step: 1
            });

            return (
                <Grid
                    inline
                    fillElement
                    columns={`repeat(${numCols}, 1fr)`}
                    margin={`${margin}px`}
                >
                    {Array.from(new Array(numItems), (_, i) => (
                        <DummyItem
                            key={i}
                            text={`${i + 1}`}
                            color={["red", "green", "blue", "yellow"][i % 4]}
                        />
                    ))}
                </Grid>
            );
        },
        {
            info: {
                text: DigitGridReadme,
                propTables: [Grid],
                propTablesExclude: [DummyItem, DigitProviders],
                header: false,
                source: false
            }
        }
    );
