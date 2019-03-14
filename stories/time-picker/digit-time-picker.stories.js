import { text, withKnobs, select, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitLayout, DigitProviders } from "../../components";
import { DigitTimePicker } from "../../components/elements/digit-time-picker/DigitTimePicker.element";
import DigitTimePickerReadme from "../../components/elements/digit-time-picker/readme.md";
import StoryDigitTimePicker from "./StoryDigitTimePicker";
import centered from "@storybook/addon-centered/react";

const DigitTimePickerStory = storiesOf("Elements", module);

const styleLabel = "style";
const styleOptions = ["filled", "outlined", "standard"];
const styleDefaultValue = "standard";

DigitTimePickerStory.addDecorator(centered);
DigitTimePickerStory.addDecorator(withKnobs);

DigitTimePickerStory.add(
    "DigitTimePicker",
    () => {
        const upperLabel = text("Upperlabel: ", "My time");
        const lowerLabel = text("Lowerlabel: ", "Please enter something");
        const errorMessage = text("Error message: ", "ERROR ERROR");
        const error = boolean("Error: ", false);
        const style = select(styleLabel, styleOptions, styleDefaultValue);

        return (
            <DigitProviders>
                <DigitLayout.Size absWidth="300px" absHeight="300px">
                    <StoryDigitTimePicker
                        error={error}
                        errorMessage={errorMessage}
                        lowerLabel={lowerLabel}
                        style={style}
                        upperLabel={upperLabel}
                    />
                </DigitLayout.Size>
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitTimePickerReadme,
            propTables: [DigitTimePicker],
            propTablesExclude: [
                DigitProviders,
                DigitLayout.Size,
                StoryDigitTimePicker
            ]
        }
    }
);
