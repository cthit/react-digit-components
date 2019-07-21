import {
    boolean,
    number,
    select,
    text,
    withKnobs
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitHeader, DigitProviders } from "../../src";
import DigitHeaderReadme from "../../src/elements/digit-header/readme.md";
import StoryDigitHeader from "./StoryDigitHeader";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const iconLabel = "Icon";
const iconOptions = ["Send", "Info", "Code"];
const iconDefaultValue = "Send";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(withKnobs)
    .add(
        "DigitHeader",
        () => {
            const title = text("Title", "My Website");
            const icon = select(iconLabel, iconOptions, iconDefaultValue);
            const navigation = boolean("Navigation: ", true);
            const customHeaderDemo = boolean("Custom header demo", false);
            const customToolbarDemo = boolean("Custom toolbar demo", false);
            const customTitleDemo = boolean("Custom title demo", false);
            const customFooterDemo = boolean("Custom footer demo", false);
            const customImage = boolean("Custom image", false);
            const headerHeight = number("Header height", 64, {
                range: true,
                min: 0,
                max: 300,
                step: 1
            });

            return (
                <StoryDigitHeader
                    customTitleDemo={customTitleDemo}
                    customFooterDemo={customFooterDemo}
                    customImage={customImage}
                    title={title}
                    icon={icon}
                    navigation={navigation}
                    customHeaderDemo={customHeaderDemo}
                    customToolbarDemo={customToolbarDemo}
                    headerHeight={headerHeight}
                />
            );
        },
        {
            info: {
                text: DigitHeaderReadme,
                propTables: [DigitHeader],
                propTablesExclude: [DigitProviders, StoryDigitHeader],
                header: false,
                source: false
            }
        }
    );
