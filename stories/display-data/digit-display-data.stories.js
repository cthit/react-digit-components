import { number, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitDisplayData, DigitProviders } from "../../components";
import DigitDisplayDataReadme from "../../components/elements/digit-display-data/readme.md";
import centered from "@storybook/addon-centered/react";

const DigitDisplayDataStory = storiesOf("Elements", module);

DigitDisplayDataStory.addDecorator(centered);
DigitDisplayDataStory.addDecorator(withKnobs);

DigitDisplayDataStory.add(
    "DigitDisplayData",
    () => {
        const firstName = text("Förnamn", "Sven");
        const lastName = text("Efternamn", "Svensson");
        const email = text("Email", "Sven@svensson.se");
        const nick = text("Nick", "Svennis");

        return (
            <DigitProviders>
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
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitDisplayDataReadme,
            propTables: [DigitDisplayData],
            propTablesExclude: [DigitProviders]
        }
    }
);
