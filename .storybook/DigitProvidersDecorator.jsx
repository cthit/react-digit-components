import React from "react";
import { DigitProviders } from "../src";

const DigitProvidersDecorator = storyFn => (
    <DigitProviders>{storyFn()}</DigitProviders>
);

export default DigitProvidersDecorator;
