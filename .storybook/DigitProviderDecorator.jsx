import React from "react";
import { DigitProviders } from "../components";

const DigitProviderDecorator = storyFn => (
    <DigitProviders>{storyFn()}</DigitProviders>
);

export default DigitProviderDecorator;
