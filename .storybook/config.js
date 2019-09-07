import { configure, addParameters, addDecorator } from "@storybook/react";
import DigitProvidersDecorator from "./DigitProvidersDecorator";

addParameters({
    options: {
        isToolshown: false
    }
});

configure(require.context("../stories", true, /\.stories\.(mdx)$/), module);
