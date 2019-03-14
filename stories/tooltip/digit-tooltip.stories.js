import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitButton, DigitProviders, DigitTooltip } from "../../components";
import DigitTooltipReadme from "../../components/elements/digit-tooltip/readme.md";
import { Size } from "../../components/styles/digit-layout/DigitLayout.styles";
import centered from "@storybook/addon-centered/react";

const DigitTooltipStory = storiesOf("Elements", module);

DigitTooltipStory.addDecorator(centered);
DigitTooltipStory.addDecorator(withKnobs);

DigitTooltipStory.add(
    "DigitTooltip",
    () => {
        return (
            <DigitProviders>
                <Size width="200px">
                    <DigitTooltip
                        text={text("Tooltip text", "This is a tooltip")}
                    >
                        <DigitButton text="Hover me" />
                    </DigitTooltip>
                </Size>
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitTooltipReadme,
            propTables: [DigitTooltip],
            propTablesExclude: [DigitProviders, Size, DigitButton]
        }
    }
);
