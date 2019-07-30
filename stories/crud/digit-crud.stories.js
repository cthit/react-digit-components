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
                                id: "asdf-fdsafasd",
                                name: "Theodor",
                                age: 55
                            },
                            {
                                id: "fdas-fdsafasd",
                                name: "Sven",
                                age: 99
                            }
                        ]
                    });
                });

            return (
                <DigitCRUD
                    name={"users"}
                    keysOrder={["name", "age"]}
                    keysText={{ name: "Namn", age: "Ålder" }}
                    readAllRequest={readAllRequestPromise}
                    tableProps={{
                        idProp: "id",
                        titleText: "Användare",
                        emptyTableText: "Det finns inga användare",
                        search: true,
                        startOrderBy: "name"
                    }}
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
