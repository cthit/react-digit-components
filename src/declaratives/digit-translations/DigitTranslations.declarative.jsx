import PropTypes from "prop-types";
import React from "react";
import { useDigitTranslations } from "../../";

//Should be removed in v2
const DigitTranslations = ({ translations, render }) => {
    const [text, activeLanguage] = useDigitTranslations(translations);
    return render(text, activeLanguage);
};

DigitTranslations.displayName = "DigitTranslations";
DigitTranslations.propTypes = {
    /** Translations */
    translations: PropTypes.object,
    /** Render prop that has three argument.
     * (text) - The text object with the selected language loaded.
     * (activeLanguage) - The current langauge ["sv", "en"] */
    render: PropTypes.func,
    activeLanguage: PropTypes.string
};

DigitTranslations.defaultProps = {
    render: () => null,
    translations: {}
};

export default DigitTranslations;
