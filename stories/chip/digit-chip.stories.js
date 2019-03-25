import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitChip, DigitProviders, DigitAvatar } from "../../src";
import DigitChipReadme from "../../src/elements/digit-chip/readme.md";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitChip",
        () => {
            return (
                <DigitChip
                    outlined
                    primary
                    avatar={
                        <DigitAvatar
                            alt="Hej"
                            imageSrc="https://i.imgur.com/G8lFDH1.jpg"
                        />
                    }
                    label="Hej"
                    onDelete={() => {
                        alert("Delete");
                    }}
                />
            );
        },
        {
            info: {
                text: DigitChipReadme,
                propTablesExclude: [DigitProviders],
                source: false,
                header: false
            }
        }
    );
