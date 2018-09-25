import React from "react";
import * as yup from "yup";

import {
  withKnobs,
  select,
  text,
  boolean,
  number
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import Translations from "./Translations.json";

import {
  DigitEditData,
  DigitTextField,
  DigitProviders,
  DigitTranslations,
  DigitCheckbox
} from "../../components";
import DigitEditDataReadme from "../../components/elements/digit-edit-data/readme.md";

const langLabel = "Language";
const langOptions = ["sv", "en"];
const langDefaultValue = "sv";

const DigitEditDataStory = storiesOf("Elements", module);

DigitEditDataStory.addDecorator(withKnobs);

DigitEditDataStory.add(
  "DigitEditData",
  withReadme(DigitEditDataReadme, () => {
    const title = text("Title", "Title text");
    const submit = text("Submit", "Submit text");
    const lang = select(langLabel, langOptions, langDefaultValue);

    return (
      <DigitProviders>
        <DigitTranslations
          uniquePath="DigitEditDataStory"
          translations={Translations}
          render={(text, activeLanguage, setActiveLanguage) => {
            if (activeLanguage != null && activeLanguage.code != lang) {
              setActiveLanguage(lang);
            }

            return (
              <DigitEditData
                initialValues={{
                  firstName: "Smurf",
                  lastName: "Smurfsson",
                  email: "email@email.com",
                  agreement: false
                }}
                onSubmit={(values, actions) => {
                  action("Values")(values);
                }}
                validationSchema={yup.object().shape({
                  firstName: yup.string().required(),
                  lastName: yup.string().required(),
                  email: yup.string().required(),
                  agreement: yup.boolean().required()
                })}
                titleText={title}
                submitText={submit}
                keysOrder={["firstName", "lastName", "email", "agreement"]}
                keysComponentData={{
                  firstName: {
                    component: DigitTextField,
                    componentProps: {
                      upperLabel: text.firstName
                    }
                  },
                  lastName: {
                    component: DigitTextField,
                    componentProps: {
                      upperLabel: text.lastName
                    }
                  },
                  email: {
                    component: DigitTextField,
                    componentProps: {
                      upperLabel: text.email
                    }
                  },
                  agreement: {
                    component: DigitCheckbox,
                    componentProps: {
                      primary: true,
                      label: text.agreement
                    }
                  }
                }}
              />
            );
          }}
        />
      </DigitProviders>
    );
  })
);
