import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";

class DigitTranslations extends React.Component {
    state = {
        text: {},
        hasCalculatedTranslations: false,
        hasCalculatedCommonTranslations: false
    };

    constructor(props) {
        super(props);

        this.state = {
            text: this._getNewText(
                props.translations,
                props.commonTranslations,
                props.activeLanguage
            ),
            hasCalculatedTranslations: props.translations != null,
            hasCalculatedCommonTranslations: props.commonTranslations != null
        };
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (
            (nextProps.translations != null &&
                !nextState.hasCalculatedTranslations) ||
            (nextProps.commonTranslations != null &&
                !nextState.hasCalculatedCommonTranslations) ||
            this.props.activeLanguage !== nextProps.activeLanguage
        ) {
            this.setState({
                text: this._getNewText(
                    nextProps.translations,
                    nextProps.commonTranslations,
                    nextProps.activeLanguage
                ),
                hasCalculatedTranslations: nextProps.translations,
                hasCalculatedCommonTranslations: nextProps.commonTranslations
            });
        }
    }

    _getNewText(translations, commonTranslations, activeLanguage) {
        let newText = {};

        _.merge(newText, translations, commonTranslations);

        const langIndex = activeLanguage === "en" ? 0 : 1;

        Object.keys(newText).forEach(val => {
            newText[val] = newText[val][langIndex];
        });

        return newText;
    }

    render() {
        return this.props.render(this.state.text, this.props.activeLanguage);
    }
}

DigitTranslations.displayName = "DigitTranslations";
DigitTranslations.propTypes = {
    /** Translations */
    translations: PropTypes.object,
    /** Render prop that has three argument.
     * (text) - The text object with the selected language loaded.
     * (activeLangauge) - The current langauge ["sv", "en"] */
    render: PropTypes.func,
    activeLanguage: PropTypes.string
};

/** This is a temp solution to get the correct prop types from StoryBook. */
export default DigitTranslations;
