import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import {
    DigitAutocompleteSelectSingle,
    DigitProviders
} from "../../components";
import DigitAutocompleteSelectSingleReadme from "../../components/elements/digit-autocomplete-select-single/readme.md";
import {
    Column,
    MarginTop
} from "../../components/styles/digit-layout/DigitLayout.styles";
import StoryDigitAutocompleteSelectSingle from "./StoryDigitAutocompleteSelectSingle";
import centered from "@storybook/addon-centered/react";

const DigitAutocompleteSelectSingleStory = storiesOf("Elements", module);

DigitAutocompleteSelectSingleStory.addDecorator(centered);
DigitAutocompleteSelectSingleStory.addDecorator(withKnobs);

DigitAutocompleteSelectSingleStory.add(
    "DigitAutocompleteSelectSingle",
    () => {
        return (
            <DigitProviders>
                <Column>
                    <MarginTop />
                    <StoryDigitAutocompleteSelectSingle />
                </Column>
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitAutocompleteSelectSingleReadme,
            propTablesExclude: [DigitProviders]
        }
    }
);
