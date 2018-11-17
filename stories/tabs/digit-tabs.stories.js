import { boolean, withKnobs, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../components";
import DigitTabs from "../../components/elements/digit-tabs";
import DigitTabsReadme from "../../components/elements/digit-tabs/readme.md";
import StoryDigitTabs from "./StoryDigitTabs";

const DigitTabsStory = storiesOf("Elements", module);

DigitTabsStory.addDecorator(withKnobs);

DigitTabsStory.add(
    "DigitTabs",
    () => {
        const fullWidth = boolean("Full width", true);
        const centered = boolean("Centered", true);
        const titleFont = boolean("Title font", false);
        const nLabels = number("Labels", 3, {
            range: true,
            min: 1,
            max: 50,
            step: 1
        });

        return (
            <DigitProviders>
                <StoryDigitTabs
                    fullWidth={fullWidth}
                    centered={centered}
                    titleFont={titleFont}
                    nLabels={nLabels}
                />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitTabsReadme,
            propTables: [DigitTabs],
            propTablesExclude: [StoryDigitTabs, DigitProviders]
        }
    }
);
