import React from "react";
import { DigitProviders } from "../src";

const DigitProvidersDecorator = StoryFn => (
    <DigitProviders>
        <StoryFn />
    </DigitProviders>
);

export default DigitProvidersDecorator;
