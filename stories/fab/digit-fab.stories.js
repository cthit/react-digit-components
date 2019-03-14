import Add from "@material-ui/icons/Add";
import Call from "@material-ui/icons/Call";
import Edit from "@material-ui/icons/Edit";
import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitFAB, DigitProviders } from "../../components";
import DigitFABReadme from "../../components/elements/digit-fab/readme.md";
import { Padding } from "../../components/styles/digit-layout/DigitLayout.styles";
import centered from "@storybook/addon-centered/react";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

const iconLabel = "Icon";
const iconOptions = ["Edit", "Add", "Call"];
const iconDefaultValue = "Edit";

const DigitFABStory = storiesOf("Elements", module);

DigitFABStory.addDecorator(centered);
DigitFABStory.addDecorator(withKnobs);

DigitFABStory.add(
    "DigitFAB",
    () => {
        const disabled = boolean("Disabled", false);
        const color = select(colorLabel, colorOptions, colorDefaultValue);
        const icon = select(iconLabel, iconOptions, iconDefaultValue);

        return (
            <DigitProviders>
                <Padding>
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
                    />
                </Padding>
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitFABReadme,
            propTables: [],
            propTablesExclude: [DigitProviders, Padding]
        }
    }
);
