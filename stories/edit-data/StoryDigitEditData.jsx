import React, { Component } from "react";
import DigitEditData from "../../src/elements/digit-edit-data";
import * as yup from "yup";
import DigitTextField from "../../src/elements/digit-text-field";
import DigitCheckbox from "../../src/elements/digit-checkbox";
import { connect } from "react-redux";
import { setActiveLanguage } from "../../src/declaratives/digit-translations/DigitTranslations.declarative.action-creator";
import {
    DigitAutocompleteSelectSingle,
    DigitSelect,
    DigitTimePicker
} from "../../src";

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
                    aCountry: "Angola",
                    time: Date.now(),
                    year: 2006
                }}
                onSubmit={this.props.onSubmit}
                validationSchema={yup.object().shape({
                    firstName: yup.string().required(),
                    lastName: yup.string().required(),
                    email: yup.string().required(),
                    agreement: yup.boolean().required(),
                    aCountry: yup.string().required(),
                    time: yup.date().required(),
                    year: yup.number().required()
                })}
                titleText={this.props.titleText}
                submitText={this.props.submitText}
                keysOrder={[
                    "firstName",
                    "lastName",
                    "email",
                    "agreement",
                    "aCountry",
                    "time",
                    "year"
                ]}
                {...extraButton}
                keysComponentData={{
                    firstName: {
                        component: DigitTextField,
                        componentProps: {
                            upperLabel: this.props.text.firstName,
                            maxLength: 15
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
                    },
                    time: {
                        component: DigitTimePicker,
                        componentProps: {
                            upperLabel: "Time"
                        }
                    },
                    year: {
                        component: DigitSelect,
                        componentProps: {
                            upperLabel: "Year",
                            valueToTextMap: {
                                2005: "2005",
                                2006: "2006",
                                2007: "2007"
                            }
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
