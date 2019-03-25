import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitMenu, DigitProviders } from "../../src";
import DigitMenuReadme from "../../src/views/digit-menu/readme.md";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Views", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitMenu",
        () => {
            return (
                <DigitProviders>
                    <DigitMenu
                        onClick={value => {
                            action(value + " has been selected")(value);
                        }}
                        valueToTextMap={{
                            first_option: "First option",
                            second_option: "Second option"
                        }}
                    />
                </DigitProviders>
            );
        },
        {
            info: {
                text: DigitMenuReadme,
                propTables: [DigitMenu],
                propTablesExclude: [DigitProviders],
                header: false,
                source: false
            }
        }
    );
