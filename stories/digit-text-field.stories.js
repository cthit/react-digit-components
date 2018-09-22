import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { State } from "react-powerplug";
import { withReadme } from "storybook-readme";

import { DigitTextField, DigitLayout, DigitProviders } from "../components";
import DigitTextFieldReadme from "../components/elements/digit-text-field/readme.md";

const typeLabel = "type";
const typeOptions = ["normal", "password", "numbersOnly"];
const typeDefaultValue = "normal";

const DigitTextFieldStory = storiesOf("Elements", module);

DigitTextFieldStory.addDecorator(withKnobs);

DigitTextFieldStory.add(
  "DigitTextField",
  withReadme(DigitTextFieldReadme, () => {
    const type = select(typeLabel, typeOptions, typeDefaultValue);
    const upperLabel = text("Upper label", "This is a upperLabel");
    const lowerLabel = text("Lower label", "This is a lowerLabel");
    const error = boolean("Error", false);
    const errorMessage = text("Error message", "Buuuh, this is a error");
    const disabled = boolean("disabled", false);

    return (
      <DigitProviders>
        <State initial={{ value: "This is text" }}>
          {({ state, setState }) => (
            <DigitLayout.Size width="300px">
              <DigitTextField
                value={state.value}
                onChange={e => {
                  setState({
                    value: e.target.value
                  });
                  action("value_changed")(e);
                }}
                onBlur={e => {
                  action("blur")(e);
                }}
                password={type === "password"}
                numbersOnly={type === "numbersOnly"}
                error={error}
                errorMessage={errorMessage}
                lowerLabel={lowerLabel}
                upperLabel={upperLabel}
                disabled={disabled}
              />
            </DigitLayout.Size>
          )}
        </State>
      </DigitProviders>
    );
  })
);
