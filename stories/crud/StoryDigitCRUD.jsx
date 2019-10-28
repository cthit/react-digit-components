import React from "react";
import { Text, Title } from "../../src/styles/digit-text/DigitText.styles";
import DigitCRUD from "../../src/views/digit-crud";
import * as _ from "lodash";
import { Route } from "react-router-dom";
import DigitTextField from "../../src/elements/digit-text-field";
import * as yup from "yup";
import DigitButton from "../../src/elements/digit-button";

const startData = [
    {
        id: "asdf-fdsafasd",
        name: "Theodor",
        age: 55,
        quote: {
            sv: "Svenska",
            en: "English"
        },
        date: new Date().getTime()
    },
    {
        id: "fdas-fdsafasd",
        name: "Sven",
        age: 99,
        quote: {
            sv: "Svenska",
            en: "English"
        },
        date: new Date().getTime()
    }
];

setData.data = startData;

function setData(_data) {
    setData.data = _data;
}

function getData() {
    return setData.data;
}

function getStartPath(_startPath) {
    if (getStartPath.startPath == null) {
        getStartPath.startPath = _startPath;
    }
    return getStartPath.startPath;
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
                resolve({
                    data: {
                        ...result
                    }
                });
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

    const deleteRequestPromise = (id, form) =>
        new Promise((resolve, reject) => {
            const one = _.find(getData(), { id });

            if (form.nameConfirm !== one.name) {
                reject();
            }

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

    return (
        <Route
            render={({ location }) => (
                <>
                    {/*Don't mind me making react angry*/}
                    <Text text={"Path: " + getStartPath(location.pathname)} />
                    <DigitCRUD
                        readAllRequest={readAllRequestPromise}
                        readOneRequest={readOneRequestPromise}
                        updateRequest={updateRequestPromise}
                        deleteRequest={deleteRequestPromise}
                        createRequest={createRequestPromise}
                        path={getStartPath(location.pathname)}
                        name={"users"}
                        keysOrder={["id", "name", "age", "quote", "date"]}
                        keysText={{
                            id: "Id",
                            name: "Namn keys",
                            age: "Ålder",
                            quote: "Citat",
                            date: "Datum"
                        }}
                        timeProps={["date"]}
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
                                    outlined: true
                                    // upperLabel: "Namn"
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
                            data.name +
                            "? Bekräfta genom att skriva in nicket:"
                        }
                        dialogDeleteConfirm={data => "Radera " + data.name}
                        dialogDeleteCancel={data => "Avbryt"}
                        detailsButtonText={"Detaljer"}
                        detailsTitle={data => data.name}
                        detailsRenderCardEnd={data => (
                            <DigitButton text={"Test"} onClick={() => {}} />
                        )}
                        customDetailsRenders={{
                            age: one => <Title text={one.age + " yer age is"} />
                        }}
                        extractActiveLanguage
                        detailsRenderStart={() => "details start"}
                        detailsRenderEnd={() => "details end"}
                        detailsRenderCardStart={() => "card start"}
                        deleteDialogFormComponentData={{
                            nameConfirm: {
                                component: DigitTextField,
                                componentProps: {}
                            }
                        }}
                        deleteDialogFormInitialValues={{
                            nameConfirm: ""
                        }}
                        deleteDialogFormValidationSchema={data =>
                            yup.object().shape({
                                nameConfirm: yup
                                    .mixed()
                                    .oneOf(
                                        [data.name],
                                        "Måste vara lika med namnet på användaren"
                                    )
                                    .required("du bekräfta namn")
                            })
                        }
                        deleteDialogFormKeysOrder={["nameConfirm"]}
                        useKeyTextsInUpperLabel
                    />
                </>
            )}
        />
    );
};

export default StoryDigitCRUD;
