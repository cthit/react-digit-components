import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../components";
import DigitTranslationsConnected from "../../components/declaratives/digit-translations";
import DigitTranslations from "../../components/declaratives/digit-translations/DigitTranslations.declarative";
import DigitTranslationsReadme from "../../components/declaratives/digit-translations/readme.md";
import CommonTranslations from "./CommonTranslations.json";
import StoryDigitTranslations from "./StoryDigitTranslations";

const langLabel = "Language";
const langOptions = ["sv", "en"];
const langDefaultValue = "sv";

const DigitTranslationsStory = storiesOf("Declaratives", module);

DigitTranslationsStory.addDecorator(withKnobs);

DigitTranslationsStory.add(
    "DigitTranslations",
    () => {
        const lang = select(langLabel, langOptions, langDefaultValue);

        return (
            <DigitProviders
                commonTranslations={CommonTranslations}
                rootReducer={{}}
                preloadedState={{}}
            >
                <StoryDigitTranslations lang={lang} />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitTranslationsReadme,
            propTables: [DigitTranslations],
            propTablesExclude: [DigitProviders, DigitTranslationsConnected]
        }
    }
);
