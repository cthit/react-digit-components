import {
    boolean,
    number,
    select,
    text,
    withKnobs
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitHeader, DigitProviders } from "../../components";
import DigitHeaderReadme from "../../components/elements/digit-header/readme.md";
import StoryDigitHeader from "./StoryDigitHeader";

const iconLabel = "Icon";
const iconOptions = ["Send", "Info", "Code"];
const iconDefaultValue = "Send";

const DigitHeaderStory = storiesOf("Elements", module);

DigitHeaderStory.addDecorator(withKnobs);

DigitHeaderStory.add(
    "DigitHeader",
    () => {
        const title = text("Title", "My Website");
        const icon = select(iconLabel, iconOptions, iconDefaultValue);
        const navigation = boolean("Navigation: ", true);
        const customHeaderDemo = boolean("Custom header demo", false);
        const headerHeight = number("Header height", 64, {
            range: true,
            min: 0,
            max: 300,
            step: 1
        });

        return (
            <DigitProviders>
                <StoryDigitHeader
                    title={title}
                    icon={icon}
                    navigation={navigation}
                    customHeaderDemo={customHeaderDemo}
                    headerHeight={headerHeight}
                />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitHeaderReadme,
            propTables: [DigitHeader],
            propTablesExclude: [DigitProviders, StoryDigitHeader]
        }
    }
);
