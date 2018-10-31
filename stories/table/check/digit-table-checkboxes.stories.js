import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Translations from "./Translations.json";

import {
  DigitTable,
  DigitProviders,
  DigitTranslations
} from "../../../components";
import DigitTableReadme from "../../../components/views/digit-table/readme.md";

const langLabel = "Language";
const langOptions = ["sv", "en"];
const langDefaultValue = "sv";

const DigitTableCheckboxesStory = storiesOf("Views", module);

DigitTableCheckboxesStory.addDecorator(withKnobs);

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
      text,
      search,
      titleText,
      searchText,
      showSearchableProps
    } = this.props;
    return (
      <DigitTable
        selected={this.state.selected}
        onSelectedUpdated={this.onSelectedChange}
        search={search}
        titleText={titleText}
        searchText={searchText}
        showSearchableProps={showSearchableProps}
        idProp="id"
        startOrderBy="firstName"
        columnsOrder={["id", "firstName", "lastName", "age"]}
        headerTexts={{
          id: text.id,
          firstName: text.firstName,
          lastName: text.lastName,
          age: text.age,
          __checkbox: text.choose,
          __link: text.info
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
    );
  }
}

DigitTableCheckboxesStory.add(
  "DigitTableCheckboxes",
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
            uniquePath="DigitTableCheckboxesTranslations"
            translations={Translations}
            render={(text, activeLanguage, setActiveLanguage) => {
              if (activeLanguage != null && activeLanguage.code != lang) {
                setActiveLanguage(lang);
              }
              return (
                <DigitTableCheckboxes
                  text={text}
                  titleText={titleText}
                  searchText={searchText}
                  showSearchableProps={showSearchableProps}
                  search={search}
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
