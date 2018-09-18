import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import Edit from "@material-ui/icons/Edit";
import Add from "@material-ui/icons/Add";
import Call from "@material-ui/icons/Call";

import { DigitIconButton } from "../components";
import DigitIconButtonReadme from "../components/elements/digit-icon-button/readme.md";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

const iconLabel = "Icon";
const iconOptions = ["Edit", "Add", "Call"];
const iconDefaultValue = "Edit";

const DigitIconButtonStory = storiesOf("Elements", module);

DigitIconButtonStory.addDecorator(withKnobs);

DigitIconButtonStory.add(
  "DigitIconButton",
  withReadme(DigitIconButtonReadme, () => {
    const disabled = boolean("Disabled", false);
    const color = select(colorLabel, colorOptions, colorDefaultValue);
    const icon = select(iconLabel, iconOptions, iconDefaultValue);

    return (
      <DigitIconButton
        onBlur={action("blur")}
        onClick={action("click")}
        primary={color === "primary"}
        secondary={color === "secondary"}
        disabled={disabled}
        icon={
          icon === "Edit"
            ? Edit
            : icon === "Add"
              ? Add
              : icon === "Call"
                ? Call
                : null
        }
      />
    );
  })
);
