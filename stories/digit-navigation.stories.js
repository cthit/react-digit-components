import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { Send, Info, Code } from "@material-ui/icons";

import { DigitNavigation, DigitNavLink, DigitProviders } from "../components";
import DigitNavigationReadme from "../components/elements/digit-navigation/readme.md";

const iconLabel = "Icon";
const iconOptions = ["Send", "Info", "Code"];
const iconDefaultValue = "Send";

const DigitNavigationStory = storiesOf("Elements", module);

DigitNavigationStory.addDecorator(withKnobs);

DigitNavigationStory.add(
  "DigitNavigation",
  withReadme(DigitNavigationReadme, () => {
    const title = text("Title", "My Website");
    const icon = select(iconLabel, iconOptions, iconDefaultValue);

    return (
      <DigitProviders>
        <DigitNavigation
          title={title}
          renderMain={() => <div>Hej</div>}
          renderDrawer={closeDrawer => (
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
          )}
        />
      </DigitProviders>
    );
  })
);
