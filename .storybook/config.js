import { addDecorator } from "@storybook/react/dist/client/preview";
import { withInfo } from "@storybook/addon-info";
import { setDefaults } from "@storybook/addon-info";
import PropTypesTable from "./PropTypesTable";
import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
function loadStories() {
    const req = require.context("../stories", true, /.stories.js$/);
    req.keys().forEach(filename => req(filename));
}

setDefaults({
    TableComponent: PropTypesTable // Override the component used to render the props table
});

configure(loadStories, module);
