import { configure, addParameters } from "@storybook/react";

addParameters({
    options: {
        isToolshown: false
    }
});

// configure(require.context("../stories", true, /\.stories\.(mdx)$/), module);
