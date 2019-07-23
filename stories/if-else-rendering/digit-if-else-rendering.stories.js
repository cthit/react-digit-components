import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitIfElseRendering } from "../../src";
import DigitIfElseRenderingReadme from "../../src/declaratives/digit-if-else-rendering/readme.md";
import DigitProviders from "../../src/declaratives/digit-providers";
import { Text, Title } from "../../src/styles/digit-text/DigitText.styles";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Declaratives", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitIfElseRendering",
        () => {
            const renderIf = boolean("Render if", true);

            return (
                <DigitIfElseRendering
                    ifRender={() => <Text text="Render this?" />}
                    elseRender={() => <Title text="Render That" />}
                    test={renderIf}
                />
            );
        },
        {
            info: {
                text: DigitIfElseRenderingReadme,
                propTables: [DigitIfElseRendering],
                propTablesExclude: [DigitProviders],
                header: false,
                source: false
            }
        }
    );
