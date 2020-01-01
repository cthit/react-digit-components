import React from "react";
import { DigitProviders, DigitToast, DigitDialog } from "../src";

const DigitProvidersDecorator = StoryFn => (
    <DigitProviders memoryRouter>
        <>
            <DigitToast />
            <DigitDialog />
            <StoryFn />
        </>
    </DigitProviders>
);

export default DigitProvidersDecorator;
