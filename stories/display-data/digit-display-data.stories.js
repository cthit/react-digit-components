import { number, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitDisplayData, DigitProviders } from "../../src";
import DigitDisplayDataReadme from "../../src/elements/digit-display-data/readme.md";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitDisplayData",
        () => {
            const firstName = text("Förnamn", "Sven");
            const lastName = text("Efternamn", "Svensson");
            const email = text("Email", "Sven@svensson.se");
            const nick = text("Nick", "Svennis");

            return (
                <DigitDisplayData
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
        },
        {
            info: {
                text: DigitDisplayDataReadme,
                propTables: [DigitDisplayData],
                propTablesExclude: [DigitProviders],
                source: false,
                header: false
            }
        }
    );
