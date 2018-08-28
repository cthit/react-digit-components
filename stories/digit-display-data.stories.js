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

import { DigitDisplayData } from "../components";
import DigitDisplayDataReadme from "../components/elements/digit-display-data/readme.md";

const DigitDisplayDataStory = storiesOf("Elements", module);

DigitDisplayDataStory.addDecorator(withKnobs);

DigitDisplayDataStory.add(
  "DigitDisplayData",
  withReadme(DigitDisplayDataReadme, () => {
    const fixedWidth = number("Fixed width", 100, {
      range: true,
      min: 0,
      max: 500,
      step: 10
    });

    const firstName = text("Förnamn", "Sven");
    const lastName = text("Efternamn", "Svensson");
    const email = text("Email", "Sven@svensson.se");
    const nick = text("Nick", "Svennis");

    return (
      <DigitDisplayData
        fixedWidth={fixedWidth + "px"}
        data={{
          firstName: firstName,
          lastName: lastName,
          email: email,
          nick: nick
        }}
        keysText={{
          firstName: "Förnamn",
          lastName: "Efternamn",
          email: "Email",
          nick: "Nick"
        }}
        keysOrder={["firstName", "lastName", "email", "nick"]}
      />
    );
  })
);
