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
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Declaratives", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitContainUser",
        () => {
            const currentPath = text("Current path", "/create-account");
            return (
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
            );
        },
        {
            info: {
                text: DigitContainUserReadme,
                propTables: [DigitContainUser],
                propTablesExclude: [DigitProviders, DigitRedirect],
                source: false,
                header: false
            }
        }
    );
