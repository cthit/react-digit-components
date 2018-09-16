import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

const langLabel = "Language";
const langOptions = ["sv", "en"];
const langDefaultValue = "sv";

import { DigitTranslations, DigitProviders } from "../../components";
import DigitTranslationsReadme from "../../components/declaratives/digit-translations/readme.md";

import TestTranslations from "./TestTranslations.json";
import CommonTranslations from "./CommonTranslations.json";

const DigitTranslationsStory = storiesOf("Elements", module);

DigitTranslationsStory.addDecorator(withKnobs);

DigitTranslationsStory.add(
  "DigitTranslations",
  withReadme(DigitTranslationsReadme, () => {
    const lang = select(langLabel, langOptions, langDefaultValue);

    return (
      <DigitProviders rootReducer={{}} preloadedState={{}}>
        <DigitTranslations
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
  })
);
