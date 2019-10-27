import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitList, DigitProviders } from "../../src";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";
import Mail from "@material-ui/icons/Mail";
import Delete from "@material-ui/icons/Delete";

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
