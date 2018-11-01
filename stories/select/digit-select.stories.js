import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders, DigitSelect } from "../../components";
import DigitSelectReadme from "../../components/elements/digit-select/readme.md";
import {
  Center,
  MarginTop,
  Size
} from "../../components/styles/digit-layout/DigitLayout.styles";
import StoryDigitSelect from "./StoryDigitSelect";

const styleLabel = "style";
const styleOptions = ["filled", "outlined", "standard"];
const styleDefaultValue = "standard";

const DigitSelectStory = storiesOf("Elements", module);

DigitSelectStory.addDecorator(withKnobs);

DigitSelectStory.add(
  "DigitSelect",
  () => {
    const disabled = boolean("Disabled", false);
    const upperLabel = text("Upperlabel", "Favorite Icecream flavor");
    const lowerLabel = text("Lowerlabel", "Choose the best flavor");
    const style = select(styleLabel, styleOptions, styleDefaultValue);

    return (
      <DigitProviders>
        <MarginTop>
          <Center>
            <Size absWidth="300px">
              <StoryDigitSelect
                disabled={disabled}
                upperLabel={upperLabel}
                lowerLabel={lowerLabel}
                style={style}
              />
            </Size>
          </Center>
        </MarginTop>
      </DigitProviders>
    );
  },
  {
    info: {
      text: DigitSelectReadme,
      propTables: [DigitSelect],
      propTablesExclude: [
        DigitProviders,
        StoryDigitSelect,
        Size,
        Center,
        MarginTop
      ]
    }
  }
);
