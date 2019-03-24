import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders, DigitStepper } from "../../components";
import DigitStepperReadme from "../../components/elements/digit-stepper/readme.md";
import StoryDigitStepper from "./StoryDigitStepper";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(withKnobs)
    .add(
        "DigitStepper",
        () => {
            return <StoryDigitStepper />;
        },
        {
            info: {
                text: DigitStepperReadme,
                propTables: [DigitStepper],
                propTablesExclude: [DigitProviders, StoryDigitStepper],
                header: false,
                source: false
            }
        }
    );
