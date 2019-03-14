import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../components";
import DigitAutocompleteSelectMultipleReadme from "../../components/elements/digit-autocomplete-select-multiple/readme.md";
import StoryDigitAutocompleteSelectMultiple from "./StoryDigitAutocompleteSelectMultiple";

import centered from "@storybook/addon-centered/react";

const DigitAutocompleteSelectMultipleStory = storiesOf("Elements", module);

DigitAutocompleteSelectMultipleStory.addDecorator(centered);
DigitAutocompleteSelectMultipleStory.addDecorator(withKnobs);

DigitAutocompleteSelectMultipleStory.add(
    "DigitAutocompleteSelectMultiple",
    () => {
        return (
            <DigitProviders>
                <StoryDigitAutocompleteSelectMultiple />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitAutocompleteSelectMultipleReadme,
            propTablesExclude: [DigitProviders]
        }
    }
);
