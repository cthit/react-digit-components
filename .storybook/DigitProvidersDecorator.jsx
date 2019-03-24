import React from "react";
import { DigitProviders } from "../components";

const DigitProvidersDecorator = storyFn => (
    <DigitProviders>{storyFn()}</DigitProviders>
);

export default DigitProvidersDecorator;
