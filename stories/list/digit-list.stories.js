import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import { DigitList, DigitProviders } from "../../src";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";
import Mail from "@material-ui/icons/Mail";
import Delete from "@material-ui/icons/Delete";
import DigitEditData from "../../src/elements/digit-edit-data";
import * as yup from "yup";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitList",
        () => {
            return (
                <DigitProviders>
                    <>
                        <DigitList
                            onClick={item => {
                                console.log(item.text);
                            }}
                            dense={false}
                            title={"This is a title"}
                            items={[
                                {
                                    text: "Hej",
                                    secondaryText: "This is the secondary text",
                                    icon: Mail,
                                    items: [
                                        {
                                            text: "Hej"
                                        }
                                    ],
                                    actionIcon: Delete,
                                    actionOnClick: item => {
                                        console.log("DELETE ME " + item.text);
                                    }
                                },
                                {
                                    text: "hmm",
                                    icon: Mail,
                                    items: [
                                        {
                                            text: "ååh",
                                            items: [
                                                {
                                                    text: "subsub"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]}
                        />
                        <DigitEditData
                            onSubmit={values => {
                                console.log(values);
                            }}
                            submitText={"Submit"}
                            validationSchema={yup
                                .object()
                                .shape({ list: yup.object() })}
                            titleText={"Select"}
                            keysOrder={["list"]}
                            keysComponentData={{
                                list: {
                                    component: DigitList,
                                    componentProps: {
                                        title: "List",
                                        items: [
                                            {
                                                text: "Hej",
                                                secondaryText:
                                                    "This is the secondary text",
                                                icon: Mail,
                                                items: [
                                                    {
                                                        text: "what"
                                                    },
                                                    { text: "då" }
                                                ]
                                            },
                                            {
                                                text: "hmm",
                                                icon: Mail,
                                                items: [
                                                    {
                                                        text: "ååh",
                                                        items: [
                                                            {
                                                                text: "subsub"
                                                            },
                                                            {
                                                                text: "glass"
                                                            },
                                                            {
                                                                text: "gott"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }}
                        />
                        <DigitEditData
                            onSubmit={values => {
                                console.log(values);
                            }}
                            submitText={"Submit"}
                            validationSchema={yup
                                .object()
                                .shape({ list: yup.array() })}
                            titleText={"Select"}
                            keysOrder={["list"]}
                            initialValues={{
                                list: []
                            }}
                            keysComponentData={{
                                list: {
                                    component: DigitList,
                                    componentProps: {
                                        multipleSelect: true,
                                        title: "List",
                                        items: [
                                            {
                                                text: "Hej",
                                                secondaryText:
                                                    "This is the secondary text",
                                                items: [
                                                    {
                                                        text: "whatwhat"
                                                    },
                                                    { text: "då" }
                                                ]
                                            },
                                            {
                                                text: "hmm",
                                                items: [
                                                    {
                                                        text: "ååh",
                                                        items: [
                                                            {
                                                                text: "subsub"
                                                            },
                                                            {
                                                                text: "glass"
                                                            },
                                                            {
                                                                text: "gott"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }}
                        />
                    </>
                </DigitProviders>
            );
        },
        {
            info: {
                propTables: [DigitList],
                propTablesExclude: [DigitProviders],
                header: false,
                source: false
            }
        }
    );
