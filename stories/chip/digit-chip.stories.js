import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitChip, DigitProviders, DigitAvatar } from "../../components";
import DigitChipReadme from "../../components/elements/digit-chip/readme.md";
import HomeIcon from "@material-ui/icons/Home";
import {
    Center,
    MarginTop,
    Column
} from "../../components/styles/digit-layout/DigitLayout.styles";
import centered from "@storybook/addon-centered/react";

const DigitChipStory = storiesOf("Elements", module);

DigitChipStory.addDecorator(centered);
DigitChipStory.addDecorator(withKnobs);

DigitChipStory.add(
    "DigitChip",
    () => {
        return (
            <DigitProviders>
                <Column>
                    <Center>
                        <MarginTop />
                        <DigitChip
                            outlined
                            primary
                            avatar={
                                <DigitAvatar
                                    alt="Hej"
                                    imageSrc="https://i.imgur.com/G8lFDH1.jpg"
                                />
                            }
                            label="Hej"
                            onDelete={() => {
                                alert("Delete");
                            }}
                        />
                    </Center>
                </Column>
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitChipReadme,
            propTablesExclude: [DigitProviders]
        }
    }
);
