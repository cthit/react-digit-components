import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitMarkdown, DigitProviders } from "../../components";
import DigitMarkdownReadme from "../../components/elements/digit-markdown/readme.md";
import StoryDigitMarkdown from "./StoryDigitMarkdown";
import centered from "@storybook/addon-centered/react";

const DigitMarkdownStory = storiesOf("Elements", module);

DigitMarkdownStory.addDecorator(centered);
DigitMarkdownStory.addDecorator(withKnobs);

DigitMarkdownStory.add(
    "DigitMarkdown",
    () => {
        return (
            <DigitProviders>
                <StoryDigitMarkdown />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitMarkdownReadme,
            propTables: [DigitMarkdown],
            propTablesExclude: [DigitProviders, StoryDigitMarkdown]
        }
    }
);
