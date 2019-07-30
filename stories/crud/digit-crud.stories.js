import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../src";
import centered from "@storybook/addon-centered/react";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";
import { withInfo } from "@storybook/addon-info";
import DigitCRUD from "../../src/views/digit-crud";
import StoryDigitCRUD from "./StoryDigitCRUD";
import DigitToast from "../../src/views/digit-toast/DigitToast.view";

storiesOf("Views", module)
    .addDecorator(withInfo)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addDecorator(DigitProvidersDecorator)
    .add(
        "DigitCRUD",
        () => (
            <>
                <DigitToast />
                <StoryDigitCRUD />
            </>
        ),
        {
            info: {
                text: DigitCRUD,
                propTablesExclude: [DigitProviders],
                header: false,
                source: false
            }
        }
    );
