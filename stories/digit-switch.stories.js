import React from "react";
import { State } from "react-powerplug";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { DigitSwitch, DigitProviders } from "../components";
import DigitSwitchReadme from "../components/elements/digit-switch/readme.md";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

const DigitSwitchStory = storiesOf("Elements", module);

DigitSwitchStory.addDecorator(withKnobs);

DigitSwitchStory.add(
  "DigitSwitch",
  withReadme(DigitSwitchReadme, () => {
    const label = text("Label", "This is a label");
    const color = select(colorLabel, colorOptions, colorDefaultValue);
    const disabled = boolean("Disabled", false);
    const error = boolean("error", false);
    const errorMessage = text("Error message", "Error oh no");

    return (
      <DigitProviders>
       <State initial={{ value: true }}>
        {({ state, setState }) => (
          <DigitSwitch
            value={state.value}
            onChange={e => {
              setState({
                value: e.target.checked
              });
              action("value")(e);
            }}
            label={label}
            onBlur={action("blur")}
            primary={color === "primary"}
            secondary={color === "secondary"}
            disabled={disabled}
            error={error}
            errorMessage={errorMessage}
          />
        )}
      </State>
      </DigitProviders>

    );
  })
);
