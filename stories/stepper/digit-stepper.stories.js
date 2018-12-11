import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders, DigitStepper } from "../../components";
import DigitStepperReadme from "../../components/elements/digit-stepper/readme.md";
import StoryDigitStepper from "./StoryDigitStepper";

const DigitStepperStory = storiesOf("Elements", module);

DigitStepperStory.addDecorator(withKnobs);

DigitStepperStory.add(
    "DigitStepper",
    () => {
        return (
            <DigitProviders>
                <StoryDigitStepper />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitStepperReadme,
            propTables: [DigitStepper],
            propTablesExclude: [DigitProviders, StoryDigitStepper]
        }
    }
);
