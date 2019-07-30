import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders } from "../../src";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";
import { withInfo } from "@storybook/addon-info";
import DigitCRUD from "../../src/views/digit-crud";
import StoryDigitCRUD from "./StoryDigitCRUD";
import DigitToast from "../../src/views/digit-toast/DigitToast.view.container";
import DigitDialog from "../../src/views/digit-dialog/DigitDialog.view.container";
import DigitCRUDReadme from "../../src/views/digit-crud/README.md";

storiesOf("Views", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .addDecorator(DigitProvidersDecorator)
    .add(
        "DigitCRUD",
        () => (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100vh"
                }}
            >
                <DigitDialog />
                <DigitToast />
                <StoryDigitCRUD />
            </div>
        ),
        {
            info: {
                text: DigitCRUDReadme,
                propTables: [DigitCRUD],
                propTablesExclude: [
                    DigitProviders,
                    DigitDialog,
                    DigitToast,
                    StoryDigitCRUD
                ],
                header: false,
                source: false
            }
        }
    );
