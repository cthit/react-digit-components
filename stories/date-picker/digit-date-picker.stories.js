import { text, withKnobs, select, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitLayout, DigitProviders } from "../../components";
import { DigitDatePicker } from "../../components/elements/digit-date-picker/DigitDatePicker.element";
import DigitDatePickerReadme from "../../components/elements/digit-date-picker/readme.md";
import StoryDigitDatePicker from "./StoryDigitDatePicker";
import centered from "@storybook/addon-centered/react";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";
import { withInfo } from "@storybook/addon-info";

const styleLabel = "style";
const styleOptions = ["filled", "outlined", "standard"];
const styleDefaultValue = "standard";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitDatePicker",
        () => {
            const upperLabel = text("Upperlabel: ", "My date");
            const lowerLabel = text("Lowerlabel: ", "Please enter something");
            const errorMessage = text("Error message: ", "ERROR ERROR");
            const error = boolean("Error: ", false);
            const style = select(styleLabel, styleOptions, styleDefaultValue);

            return (
                <DigitLayout.Size absWidth="300px" absHeight="300px">
                    <StoryDigitDatePicker
                        lowerLabel={lowerLabel}
                        errorMessage={errorMessage}
                        error={error}
                        style={style}
                        upperLabel={upperLabel}
                    />
                </DigitLayout.Size>
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
                ],
                source: false,
                header: false
            }
        }
    );
