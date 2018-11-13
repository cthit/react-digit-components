import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import {
    DigitProviders,
    DigitTable,
    DigitTranslations
} from "../../../components";
import DigitTableReadme from "../../../components/views/digit-table/readme.md";
import Translations from "./Translations.json";

const langLabel = "Language";
const langOptions = ["sv", "en"];
const langDefaultValue = "sv";

const DigitTableStory = storiesOf("Views", module);

DigitTableStory.addDecorator(withKnobs);

DigitTableStory.add(
    "DigitTable",
    () => {
        const lang = select(langLabel, langOptions, langDefaultValue);
        const titleText = text("Title", "Title text");
        const searchText = text("Search text", "Search text");
        const showSearchableProps = boolean("Show searchable props", true);
        const search = boolean("Search", true);

        return (
            <DigitProviders>
                <div>
                    <DigitTranslations
                        uniquePath="DigitTableTranslations"
                        translations={Translations}
                        render={(text, activeLanguage, setActiveLanguage) => {
                            if (
                                activeLanguage != null &&
                                activeLanguage.code != lang
                            ) {
                                setActiveLanguage(lang);
                            }
                            return (
                                <DigitTable
                                    search={search}
                                    titleText={titleText}
                                    searchText={searchText}
                                    showSearchableProps={showSearchableProps}
                                    idProp="id"
                                    startOrderBy="firstName"
                                    columnsOrder={[
                                        "id",
                                        "firstName",
                                        "lastName",
                                        "age"
                                    ]}
                                    headerTexts={{
                                        id: text.id,
                                        firstName: text.firstName,
                                        lastName: text.lastName,
                                        age: text.age
                                    }}
                                    data={[
                                        {
                                            id: "1337",
                                            firstName: "Asdf",
                                            lastName: "Asdfsson",
                                            age: 33
                                        },
                                        {
                                            id: "4444",
                                            firstName: "Glass",
                                            lastName: "Glasssson",
                                            age: 50
                                        },
                                        {
                                            id: "4324",
                                            firstName: "Jeremy",
                                            lastName: "Clarkson",
                                            age: 50
                                        },
                                        {
                                            id: "1234",
                                            firstName: "James",
                                            lastName: "May",
                                            age: 99
                                        },
                                        {
                                            id: "4321",
                                            firstName: "Richard",
                                            lastName: "Hammond",
                                            age: 18
                                        },
                                        {
                                            id: "9999",
                                            firstName: "The",
                                            lastName: "Stig",
                                            age: 55
                                        },
                                        {
                                            id: "2244",
                                            firstName: "Henrik",
                                            lastName: "Lundqvist",
                                            age: 30
                                        }
                                    ]}
                                />
                            );
                        }}
                    />
                </div>
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitTableReadme,
            propTables: [DigitTable],
            propTablesExclude: [DigitProviders, DigitTranslations]
        }
    }
);
