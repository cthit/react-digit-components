import { boolean, select, number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import {
    DigitProviders,
    DigitSelect,
    DigitComponentSelector
} from "../../components";
import DigitSelectReadme from "../../components/declaratives/digit-component-selector/readme.md";
import {
    Center,
    MarginTop,
    Size
} from "../../components/styles/digit-layout/DigitLayout.styles";
import CounterTestComponent from "./CounterTestComponent";

const DigitSelectStory = storiesOf("Declaratives", module);

DigitSelectStory.addDecorator(withKnobs);

DigitSelectStory.add(
    "DigitComponentSelector",
    () => {
        const activeComponent = number("What component", 0, {
            range: false,
            min: 0,
            max: 3,
            step: 1
        });

        const mounted = boolean("Mounted", false);

        return (
            <DigitProviders>
                <DigitComponentSelector
                    activeComponent={activeComponent}
                    components={[
                        CounterTestComponent,
                        CounterTestComponent,
                        CounterTestComponent,
                        CounterTestComponent
                    ]}
                    keepAllMounted={mounted}
                />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitSelectReadme,
            propTables: [DigitComponentSelector],
            propTablesExclude: [DigitProviders]
        }
    }
);
