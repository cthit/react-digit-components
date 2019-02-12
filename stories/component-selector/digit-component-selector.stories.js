import { boolean, select, number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders, DigitComponentSelector } from "../../components";
import DigitComponentSelectorReadme from "../../components/declaratives/digit-component-selector/readme.md";
import CounterTestComponent from "./CounterTestComponent";

const DigitComponentSelectorStory = storiesOf("Declaratives", module);

DigitComponentSelectorStory.addDecorator(withKnobs);

DigitComponentSelectorStory.add(
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
            text: DigitComponentSelectorReadme,
            propTables: [DigitComponentSelector],
            propTablesExclude: [DigitProviders]
        }
    }
);
