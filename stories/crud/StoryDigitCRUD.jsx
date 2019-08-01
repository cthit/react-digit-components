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

setData.data = startData;

function setData(_data) {
    setData.data = _data;
}

function getData() {
    return setData.data;
}

const StoryDigitCRUD = () => {
    const readAllRequestPromise = () =>
        new Promise(resolve => {
            resolve({
                data: getData()
            });
        });

    const readOneRequestPromise = id =>
        new Promise((resolve, reject) => {
            const result = _.find(getData(), { id });
            if (result == null) {
                reject();
            } else {
                resolve({ data: result });
            }
        });

    const updateRequestPromise = (id, newUser) =>
        new Promise((resolve, reject) => {
            const index = _.findIndex(getData(), { id });
            if (index === -1) {
                reject();
            } else {
                const newData = [...getData()];
                newData[index] = { id, ...newUser };
                setData(newData);
                resolve({});
            }
        });

    const createRequestPromise = newUser =>
        new Promise(resolve => {
            setData([...getData(), { ...newUser, id: "hej-" + newUser.name }]);
            resolve({});
        });

    const deleteRequestPromise = id =>
        new Promise((resolve, reject) => {
            const index = _.findIndex(getData(), { id });
            if (index === -1) {
                reject();
            } else {
                const newData = [...getData()];
                delete newData[index];
                setData(newData);
                resolve({});
            }
        });

    const [startPath, setStartPath] = useState(null);

    return (
        <Route
            render={({ location }) => (
                <>
                    {/*Don't mind me making react angry*/}
                    {setStartPath(
                        startPath == null ? location.pathname : startPath
                    )}
                    <Text text={"Path: " + location.pathname} />
                    <DigitCRUD
                        readAllRequest={readAllRequestPromise}
                        readOneRequest={readOneRequestPromise}
                        updateRequest={updateRequestPromise}
                        deleteRequest={deleteRequestPromise}
                        createRequest={createRequestPromise}
                        path={startPath}
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
                        formInitialValues={{
                            name: "",
                            age: 18
                        }}
                        createTitle={"Skapa användare"}
                        createButtonText={"Skapa"}
                        toastCreateSuccessful={(data, response) =>
                            "Användaren " + data.name + " skapad"
                        }
                        toastCreateFailed={(data, error) =>
                            "Användaren " + data.name + " raderad"
                        }
                        backButtonText={"Tillbaka"}
                        updateTitle={data =>
                            "Uppdatera " + data.name + " användare"
                        }
                        toastUpdateSuccessful={(updated, old, response) =>
                            "Användare " + updated.name + " har uppdateras"
                        }
                        toastUpdateFailed={(updated, old, error) =>
                            "Användare " + updated.name + " har inte uppdateras"
                        }
                        toastDeleteSuccessful={(data, response) =>
                            "Användare " + data.name + " har raderats"
                        }
                        toastDeleteFailed={(data, error) =>
                            "Radering av användare " +
                            data.name +
                            " misslyckades"
                        }
                        deleteButtonText={() => "Radera"}
                        updateButtonText={() => "Uppdatera"}
                        dialogDeleteTitle={data => "Är du säker?"}
                        dialogDeleteDescription={data =>
                            "Är du säker på att du vill radera användaren " +
                            data.name
                        }
                        dialogDeleteConfirm={data => "Radera " + data.name}
                        dialogDeleteCancel={data => "Avbryt"}
                        detailsButtonText={"Detaljer"}
                    />
                </>
            )}
        />
    );
};

export default StoryDigitCRUD;
