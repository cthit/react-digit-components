import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitImage, DigitProviders } from "../../src";
import DigitImageReadme from "../../src/elements/digit-image/readme.md";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(withKnobs)
    .add(
        "DigitImage",
        () => {
            return (
                <DigitImage
                    imageStyle={{ width: "300px", height: "300px" }}
                    src="https://i.imgur.com/G8lFDH1.jpg"
                />
            );
        },
        {
            info: {
                text: DigitImageReadme,
                propTablesExclude: [DigitProviders],
                header: false,
                source: false
            }
        }
    );
