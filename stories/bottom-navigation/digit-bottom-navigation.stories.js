import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitBottomNavigation } from "../../components";
import DigitProviders from "../../components/declaratives/digit-providers";
import DigitBottomNavigationReadme from "../../components/elements/digit-bottom-navigation/readme.md";
import StoryDigitBottomNavigation from "./StoryDigitBottomNavigation";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";
import { withInfo } from "@storybook/addon-info";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(withKnobs)
    .add(
        "DigitBottomNavigation",
        () => {
            const showLabels = boolean("Show Labels", true);

            return <StoryDigitBottomNavigation showLabels={showLabels} />;
        },
        {
            info: {
                text: DigitBottomNavigationReadme,
                propTables: [DigitBottomNavigation],
                propTablesExclude: [DigitProviders, StoryDigitBottomNavigation],
                source: false,
                header: false
            }
        }
    );
