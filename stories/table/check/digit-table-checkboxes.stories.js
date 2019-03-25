import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import {
    DigitProviders,
    DigitTable,
    DigitTranslations
} from "../../../src";
import { Margin } from "../../../src/styles/digit-layout/DigitLayout.styles";
import { Text } from "../../../src/styles/digit-text/DigitText.styles";
import DigitTableReadme from "../../../src/views/digit-table/readme.md";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../../.storybook/DigitProvidersDecorator";

class DigitTableCheckboxes extends React.Component {
    state = {
        selected: []
    };

    onSelectedChange = selected => {
        this.setState({
            selected: selected
        });
    };

    render() {
        const {
            search,
            titleText,
            searchText,
            showSearchableProps
        } = this.props;

        const { selected } = this.state;

        return (
            <div>
                {selected.map(s => (
                    <Text text={s + ", "} />
                ))}
                <Margin />
                <DigitTable
                    selected={selected}
                    onSelectedUpdated={this.onSelectedChange}
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
                        age: "Ålder",
                        __checkbox: "Välj",
                        __link: "Information"
                    }}
                    data={[
                        {
                            id: "1337",
                            firstName: "Asdf",
                            lastName: "Asdfsson",
                            age: 33,
                            __link: "/link"
                        },
                        {
                            id: "4444",
                            firstName: "Glass",
                            lastName: "Glasssson",
                            age: 50,
                            __link: "/link"
                        },
                        {
                            id: "4324",
                            firstName: "Jeremy",
                            lastName: "Clarkson",
                            age: 50,
                            __link: "/link"
                        },
                        {
                            id: "1234",
                            firstName: "James",
                            lastName: "May",
                            age: 99,
                            __link: "/link"
                        },
                        {
                            id: "4321",
                            firstName: "Richard",
                            lastName: "Hammond",
                            age: 18,
                            __link: "/link"
                        },
                        {
                            id: "9999",
                            firstName: "The",
                            lastName: "Stig",
                            age: 55,
                            __link: "/link"
                        },
                        {
                            id: "2244",
                            firstName: "Henrik",
                            lastName: "Lundqvist",
                            age: 30,
                            __link: "/link"
                        }
                    ]}
                />
            </div>
        );
    }
}

storiesOf("Views", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(withKnobs)
    .add(
        "DigitTableCheckboxes",
        () => {
            const titleText = text("Title", "Title text");
            const searchText = text("Search text", "Search text");
            const showSearchableProps = boolean("Show searchable props", true);
            const search = boolean("Search", true);

            return (
                <DigitTableCheckboxes
                    titleText={titleText}
                    searchText={searchText}
                    showSearchableProps={showSearchableProps}
                    search={search}
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
