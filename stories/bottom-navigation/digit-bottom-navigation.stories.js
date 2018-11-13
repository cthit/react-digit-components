import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitBottomNavigation } from "../../components";
import DigitProviders from "../../components/declaratives/digit-providers";
import DigitBottomNavigationReadme from "../../components/elements/digit-bottom-navigation/readme.md";
import StoryDigitBottomNavigation from "./StoryDigitBottomNavigation";

const DigitBottomNavigationStory = storiesOf("Elements", module);

DigitBottomNavigationStory.addDecorator(withKnobs);

DigitBottomNavigationStory.add(
    "DigitBottomNavigation",
    () => {
        const showLabels = boolean("Show Labels", true);

        return (
            <DigitProviders>
                <StoryDigitBottomNavigation showLabels={showLabels} />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitBottomNavigationReadme,
            propTables: [DigitBottomNavigation],
            propTablesExclude: [DigitProviders, StoryDigitBottomNavigation]
        }
    }
);
