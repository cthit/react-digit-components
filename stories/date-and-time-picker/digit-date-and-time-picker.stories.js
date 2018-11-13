import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitLayout, DigitProviders } from "../../components";
import { DigitDateAndTimePicker } from "../../components/elements/digit-date-and-time-picker/DigitDateAndTimePicker.element";
import StoryDigitDateAndTimePicker from "./StoryDigitDateAndTimePicker";

const DigitDateAndTimePickerStory = storiesOf("Elements", module);

DigitDateAndTimePickerStory.addDecorator(withKnobs);

DigitDateAndTimePickerStory.add(
    "DigitDateAndTimePicker",
    () => {
        const upperLabel = text("Upperlabel: ", "My date and time");

        return (
            <DigitProviders>
                <DigitLayout.Size absWidth="300px" absHeight="300px">
                    <StoryDigitDateAndTimePicker upperLabel={upperLabel} />
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
