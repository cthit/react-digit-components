import { boolean, withKnobs, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../src";
import DigitTabs from "../../src/elements/digit-tabs";
import DigitTabsReadme from "../../src/elements/digit-tabs/readme.md";
import StoryDigitTabs from "./StoryDigitTabs";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(withKnobs)
    .add(
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
                <StoryDigitTabs
                    fullWidth={fullWidth}
                    centered={centered}
                    titleFont={titleFont}
                    nLabels={nLabels}
                />
            );
        },
        {
            info: {
                text: DigitTabsReadme,
                propTables: [DigitTabs],
                propTablesExclude: [StoryDigitTabs, DigitProviders],
                header: false,
                source: false
            }
        }
    );
