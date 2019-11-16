import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitLayout, DigitProviders } from "../../src";
import { DigitCalendar } from "../../src";
import DigitCalendarReadme from "../../src/views/digit-calendar/readme.md";
import StoryDigitCalendar from "./StoryDigitCalendar";
import centered from "@storybook/addon-centered/react";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";
import { withInfo } from "@storybook/addon-info";

storiesOf("Views", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitCalendar",
        () => {
            return (
                <DigitLayout.Size absWidth="300px" absHeight="300px">
                    <StoryDigitCalendar />
                </DigitLayout.Size>
            );
        },
        {
            info: {
                text: DigitCalendarReadme,
                propTables: [DigitCalendar],
                propTablesExclude: [
                    DigitProviders,
                    DigitLayout.Size,
                    StoryDigitCalendar
                ],
                source: false,
                header: false
            }
        }
    );
