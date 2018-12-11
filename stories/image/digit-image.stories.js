import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitImage, DigitProviders } from "../../components";
import DigitImageReadme from "../../components/elements/digit-image/readme.md";

const DigitImageStory = storiesOf("Elements", module);

DigitImageStory.addDecorator(withKnobs);

DigitImageStory.add(
    "DigitImage",
    () => {
        return (
            <DigitProviders>
                <DigitImage
                    imageStyle={{ width: "300px", height: "300px" }}
                    src="https://i.imgur.com/G8lFDH1.jpg"
                />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitImageReadme,
            propTablesExclude: [DigitProviders]
        }
    }
);
