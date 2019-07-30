import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../src";
import DigitButtonReadme from "../../src/elements/digit-button/readme.md";
import centered from "@storybook/addon-centered/react";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";
import { withInfo } from "@storybook/addon-info";
import DigitCRUD from "../../src/views/digit-crud";
import * as _ from "lodash";
import { Text } from "../../src/styles/digit-text/DigitText.styles";
import { Route } from "react-router-dom";

storiesOf("Views", module)
    .addDecorator(withInfo)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addDecorator(DigitProvidersDecorator)
    .add(
        "DigitCRUD",
        () => {
            const data = [
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
            ];

            const readAllRequestPromise = () =>
                new Promise(resolve => {
                    resolve({
                        data
                    });
                });

            const readOneRequestPromise = id =>
                new Promise((resolve, reject) => {
                    const result = _.find(data, { id });
                    if (result == null) {
                        reject();
                    } else {
                        resolve(result);
                    }
                });

            return (
                <Route
                    render={({ location }) => (
                        <>
                            <Text text={"Path: " + location.pathname} />
                            <DigitCRUD
                                path={"/iframe.html"}
                                name={"users"}
                                keysOrder={["id", "name", "age"]}
                                keysText={{
                                    id: "Id",
                                    name: "Namn",
                                    age: "Ålder"
                                }}
                                readAllRequest={readAllRequestPromise}
                                readOneRequest={readOneRequestPromise}
                                idProp="id"
                                tableProps={{
                                    titleText: "Användare",
                                    emptyTableText: "Det finns inga användare",
                                    search: true,
                                    startOrderBy: "name"
                                }}
                            />
                        </>
                    )}
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
