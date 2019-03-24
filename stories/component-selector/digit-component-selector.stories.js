import { boolean, select, number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders, DigitComponentSelector } from "../../components";
import DigitComponentSelectorReadme from "../../components/declaratives/digit-component-selector/readme.md";
import CounterTestComponent from "./CounterTestComponent";
import centered from "@storybook/addon-centered/react";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";
import { withInfo } from "@storybook/addon-info";

storiesOf("Declaratives", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
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
            );
        },
        {
            info: {
                text: DigitComponentSelectorReadme,
                propTables: [DigitComponentSelector],
                propTablesExclude: [DigitProviders],
                source: false,
                header: false
            }
        }
    );
