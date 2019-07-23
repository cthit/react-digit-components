import { action } from "@storybook/addon-actions";
import { select, text, boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitTranslations, DigitEditData, DigitProviders } from "../../src";
import DigitEditDataReadme from "../../src/elements/digit-edit-data/readme.md";
import Translations from "./Translations.json";
import StoryDigitEditData from "./StoryDigitEditData";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const langLabel = "Language";
const langOptions = ["sv", "en"];
const langDefaultValue = "sv";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitEditData",
        () => {
            const title = text("Title", "Title text");
            const submit = text("Submit", "Submit text");
            const lang = select(langLabel, langOptions, langDefaultValue);
            const hasExtraButton = boolean("Extra button", false);

            return (
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
            );
        },
        {
            info: {
                text: DigitEditDataReadme,
                propTables: [DigitEditData],
                propTablesExclude: [DigitProviders, DigitTranslations],
                header: false,
                source: false
            }
        }
    );
