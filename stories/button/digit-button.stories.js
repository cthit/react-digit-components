import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitButton, DigitProviders } from "../../src";
import DigitButtonReadme from "../../src/elements/digit-button/readme.md";
import centered from "@storybook/addon-centered/react";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";
import { addDecorator } from "@storybook/react/dist/client/preview";
import { withInfo } from "@storybook/addon-info";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

const styleLabel = "style";
const styleOptions = ["raised", "outlined", "flat"];
const styleDefaultValue = "flat";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addDecorator(DigitProvidersDecorator)
    .add(
        "DigitButton",
        () => {
            const buttonText = text("Text", "This is a button");
            const color = select(colorLabel, colorOptions, colorDefaultValue);
            const style = select(styleLabel, styleOptions, styleDefaultValue);
            const disabled = boolean("Disabled", false);

            return (
                <DigitButton
                    text={buttonText}
                    primary={color === "primary"}
                    secondary={color === "secondary"}
                    raised={style === "raised"}
                    outlined={style === "outlined"}
                    disabled={disabled}
                    onClick={() => {
                        console.log("Hej");
                    }}
                />
            );
        },
        {
            info: {
                text: DigitButtonReadme,
                propTablesExclude: [DigitProviders],
                header: false,
                source: false
            }
        }
    );
