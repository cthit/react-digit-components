import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../components";
import DigitTranslationsConnected from "../../components/declaratives/digit-translations";
import { DigitTranslations } from "../../components/declaratives/digit-translations/DigitTranslations.declarative";
import DigitTranslationsReadme from "../../components/declaratives/digit-translations/readme.md";
import CommonTranslations from "./CommonTranslations.json";
import TestTranslations from "./TestTranslations.json";

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
      <DigitProviders rootReducer={{}} preloadedState={{}}>
        <DigitTranslationsConnected
          uniquePath="DigitTranslationsStories"
          translations={TestTranslations}
          common={CommonTranslations}
          render={(text, activeLanguage, setActiveLanguage) => {
            if (activeLanguage != null && activeLanguage.code != lang) {
              setActiveLanguage(lang);
            }

            return (
              <div>
                <h1>{text.YouHaveWon}</h1>
                <h1>{text.Yes}</h1>
                <h1>{text.No}</h1>
              </div>
            );
          }}
        />
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
