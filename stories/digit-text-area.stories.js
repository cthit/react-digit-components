import React from "react";

import {
  withKnobs,
  select,
  text,
  boolean,
  number
} from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { State } from "react-powerplug";
import { withReadme } from "storybook-readme";

import { DigitTextArea, DigitLayout, DigitProviders } from "../components";
import DigitTextAreaReadme from "../components/elements/digit-text-field/readme.md";

const styleLabel = "style";
const styleOptions = ["filled", "outline", "standard"];
const styleDefaultValue = "standard";

const DigitTextAreaStory = storiesOf("Elements", module);

DigitTextAreaStory.addDecorator(withKnobs);

DigitTextAreaStory.add(
  "DigitTextArea",
  withReadme(DigitTextAreaReadme, () => {
    const upperLabel = text("Upper label", "This is a upperLabel");
    const lowerLabel = text("Lower label", "This is a lowerLabel");
    const error = boolean("Error", false);
    const errorMessage = text("Error message", "Buuuh, this is a error");
    const disabled = boolean("disabled", false);
    const style = select(styleLabel, styleOptions, styleDefaultValue);
    const rows = number("Rows", 5, {
      range: true,
      min: 1,
      max: 20,
      step: 1
    });

    const rowsMax = number("Fixed width", 10, {
      range: true,
      min: 1,
      max: 20,
      step: 1
    });

    return (
      <DigitProviders>
        <State initial={{ value: "This is text" }}>
          {({ state, setState }) => (
            <DigitLayout.Size width="300px">
              <DigitTextArea
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
                error={error}
                errorMessage={errorMessage}
                lowerLabel={lowerLabel}
                upperLabel={upperLabel}
                disabled={disabled}
                outline={style === "outline"}
                filled={style === "filled"}
                rows={rows}
                rowsMax={rowsMax}
              />
            </DigitLayout.Size>
          )}
        </State>
      </DigitProviders>
    );
  })
);
