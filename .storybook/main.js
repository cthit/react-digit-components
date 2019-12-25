module.exports = {
    presets: [
        {
            name: "@storybook/addon-docs/preset",
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null
            }
        }
    ],
    stories: ["../**/*.stories.mdx"]
};
