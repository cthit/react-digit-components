import { configure, addParameters } from "@storybook/react";

addParameters({
    options: {
        isToolshown: true
    }
});

configure(require.context("../stories", true, /\.stories\.(mdx)$/), module);
