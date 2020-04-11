import React from "react";
import { DigitProviders, DigitToast, DigitDialog } from "../src";

const DigitProvidersDecorator = StoryFn => (
    <DigitProviders memoryRouter defaultLanguage={"en"}>
        <StoryFn />
    </DigitProviders>
);

export default DigitProvidersDecorator;
