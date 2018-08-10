import React from "react";
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
  const baseUrl = "Common.";

  console.log(localize);

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

const mapStateToProps = (state, ownProps) => {
  const translations = {};
  _.set(translations, ownProps.uniquePath, ownProps.translations);

  console.log(ownProps);

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLocalize(DigitTranslations));
