import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../components";
import DigitRadioButtonGroup from "../../components/elements/digit-radio-button-group";
import DigitRadioButtonGroupReadme from "../../components/elements/digit-radio-button-group/readme.md";
import StoryRadioButtonGroup from "./StoryRadioButtonGroup";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitRadioButtonGroup",
        () => {
            const upperLabel = text("Upperlabel", "Upperlabel");
            const lowerLabel = text("Lowerlabel", "Lowerlabel");
            const error = boolean("Error", false);
            const errorMessage = text("ErrorMessage", "This is an error");

            return (
                <StoryRadioButtonGroup
                    upperLabel={upperLabel}
                    lowerLabel={lowerLabel}
                    error={error}
                    errorMessage={errorMessage}
                />
            );
        },
        {
            info: {
                text: DigitRadioButtonGroupReadme,
                propTables: [DigitRadioButtonGroup],
                propTablesExclude: [StoryRadioButtonGroup, DigitProviders],
                header: false,
                source: false
            }
        }
    );
