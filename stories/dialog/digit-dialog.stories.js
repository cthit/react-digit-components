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
    DigitTextArea,
    DigitTextField
} from "../../components";
import DigitDialogConnected from "../../components/views/digit-dialog";
import DigitDialog from "../../components/views/digit-dialog/DigitDialog.view";
import { digitDialogOpen } from "../../components/views/digit-dialog/DigitDialog.view.action-creator";
import DigitDialogReadme from "../../components/views/digit-dialog/readme.md";
import centered from "@storybook/addon-centered/react";

const DigitDialogStory = storiesOf("Views", module);

DigitDialogStory.addDecorator(centered);
DigitDialogStory.addDecorator(withKnobs);

const Stuff = ({ digitDialogOpen }) => (
    <div>
        <DigitForm
            onSubmit={values => {
                digitDialogOpen({
                    ...values,
                    onCancel: e => {
                        action("Cancel")(e);
                    },
                    onConfirm: e => {
                        action("Confirm")(e);
                    }
                });
            }}
            initialValues={{
                title: "Dialog header",
                description:
                    "Dialog body asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asddf asdf ",
                confirmButtonText: "Confirm",
                cancelButtonText: "Cancel button text"
            }}
            validationSchema={yup.object().shape({
                title: yup.string().required(),
                description: yup.string().required(),
                confirmButtonText: yup.string().required(),
                cancelButtonText: yup.string().required()
            })}
            render={() => (
                <DigitDesign.Card>
                    <DigitDesign.CardBody>
                        <DigitFormField
                            name="title"
                            component={DigitTextField}
                            componentProps={{ upperLabel: "Header text" }}
                        />

                        <DigitFormField
                            name="description"
                            component={DigitTextArea}
                            componentProps={{
                                upperLabel: "Body text",
                                rows: 5,
                                rowsMax: 10
                            }}
                        />

                        <DigitFormField
                            name="confirmButtonText"
                            component={DigitTextField}
                            componentProps={{
                                upperLabel: "Confirm button text"
                            }}
                        />

                        <DigitFormField
                            name="cancelButtonText"
                            component={DigitTextField}
                            componentProps={{
                                upperLabel: "Cancel button text"
                            }}
                        />
                    </DigitDesign.CardBody>
                    <DigitDesign.CardButtons>
                        <DigitButton text="Show Dialog" submit raised primary />
                    </DigitDesign.CardButtons>
                </DigitDesign.Card>
            )}
        />

        <DigitDialogConnected />
    </div>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    digitDialogOpen: dialogData => dispatch(digitDialogOpen(dialogData))
});

const StuffContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Stuff);

DigitDialogStory.add(
    "DigitDialog",
    () => {
        return (
            <DigitProviders>
                <StuffContainer />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitDialogReadme,
            propTables: [DigitDialog],
            propTablesExclude: [DigitProviders, StuffContainer, Stuff]
        }
    }
);
