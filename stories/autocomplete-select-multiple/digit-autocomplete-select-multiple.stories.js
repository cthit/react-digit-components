import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../src";
import DigitAutocompleteSelectMultipleReadme from "../../src/elements/digit-autocomplete-select-multiple/readme.md";
import StoryDigitAutocompleteSelectMultiple from "./StoryDigitAutocompleteSelectMultiple";

import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitAutocompleteSelectMultiple",
        () => {
            const upperLabel = text("Upper label", "This is a upperLabel");
            const lowerLabel = text("Lower label", "This is a lowerLabel");
            const error = boolean("Error", false);
            const errorMessage = text(
                "Error message",
                "Buuuh, this is a error"
            );
            const disabled = boolean("disabled", false);

            return (
                <StoryDigitAutocompleteSelectMultiple
                    upperLabel={upperLabel}
                    lowerLabel={lowerLabel}
                    error={error}
                    errorMessage={errorMessage}
                    disabled={disabled}
                />
            );
        },
        {
            info: {
                text: DigitAutocompleteSelectMultipleReadme,
                propTablesExclude: [DigitProviders],
                header: false,
                source: false
            }
        }
    );
