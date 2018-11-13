import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitLayout, DigitProviders } from "../../components";
import { DigitDatePicker } from "../../components/elements/digit-date-picker/DigitDatePicker.element";
import DigitDatePickerReadme from "../../components/elements/digit-date-picker/readme.md";
import StoryDigitDatePicker from "./StoryDigitDatePicker";

const DigitDatePickerStory = storiesOf("Elements", module);

DigitDatePickerStory.addDecorator(withKnobs);

DigitDatePickerStory.add(
    "DigitDatePicker",
    () => {
        const upperLabel = text("Upperlabel: ", "My date");

        return (
            <DigitProviders>
                <DigitLayout.Size absWidth="300px" absHeight="300px">
                    <StoryDigitDatePicker upperLabel={upperLabel} />
                </DigitLayout.Size>
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitDatePickerReadme,
            propTables: [DigitDatePicker],
            propTablesExclude: [
                DigitProviders,
                DigitLayout.Size,
                StoryDigitDatePicker
            ]
        }
    }
);
