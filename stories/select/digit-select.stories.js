import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders, DigitSelect } from "../../components";
import DigitSelectReadme from "../../components/elements/digit-select/readme.md";
import { Size } from "../../components/styles/digit-layout/DigitLayout.styles";
import StoryDigitSelect from "./StoryDigitSelect";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const styleLabel = "style";
const styleOptions = ["filled", "outlined", "standard"];
const styleDefaultValue = "standard";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitSelect",
        () => {
            const disabled = boolean("Disabled", false);
            const upperLabel = text("Upperlabel", "Favorite Icecream flavor");
            const lowerLabel = text("Lowerlabel", "Choose the best flavor");
            const style = select(styleLabel, styleOptions, styleDefaultValue);

            return (
                <Size absWidth="300px">
                    <StoryDigitSelect
                        disabled={disabled}
                        upperLabel={upperLabel}
                        lowerLabel={lowerLabel}
                        style={style}
                    />
                </Size>
            );
        },
        {
            info: {
                text: DigitSelectReadme,
                propTables: [DigitSelect],
                propTablesExclude: [DigitProviders, StoryDigitSelect, Size],
                source: false,
                header: false
            }
        }
    );
