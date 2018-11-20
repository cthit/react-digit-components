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

const typeLabel = "Type";
const typeOptions = ["Icon", "Image"];
const typeDefaultValue = "Icon";

const DigitAutocompleteSelectSingleStory = storiesOf("Elements", module);

DigitAutocompleteSelectSingleStory.addDecorator(withKnobs);

DigitAutocompleteSelectSingleStory.add(
    "DigitAutocompleteSelectSingle",
    () => {
        return (
            <DigitProviders>
                <Column>
                    <MarginTop />
                    <DigitAutocompleteSelectSingle />
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
