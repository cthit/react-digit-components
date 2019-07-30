import React, { useState } from "react";
import { Text } from "../../src/styles/digit-text/DigitText.styles";
import DigitCRUD from "../../src/views/digit-crud";
import * as _ from "lodash";
import { Route } from "react-router-dom";
import DigitTextField from "../../src/elements/digit-text-field";
import * as yup from "yup";

const startData = [
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

const StoryDigitCRUD = () => {
    const [data, setData] = useState(startData);

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
                resolve({ data: result });
            }
        });

    const updateRequestPromise = (id, newUser) =>
        new Promise((resolve, reject) => {
            const index = _.findIndex(data, { id });
            if (index === -1) {
                reject();
            } else {
                const newData = data;
                newData[index] = { id, ...newUser };
                setData(newData);
                resolve({});
            }
        });

    return (
        <Route
            render={({ location }) => (
                <>
                    <Text text={"Path: " + location.pathname} />
                    <DigitCRUD
                        readAllRequest={readAllRequestPromise}
                        readOneRequest={readOneRequestPromise}
                        updateRequest={updateRequestPromise}
                        path={"/iframe.html"}
                        name={"users"}
                        keysOrder={["id", "name", "age"]}
                        keysText={{
                            id: "Id",
                            name: "Namn",
                            age: "Ålder"
                        }}
                        idProp="id"
                        tableProps={{
                            titleText: "Användare",
                            emptyTableText: "Det finns inga användare",
                            search: true,
                            startOrderBy: "name"
                        }}
                        formComponentData={{
                            name: {
                                component: DigitTextField,
                                componentProps: {
                                    outlined: true,
                                    upperLabel: "Namn"
                                }
                            },
                            age: {
                                component: DigitTextField,
                                componentProps: {
                                    numbersOnly: true,
                                    outlined: true,
                                    upperLabel: "Ålder"
                                }
                            }
                        }}
                        formValidationSchema={yup.object().shape({
                            name: yup.string().required(),
                            age: yup.number().required()
                        })}
                    />
                </>
            )}
        />
    );
};

export default StoryDigitCRUD;
