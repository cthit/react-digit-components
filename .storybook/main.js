module.exports = {
    presets: [
        {
            name: "@storybook/addon-docs/preset",
            options: {
                configureJSX: true,
                babelOptions: {
                    presets: [],
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
    stories: ["../**/*.stories.(mdx)"]
};
