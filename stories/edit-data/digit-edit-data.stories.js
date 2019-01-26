import { action } from "@storybook/addon-actions";
import { select, text, boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import {
    DigitTranslations,
    DigitEditData,
    DigitProviders
} from "../../components";
import DigitEditDataReadme from "../../components/elements/digit-edit-data/readme.md";
import Translations from "./Translations.json";
import StoryDigitEditData from "./StoryDigitEditData";

const langLabel = "Language";
const langOptions = ["sv", "en"];
const langDefaultValue = "sv";

const DigitEditDataStory = storiesOf("Elements", module);

DigitEditDataStory.addDecorator(withKnobs);

DigitEditDataStory.add(
    "DigitEditData",
    () => {
        const title = text("Title", "Title text");
        const submit = text("Submit", "Submit text");
        const lang = select(langLabel, langOptions, langDefaultValue);
        const hasExtraButton = boolean("Extra button", false);

        return (
            <DigitProviders>
                <DigitTranslations
                    translations={Translations}
                    render={text => (
                        <StoryDigitEditData
                            onSubmit={(values, actions) => {
                                action("Values")(values);
                            }}
                            titleText={title}
                            submitText={submit}
                            text={text}
                            lang={lang}
                            hasExtraButton={hasExtraButton}
                        />
                    )}
                />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitEditDataReadme,
            propTables: [DigitEditData],
            propTablesExclude: [DigitProviders, DigitTranslations]
        }
    }
);
