import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitIfElseRendering } from "../../components";
import DigitIfElseRenderingReadme from "../../components/declaratives/digit-if-else-rendering/readme.md";
import DigitProviders from "../../components/declaratives/digit-providers";
import {
    Text,
    Title
} from "../../components/styles/digit-text/DigitText.styles";
import centered from "@storybook/addon-centered/react";

const DigitIfElseRenderingStory = storiesOf("Declaratives", module);

DigitIfElseRenderingStory.addDecorator(centered);
DigitIfElseRenderingStory.addDecorator(withKnobs);

DigitIfElseRenderingStory.add(
    "DigitIfElseRendering",
    () => {
        const renderIf = boolean("Render if", true);

        return (
            <DigitProviders>
                <DigitIfElseRendering
                    ifRender={() => <Text text="Render this?" />}
                    elseRender={() => <Title text="Render That" />}
                    test={renderIf}
                />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitIfElseRenderingReadme,
            propTables: [DigitIfElseRendering],
            propTablesExclude: [DigitProviders]
        }
    }
);
