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
} from "../../src";
import DigitDialogConnected from "../../src/views/digit-dialog";
import DigitDialog from "../../src/views/digit-dialog/DigitDialog.view";
import { digitDialogOpen } from "../../src/views/digit-dialog/DigitDialog.view.action-creator";
import DigitDialogReadme from "../../src/views/digit-dialog/readme.md";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const Stuff = ({ digitDialogOpen }) => (
    <>
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
    </>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    digitDialogOpen: dialogData => dispatch(digitDialogOpen(dialogData))
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
        "DigitDialog",
        () => {
            return <StuffContainer />;
        },
        {
            info: {
                text: DigitDialogReadme,
                propTables: [DigitDialog],
                propTablesExclude: [DigitProviders, StuffContainer, Stuff],
                source: false,
                header: false
            }
        }
    );
