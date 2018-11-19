import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitAvatar, DigitProviders, DigitImage } from "../../components";
import DigitAvatarReadme from "../../components/elements/digit-avatar/readme.md";
import HomeIcon from "@material-ui/icons/Home";

const typeLabel = "Type";
const typeOptions = ["Icon", "Image"];
const typeDefaultValue = "Icon";

const DigitAvatarStory = storiesOf("Elements", module);

DigitAvatarStory.addDecorator(withKnobs);

DigitAvatarStory.add(
    "DigitAvatar",
    () => {
        const type = select(typeLabel, typeOptions, typeDefaultValue);

        return (
            <DigitProviders>
                {type === "Icon" ? (
                    <DigitAvatar icon={HomeIcon} />
                ) : type === "Image" ? (
                    <DigitAvatar imageSrc="https://i.imgur.com/G8lFDH1.jpg" />
                ) : null}
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitAvatarReadme,
            propTablesExclude: [DigitProviders]
        }
    }
);
