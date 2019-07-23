import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitAvatar, DigitProviders } from "../../src";
import DigitAvatarReadme from "../../src/elements/digit-avatar/readme.md";
import HomeIcon from "@material-ui/icons/Home";
import centered from "@storybook/addon-centered/react";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";
import { withInfo } from "@storybook/addon-info";

const typeLabel = "Type";
const typeOptions = ["Icon", "Image"];
const typeDefaultValue = "Icon";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitAvatar",
        () => {
            const type = select(typeLabel, typeOptions, typeDefaultValue);

            if (type === "Icon") {
                return <DigitAvatar icon={HomeIcon} />;
            } else if (type === "Image") {
                return (
                    <DigitAvatar imageSrc="https://i.imgur.com/G8lFDH1.jpg" />
                );
            } else {
                return null;
            }
        },
        {
            info: {
                text: DigitAvatarReadme,
                propTablesExclude: [DigitProviders],
                header: false,
                source: false
            }
        }
    );
