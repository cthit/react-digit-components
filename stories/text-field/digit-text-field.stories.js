import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitLayout, DigitProviders, DigitTextField } from "../../src";
import DigitTextFieldReadme from "../../src/elements/digit-text-field/readme.md";
import StoryDigitTextField from "./StoryDigitTextField";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const typeLabel = "type";
const typeOptions = ["normal", "password", "numbersOnly"];
const typeDefaultValue = "normal";

const styleLabel = "style";
const styleOptions = ["filled", "outlined", "standard"];
const styleDefaultValue = "outlined";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitTextField",
        () => {
            const type = select(typeLabel, typeOptions, typeDefaultValue);
            const upperLabel = text("Upper label", "This is a upperLabel");
            const lowerLabel = text("Lower label", "This is a lowerLabel");
            const error = boolean("Error", false);
            const errorMessage = text(
                "Error message",
                "Buuuh, this is a error"
            );
            const disabled = boolean("disabled", false);
            const style = select(styleLabel, styleOptions, styleDefaultValue);

            return (
                <DigitLayout.Size width="300px">
                    <StoryDigitTextField
                        type={type}
                        upperLabel={upperLabel}
                        lowerLabel={lowerLabel}
                        error={error}
                        errorMessage={errorMessage}
                        disabled={disabled}
                        style={style}
                    />
                </DigitLayout.Size>
            );
        },
        {
            info: {
                text: DigitTextFieldReadme,
                propTables: [DigitTextField],
                propTablesExclude: [
                    DigitProviders,
                    DigitLayout.Size,
                    StoryDigitTextField
                ],
                header: false,
                source: false
            }
        }
    );
