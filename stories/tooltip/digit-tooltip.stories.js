import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitButton, DigitProviders, DigitTooltip } from "../../components";
import DigitTooltipReadme from "../../components/elements/digit-tooltip/readme.md";
import { Size } from "../../components/styles/digit-layout/DigitLayout.styles";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitTooltip",
        () => {
            return (
                <Size width="200px">
                    <DigitTooltip
                        text={text("Tooltip text", "This is a tooltip")}
                    >
                        <DigitButton text="Hover me" />
                    </DigitTooltip>
                </Size>
            );
        },
        {
            info: {
                text: DigitTooltipReadme,
                propTables: [DigitTooltip],
                propTablesExclude: [DigitProviders, Size, DigitButton],
                header: false,
                source: false
            }
        }
    );
