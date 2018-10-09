import React from "react";

import {
  withKnobs,
  select,
  text,
  boolean,
  number
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { Send, Info, Code } from "@material-ui/icons";

import {
  DigitHeader,
  DigitNavLink,
  DigitProviders,
  DigitLayout,
  DigitDisplayData,
  DigitTextField,
  DigitButton
} from "../components";
import DigitHeaderReadme from "../components/elements/digit-header/readme.md";
import { Value } from "react-powerplug";

const iconLabel = "Icon";
const iconOptions = ["Send", "Info", "Code"];
const iconDefaultValue = "Send";

const DigitHeaderStory = storiesOf("Elements", module);

DigitHeaderStory.addDecorator(withKnobs);

DigitHeaderStory.add(
  "DigitHeader",
  withReadme(DigitHeaderReadme, () => {
    const title = text("Title", "My Website");
    const icon = select(iconLabel, iconOptions, iconDefaultValue);
    const navigation = boolean("Navigation: ", true);
    const customHeaderDemo = boolean("Custom header demo", false);
    const headerHeight = number("Header height", 64, {
      range: true,
      min: 0,
      max: 300,
      step: 1
    });

    return (
      <DigitProviders>
        <DigitHeader
          title={title}
          headerHeight={headerHeight + "px"}
          renderHeader={() =>
            customHeaderDemo && (
              <DigitLayout.Row>
                <Value
                  render={({ value, set }) => (
                    <DigitTextField
                      upperLabel="Upper upper label"
                      lowerLabel="Lower lower label"
                      value={value}
                      onChange={e => {
                        set(e.target.value);
                      }}
                    />
                  )}
                />
                <DigitButton text="Logga in" />
              </DigitLayout.Row>
            )
          }
          renderMain={() => (
            <DigitLayout.Center>
              <DigitDisplayData
                fixedWidth={"200px"}
                data={{
                  firstName: "Asdf",
                  lastName: "Asdfsson",
                  email: "email",
                  nick: "Asdfasdf"
                }}
                keysText={{
                  firstName: "Förnamn",
                  lastName: "Efternamn",
                  email: "Email",
                  nick: "Nick"
                }}
                keysOrder={["firstName", "lastName", "email", "nick"]}
              />
            </DigitLayout.Center>
          )}
          renderDrawer={
            navigation
              ? closeDrawer => (
                  <DigitNavLink
                    onClick={closeDrawer}
                    link="/hej"
                    text="Hej"
                    icon={
                      icon === "Send"
                        ? Send
                        : icon === "Info"
                          ? Info
                          : icon === "Code"
                            ? Code
                            : null
                    }
                  />
                )
              : null
          }
        />
      </DigitProviders>
    );
  })
);
