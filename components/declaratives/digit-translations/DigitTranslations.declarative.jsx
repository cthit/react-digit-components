import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { getTranslate, withLocalize } from "react-localize-redux";
import { connect } from "react-redux";
import flatten from "flat";

function loadTranslations(localize, translations, baseUrl, commonTranslations) {
    const translate = textId => getTranslate(localize)(baseUrl + "." + textId);

    const textsToTranslate = _.keys(_.at(translations, baseUrl)[0]);

    const texts = _.merge(
        {},
        _.zipObjectDeep(
            textsToTranslate,
            _.map(textsToTranslate, text => translate(text))
        ),
        _loadCommonTranslations(localize, commonTranslations)
    );

    return texts;
}

function _loadCommonTranslations(localize, commonTranslations) {
    const baseUrl = "CommonTranslations.";

    const translate = textId => getTranslate(localize)(baseUrl + textId);

    const textsToTranslate = _.keys(commonTranslations);

    return _.zipObject(
        textsToTranslate,
        _.map(textsToTranslate, text => translate(text))
    );
}

class DigitTranslations extends React.Component {
    constructor(props) {
        super(props);

        if (props.uniquePath != null && props.translations != null) {
            const translations = {};
            _.set(translations, props.uniquePath, props.translations);
            props.addTranslation({ ...translations });
        }
    }

    render() {
        return this.props.render(
            this.props.text,
            this.props.activeLanguage,
            this.props.setActiveLanguage
        );
    }
}

DigitTranslations.displayName = "DigitTranslations";
DigitTranslations.propTypes = {
    /** A uniquePath used to distinguish DigitTranslations from each other.
     * If you use the same translations, use the same uniquePath.
     */
    uniquePath: PropTypes.string,
    /** Translations that is unique to the uniquePath */
    translations: PropTypes.object,
    /** Render prop that has three argument.
     * (text) - The text object with the selected language loaded.
     * (activeLangauge) - The current langauge ["sv", "en"]
     * (setActiveLangauge) - A function where you can set the active langauge. Either ["sv", "en"] */
    render: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
    const translations = {};
    _.set(translations, ownProps.uniquePath, ownProps.translations);

    const t = flatten.unflatten(state.localize.translations);

    return {
        text: loadTranslations(
            state.localize,
            translations,
            ownProps.uniquePath,
            t.CommonTranslations
        )
    };
};

const mapDispatchToProps = dispatch => ({});

/** This is a temp solution to get the correct prop types from StoryBook. */
export { DigitTranslations };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withLocalize(DigitTranslations));
