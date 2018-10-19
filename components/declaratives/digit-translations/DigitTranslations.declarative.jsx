import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import { withLocalize } from "react-localize-redux";
import { getTranslate } from "react-localize-redux";

function loadTranslations(localize, translations, baseUrl, commonTranslations) {
  if (translations == null && baseUrl == null) {
    return _loadCommonTranslations(localize, commonTranslations);
  }

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
  if (commonTranslations == null) {
    return {};
  }

  const baseUrl = "Common.";

  const translate = textId => getTranslate(localize)(baseUrl + textId);

  const textsToTranslate = _.keys(commonTranslations.Common);

  return _.zipObject(
    textsToTranslate,
    _.map(textsToTranslate, text => translate(text))
  );
}

class DigitTranslations extends React.Component {
  constructor(props) {
    super();

    if (props.uniquePath != null && props.translations != null) {
      const translations = {};
      _.set(translations, props.uniquePath, props.translations);
      props.addTranslation({ ...translations, ...props.common });
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
  /** Common translations. This should be the same for every usage of DigitTranslations
   * Instead of having "Yes" and "No" defined in every translations.json, you can have one common
   * tranlsations for simple phrases.
   */
  common: PropTypes.object,
  /** Render prop that has three argument.
   * (text) - The text object with the selected language loaded.
   * (activeLangauge) - The current langauge ["sv", "en"]
   * (setActiveLangauge) - A function where you can set the active langauge. Either ["sv", "en"] */
  render: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  const translations = {};
  _.set(translations, ownProps.uniquePath, ownProps.translations);

  return {
    text: ownProps.onlyCommon
      ? loadTranslations(state.localize, null, null, ownProps.common)
      : loadTranslations(
          state.localize,
          translations,
          ownProps.uniquePath,
          ownProps.common
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
