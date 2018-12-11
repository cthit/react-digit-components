import React, { Component } from "react";
import { connect } from "react-redux";
import {
    setActiveLanguage,
    setCommonTranslations
} from "../../components/declaratives/digit-translations/DigitTranslations.declarative.action-creator";
import DigitTranslations from "../../components/declaratives/digit-translations";
import CommonTranslations from "./CommonTranslations.json";
import TestTranslations from "./TestTranslations.json";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    setActiveLanguage: lang => dispatch(setActiveLanguage(lang)),
    setCommonTranslations: commonTranslations =>
        dispatch(setCommonTranslations(commonTranslations))
});

class StoryDigitTranslations extends Component {
    constructor(props) {
        super(props);

        this.props.setCommonTranslations(CommonTranslations);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.lang !== nextProps.lang && nextProps.lang != null) {
            this.props.setActiveLanguage(nextProps.lang);
        }
    }

    render() {
        return (
            <DigitTranslations
                translations={TestTranslations}
                render={text => {
                    return (
                        <div>
                            <h1>{text.YouHaveWon}</h1>
                            <h1>{text.Yes}</h1>
                            <h1>{text.No}</h1>
                        </div>
                    );
                }}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryDigitTranslations);
