import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitMarkdown, DigitProviders } from "../../src";
import DigitMarkdownReadme from "../../src/elements/digit-markdown/readme.md";
import StoryDigitMarkdown from "./StoryDigitMarkdown";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitMarkdown",
        () => {
            return <StoryDigitMarkdown />;
        },
        {
            info: {
                text: DigitMarkdownReadme,
                propTables: [DigitMarkdown],
                propTablesExclude: [DigitProviders, StoryDigitMarkdown],
                header: false,
                source: false
            }
        }
    );
