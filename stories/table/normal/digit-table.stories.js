import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders, DigitTable, DigitTranslations } from "../../../src";
import DigitTableReadme from "../../../src/views/digit-table/readme.md";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../../.storybook/DigitProvidersDecorator";

storiesOf("Views", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(withKnobs)
    .add(
        "DigitTable",
        () => {
            const titleText = text("Title", "Title text");
            const searchText = text("Search text", "Search text");
            const showSearchableProps = boolean("Show searchable props", true);
            const search = boolean("Search", true);
            const empty = boolean("Empty", false);

            return (
                <DigitTable
                    emptyTableText={text.emptyTableText}
                    search={search}
                    titleText={titleText}
                    searchText={searchText}
                    showSearchableProps={showSearchableProps}
                    idProp="id"
                    startOrderBy="firstName"
                    columnsOrder={["id", "firstName", "lastName", "age"]}
                    headerTexts={{
                        id: "Id",
                        firstName: "Förnamn",
                        lastName: "Efternamn",
                        age: "Ålder"
                    }}
                    data={
                        !empty
                            ? [
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
                              ]
                            : []
                    }
                />
            );
        },
        {
            info: {
                text: DigitTableReadme,
                propTables: [DigitTable],
                propTablesExclude: [DigitProviders, DigitTranslations],
                header: false,
                source: false
            }
        }
    );
