import { text, withKnobs, select, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitLayout, DigitProviders } from "../../components";
import { DigitDateAndTimePicker } from "../../components/elements/digit-date-and-time-picker/DigitDateAndTimePicker.element";
import StoryDigitDateAndTimePicker from "./StoryDigitDateAndTimePicker";

const DigitDateAndTimePickerStory = storiesOf("Elements", module);

const styleLabel = "style";
const styleOptions = ["filled", "outlined", "standard"];
const styleDefaultValue = "standard";

DigitDateAndTimePickerStory.addDecorator(withKnobs);

DigitDateAndTimePickerStory.add(
    "DigitDateAndTimePicker",
    () => {
        const upperLabel = text("Upperlabel: ", "My date and time");
        const lowerLabel = text("Lowerlabel: ", "Please enter something");
        const errorMessage = text("Error message: ", "ERROR ERROR");
        const error = boolean("Error: ", false);
        const style = select(styleLabel, styleOptions, styleDefaultValue);

        return (
            <DigitProviders>
                <DigitLayout.Size absWidth="300px" absHeight="300px">
                    <StoryDigitDateAndTimePicker
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
            propTables: [DigitDateAndTimePicker],
            propTablesExclude: [
                DigitProviders,
                DigitLayout.Size,
                StoryDigitDateAndTimePicker
            ]
        }
    }
);
