import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { Send, Info, Code } from "@material-ui/icons";

import { DigitHeader, DigitNavLink, DigitProviders } from "../components";
import DigitHeaderReadme from "../components/elements/digit-header/readme.md";

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

    return (
      <DigitProviders>
        <DigitHeader
          title={title}
          renderMain={() => <div>Hej</div>}
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
