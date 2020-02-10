import { addDecorator, addParameters } from "@storybook/react";
import DigitProvidersDecorator from "./DigitProvidersDecorator";

addDecorator(DigitProvidersDecorator);

addParameters({
    options: {
        isToolshown: false
    }
});
