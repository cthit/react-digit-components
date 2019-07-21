import Add from "@material-ui/icons/Add";
import Call from "@material-ui/icons/Call";
import Edit from "@material-ui/icons/Edit";
import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitFAB, DigitProviders } from "../../src";
import DigitFABReadme from "../../src/elements/digit-fab/readme.md";
import { Padding } from "../../src/styles/digit-layout/DigitLayout.styles";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

const iconLabel = "Icon";
const iconOptions = ["Edit", "Add", "Call"];
const iconDefaultValue = "Edit";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitFAB",
        () => {
            const disabled = boolean("Disabled", false);
            const color = select(colorLabel, colorOptions, colorDefaultValue);
            const icon = select(iconLabel, iconOptions, iconDefaultValue);
            const text1 = text("Text", "");

            return (
                <DigitFAB
                    onClick={action("Click")}
                    icon={
                        icon === "Edit"
                            ? Edit
                            : icon === "Add"
                            ? Add
                            : icon === "Call"
                            ? Call
                            : null
                    }
                    disabled={disabled}
                    primary={color === "primary"}
                    secondary={color === "secondary"}
                    text={text1 === "" ? null : text1}
                />
            );
        },
        {
            info: {
                text: DigitFABReadme,
                propTables: [],
                propTablesExclude: [DigitProviders, Padding],
                source: false,
                header: false
            }
        }
    );
