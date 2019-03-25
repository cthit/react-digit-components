import { boolean, number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitLoading, DigitProviders } from "../../src";
import DigitLoadingReadme from "../../src/elements/digit-loading/readme.md";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitLoading",
        () => {
            const loading = boolean("Loading", true);
            const size = number("Size", 40, {
                range: true,
                min: 0,
                max: 200,
                step: 1
            });

            return <DigitLoading size={size} loading={loading} />;
        },
        {
            info: {
                text: DigitLoadingReadme,
                propTables: [DigitLoading],
                propTablesExclude: [DigitProviders],
                header: false,
                source: false
            }
        }
    );
