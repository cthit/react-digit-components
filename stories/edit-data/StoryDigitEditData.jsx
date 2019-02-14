import React, { Component } from "react";
import DigitEditData from "../../components/elements/digit-edit-data";
import * as yup from "yup";
import DigitTextField from "../../components/elements/digit-text-field";
import DigitCheckbox from "../../components/elements/digit-checkbox";
import { connect } from "react-redux";
import { setActiveLanguage } from "../../components/declaratives/digit-translations/DigitTranslations.declarative.action-creator";
import { DigitAutocompleteSelectSingle } from "../../components";

const suggestions = [
    { label: "Afghanistan" },
    { label: "Aland Islands" },
    { label: "Albania" },
    { label: "Algeria" },
    { label: "American Samoa" },
    { label: "Andorra" },
    { label: "Angola" },
    { label: "Anguilla" },
    { label: "Antarctica" },
    { label: "Antigua and Barbuda" },
    { label: "Argentina" },
    { label: "Armenia" },
    { label: "Aruba" },
    { label: "Australia" },
    { label: "Austria" },
    { label: "Azerbaijan" },
    { label: "Bahamas" },
    { label: "Bahrain" },
    { label: "Bangladesh" },
    { label: "Barbados" },
    { label: "Belarus" },
    { label: "Belgium" },
    { label: "Belize" },
    { label: "Benin" },
    { label: "Bermuda" },
    { label: "Bhutan" },
    { label: "Bolivia, Plurinational State of" },
    { label: "Bonaire, Sint Eustatius and Saba" },
    { label: "Bosnia and Herzegovina" },
    { label: "Botswana" },
    { label: "Bouvet Island" },
    { label: "Brazil" },
    { label: "British Indian Ocean Territory" },
    { label: "Brunei Darussalam" }
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    setActiveLanguage: lang => dispatch(setActiveLanguage(lang))
});

class StoryDigitEditData extends Component {
    componentWillReceiveProps(nextProps) {
        if (this.props.lang !== nextProps.lang && nextProps.lang != null) {
            this.props.setActiveLanguage(nextProps.lang);
        }
    }

    render() {
        var extraButton = {};

        if (this.props.hasExtraButton) {
            extraButton = {
                extraButton: {
                    text: "Text"
                },
                extraButtonTo: "/asdf"
            };
        }

        return (
            <DigitEditData
                minWidth="300px"
                width="90%"
                maxWidth="600px"
                initialValues={{
                    firstName: "Smurf",
                    lastName: "Smurfsson",
                    email: "email@email.com",
                    agreement: false,
                    aCountry: ""
                }}
                onSubmit={this.props.onSubmit}
                validationSchema={yup.object().shape({
                    firstName: yup.string().required(),
                    lastName: yup.string().required(),
                    email: yup.string().required(),
                    agreement: yup.boolean().required(),
                    aCountry: yup.string().required()
                })}
                marginVertical="16px"
                titleText={this.props.titleText}
                submitText={this.props.submitText}
                keysOrder={[
                    "firstName",
                    "lastName",
                    "email",
                    "agreement",
                    "aCountry"
                ]}
                {...extraButton}
                keysComponentData={{
                    firstName: {
                        component: DigitTextField,
                        componentProps: {
                            upperLabel: this.props.text.firstName
                        }
                    },
                    lastName: {
                        component: DigitTextField,
                        componentProps: {
                            upperLabel: this.props.text.lastName
                        }
                    },
                    email: {
                        component: DigitTextField,
                        componentProps: {
                            upperLabel: this.props.text.email,
                            notFast: true
                        }
                    },
                    agreement: {
                        component: DigitCheckbox,
                        componentProps: {
                            primary: true,
                            label: this.props.text.agreement
                        }
                    },
                    aCountry: {
                        component: DigitAutocompleteSelectSingle,
                        componentProps: {
                            upperLabel: "Country",
                            selectableValues: suggestions
                        }
                    }
                }}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryDigitEditData);
