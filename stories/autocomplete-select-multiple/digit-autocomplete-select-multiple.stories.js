import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../components";
import DigitAutocompleteSelectMultipleReadme from "../../components/elements/digit-autocomplete-select-multiple/readme.md";
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
            return <StoryDigitAutocompleteSelectMultiple />;
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
