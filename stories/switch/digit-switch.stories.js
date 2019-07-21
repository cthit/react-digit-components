import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders, DigitSwitch } from "../../src";
import DigitSwitchReadme from "../../src/elements/digit-switch/readme.md";
import StoryDigitSwitch from "./StoryDigitSwitch";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitSwitch",
        () => {
            const label = text("Label", "This is a label");
            const color = select(colorLabel, colorOptions, colorDefaultValue);
            const disabled = boolean("Disabled", false);
            const error = boolean("error", false);
            const errorMessage = text("Error message", "Error oh no");

            return (
                <StoryDigitSwitch
                    label={label}
                    color={color}
                    disabled={disabled}
                    error={error}
                    errorMessage={errorMessage}
                />
            );
        },
        {
            info: {
                text: DigitSwitchReadme,
                propTables: [DigitSwitch],
                propTablesExclude: [DigitProviders, StoryDigitSwitch],
                header: false,
                source: false
            }
        }
    );
