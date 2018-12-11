import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import {
    DigitAutocompleteSelectMultiple,
    DigitProviders
} from "../../components";
import DigitAutocompleteSelectMultipleReadme from "../../components/elements/digit-autocomplete-select-multiple/readme.md";
import {
    Column,
    MarginTop
} from "../../components/styles/digit-layout/DigitLayout.styles";
import StoryDigitAutocompleteSelectMultiple from "./StoryDigitAutocompleteSelectMultiple";

const typeLabel = "Type";
const typeOptions = ["Icon", "Image"];
const typeDefaultValue = "Icon";

const DigitAutocompleteSelectMultipleStory = storiesOf("Elements", module);

DigitAutocompleteSelectMultipleStory.addDecorator(withKnobs);

DigitAutocompleteSelectMultipleStory.add(
    "DigitAutocompleteSelectMultiple",
    () => {
        return (
            <DigitProviders>
                <Column>
                    <MarginTop />
                    <StoryDigitAutocompleteSelectMultiple />
                </Column>
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
