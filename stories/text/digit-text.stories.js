import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitLayout, DigitProviders, DigitText } from "../../src";
import DigitTextReadme from "../../src/styles/digit-text/readme.md";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Texts", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitText",
        () => {
            return (
                <DigitLayout.Column>
                    <DigitText.Heading1 text="Heading1;" />
                    <DigitText.Heading2 text="Heading2;" />
                    <DigitText.Heading3 text="Heading3;" />
                    <DigitText.Heading4 text="Heading4;" />
                    <DigitText.Heading5 text="Heading5;" />
                    <DigitText.Heading6 text="Heading6;" />
                    <DigitText.Title text="Title; The quick brown fox jumps over the lazy dog" />
                    <DigitText.Subtitle text="Subtitle;  The quick brown fox jumps over the lazy dog" />
                    <DigitText.Subtitle2 text="Subtitle2;  The quick brown fox jumps over the lazy dog" />
                    <DigitText.Text text="Text;  The quick brown fox jumps over the lazy dog" />
                </DigitLayout.Column>
            );
        },
        {
            info: {
                text: DigitTextReadme,
                propTables: [
                    DigitText.Heading1,
                    DigitText.Heading2,
                    DigitText.Heading3,
                    DigitText.Heading4,
                    DigitText.Heading5,
                    DigitText.Heading6,
                    DigitText.Title,
                    DigitText.Subtitle,
                    DigitText.Subtitle2,
                    DigitText.Text
                ],
                propTablesExclude: [DigitLayout.Column, DigitProviders],
                header: false,
                source: false
            }
        }
    );
