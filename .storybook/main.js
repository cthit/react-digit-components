module.exports = {
    addons: [
        "@storybook/preset-create-react-app",
        {
            name: "@storybook/addon-docs/preset",
            options: {
                configureJSX: true,
                babelOptions: {
                    plugins: [
                        [
                            "@babel/plugin-transform-react-jsx",
                            {
                                pragmaFrag: "React.Fragment"
                            },
                            "storybook-transform-jsx"
                        ]
                    ]
                },
                sourceLoaderOptions: null
            }
        }
    ],
    stories: ["../**/*.stories.@(mdx)"]
};
