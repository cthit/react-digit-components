import { withKnobs, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import {
    DigitProviders,
    DigitContainUser,
    DigitRedirect
} from "../../components";
import DigitContainUserReadme from "../../components/declaratives/digit-contain-user/readme.md";
import centered from "@storybook/addon-centered/react";

const DigitContainUserStory = storiesOf("Declaratives", module);

DigitContainUserStory.addDecorator(centered);
DigitContainUserStory.addDecorator(withKnobs);

DigitContainUserStory.add(
    "DigitContainUser",
    () => {
        const currentPath = text("Current path", "/create-account");
        return (
            <DigitProviders rootReducer={{}} preloadedState={{}}>
                <React.Fragment>
                    <DigitRedirect currentPath={currentPath} window={window} />
                    <DigitContainUser
                        currentPath={currentPath}
                        allowedBasePaths={[
                            "/create-account",
                            "/reset-password"
                        ]}
                        to={"https://chalmers.it"}
                        externalRedirect
                    />
                </React.Fragment>
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitContainUserReadme,
            propTables: [DigitContainUser],
            propTablesExclude: [DigitProviders, DigitRedirect]
        }
    }
);
