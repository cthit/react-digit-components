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
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitAutocompleteSelectSingle",
        () => {
            return <StoryDigitAutocompleteSelectSingle />;
        },
        {
            info: {
                text: DigitAutocompleteSelectSingleReadme,
                propTablesExclude: [DigitProviders],
                header: false,
                source: false
            }
        }
    );
