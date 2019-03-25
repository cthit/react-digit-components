import Add from "@material-ui/icons/Add";
import Call from "@material-ui/icons/Call";
import Edit from "@material-ui/icons/Edit";
import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitIconButton, DigitProviders } from "../../src";
import DigitIconButtonReadme from "../../src/elements/digit-icon-button/readme.md";
import centered from "@storybook/addon-centered/react";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

const iconLabel = "Icon";
const iconOptions = ["Edit", "Add", "Call"];
const iconDefaultValue = "Edit";

storiesOf("Elements", module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitIconButton",
        () => {
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
        },
        {
            info: {
                text: DigitIconButtonReadme,
                propTables: [DigitIconButton],
                propTablesExclude: [DigitProviders],
                header: false,
                source: false
            }
        }
    );
