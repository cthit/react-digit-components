import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../components";
import DigitTranslationsConnected from "../../components/declaratives/digit-translations";
import DigitTranslations from "../../components/declaratives/digit-translations/DigitTranslations.declarative";
import DigitTranslationsReadme from "../../components/declaratives/digit-translations/readme.md";
import StoryDigitTranslations from "./StoryDigitTranslations";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const langLabel = "Language";
const langOptions = ["sv", "en"];
const langDefaultValue = "sv";

storiesOf("Declaratives", module)
    .addDecorator(withInfo)
    .addDecorator(centered)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(withKnobs)
    .add(
        "DigitTranslations",
        () => {
            const lang = select(langLabel, langOptions, langDefaultValue);

            return <StoryDigitTranslations lang={lang} />;
        },
        {
            info: {
                text: DigitTranslationsReadme,
                propTables: [DigitTranslations],
                propTablesExclude: [DigitProviders, DigitTranslationsConnected],
                header: false,
                source: false
            }
        }
    );
