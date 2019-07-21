import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { connect } from "react-redux";
import * as yup from "yup";
import {
    DigitButton,
    DigitDesign,
    DigitForm,
    DigitFormField,
    DigitProviders,
    DigitSwitch,
    DigitTextField
} from "../../src";
import DigitToastConnected from "../../src/views/digit-toast";
import DigitToast from "../../src/views/digit-toast/DigitToast.view";
import { digitToastOpen } from "../../src/views/digit-toast/DigitToast.view.action-creator";
import DigitToastReadme from "../../src/views/digit-toast/readme.md";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const Stuff = ({ toastOpen }) => (
    <div>
        <DigitForm
            onSubmit={values => {
                if (values.showActionButton) {
                    toastOpen({
                        text: values.toastMessage,
                        duration: values.duration,
                        actionText: values.actionText,
                        actionHandler: action("Action")
                    });
                } else {
                    toastOpen({
                        text: values.toastMessage,
                        duration: values.duration
                    });
                }
            }}
            initialValues={{
                toastMessage: "This is a toast",
                duration: 5000,
                actionText: "Action Text",
                showActionButton: false
            }}
            validationSchema={yup.object().shape({
                toastMessage: yup.string().required(),
                duration: yup.number().required(),
                actionText: yup.string().required(),
                showActionButton: yup.boolean().required()
            })}
            render={() => (
                <DigitDesign.Card>
                    <DigitDesign.CardBody>
                        <DigitFormField
                            name="toastMessage"
                            component={DigitTextField}
                            componentProps={{ upperLabel: "Toastmessage" }}
                        />

                        <DigitFormField
                            name="duration"
                            component={DigitTextField}
                            componentProps={{
                                upperLabel: "Duration",
                                numbersOnly: true
                            }}
                        />

                        <DigitFormField
                            name="actionText"
                            component={DigitTextField}
                            componentProps={{ upperLabel: "ActionText" }}
                        />

                        <DigitFormField
                            name="showActionButton"
                            component={DigitSwitch}
                            componentProps={{
                                label: "Have action button",
                                primary: true
                            }}
                        />
                    </DigitDesign.CardBody>
                    <DigitDesign.CardButtons>
                        <DigitButton text="Show Toast" submit raised primary />
                    </DigitDesign.CardButtons>
                </DigitDesign.Card>
            )}
        />

        <DigitToastConnected />
    </div>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    toastOpen: toastData => dispatch(digitToastOpen(toastData))
});

const StuffContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Stuff);

storiesOf("Views", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitToast",
        () => {
            return <StuffContainer />;
        },
        {
            info: {
                text: DigitToastReadme,
                propTables: [DigitToast],
                propTablesExclude: [
                    DigitProviders,
                    DigitToastConnected,
                    StuffContainer,
                    Stuff
                ],
                header: false,
                source: false
            }
        }
    );
