import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react/dist/client/preview";
import { withInfo } from "@storybook/addon-info";
import { setDefaults } from "@storybook/addon-info";
import PropTypesTable from "./PropTypesTable";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addDecorator(
    withInfo({
        inline: false,
        source: false,
        header: false
    })
);

configure(loadStories, module);

setDefaults({
    TableComponent: PropTypesTable // Override the component used to render the props table
});
