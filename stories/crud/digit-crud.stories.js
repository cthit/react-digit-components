import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../src";
import DigitButtonReadme from "../../src/elements/digit-button/readme.md";
import centered from "@storybook/addon-centered/react";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";
import { withInfo } from "@storybook/addon-info";
import DigitCRUD from "../../src/views/digit-crud";

storiesOf("Views", module)
    .addDecorator(withInfo)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addDecorator(DigitProvidersDecorator)
    .add(
        "DigitCRUD",
        () => {
            const readAllRequestPromise = () =>
                new Promise(resolve => {
                    resolve({
                        data: [
                            {
                                name: "Theodor",
                                age: 55
                            },
                            {
                                name: "Sven",
                                age: 99
                            }
                        ]
                    });
                });

            return (
                <DigitCRUD
                    name={"users"}
                    readAllRequest={readAllRequestPromise}
                />
            );
        },
        {
            info: {
                text: DigitButtonReadme,
                propTablesExclude: [DigitProviders],
                header: false,
                source: false
            }
        }
    );
