import React, { Component } from "react";
import DigitEditData from "../../components/elements/digit-edit-data";
import * as yup from "yup";
import DigitTextField from "../../components/elements/digit-text-field";
import DigitCheckbox from "../../components/elements/digit-checkbox";
import { connect } from "react-redux";
import { setActiveLanguage } from "../../components/declaratives/digit-translations/DigitTranslations.declarative.action-creator";

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
        return (
            <DigitEditData
                initialValues={{
                    firstName: "Smurf",
                    lastName: "Smurfsson",
                    email: "email@email.com",
                    agreement: false
                }}
                onSubmit={this.props.onSubmit}
                validationSchema={yup.object().shape({
                    firstName: yup.string().required(),
                    lastName: yup.string().required(),
                    email: yup.string().required(),
                    agreement: yup.boolean().required()
                })}
                titleText={this.props.titleText}
                submitText={this.props.submitText}
                keysOrder={["firstName", "lastName", "email", "agreement"]}
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
