import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { State } from "react-powerplug";
import { withReadme } from "storybook-readme";

import { DigitCheckbox } from "../components";
import DigitCheckboxReadme from "../components/elements/digit-checkbox/readme.md";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

const DigitCheckboxStory = storiesOf("Elements", module);

DigitCheckboxStory.addDecorator(withKnobs);

DigitCheckboxStory.add(
  "DigitCheckbox",
  withReadme(DigitCheckboxReadme, () => {
    const color = select(colorLabel, colorOptions, colorDefaultValue);
    const label = text("Label", "This is a label");
    const disabled = boolean("Disabled", false);
    const error = boolean("Error", false);
    const errorMessage = text("Error message", "Something went wrong");

    return (
      <State initial={{ checked: true }}>
        {({ state, setState }) => (
          <DigitCheckbox
            disabled={disabled}
            error={error}
            errorMessage={errorMessage}
            label={label}
            primary={color === "primary"}
            secondary={color === "secondary"}
            value={state.checked}
            onChange={e => {
              setState({
                checked: e.target.checked
              });
              action("toggled")(e);
            }}
            onBlur={e => {
              action("blur")(e);
            }}
          />
        )}
      </State>
    );
  })
);
