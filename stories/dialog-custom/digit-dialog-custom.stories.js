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
    DigitLoading,
    DigitProviders,
    DigitSelect,
    DigitSwitch,
    DigitTextField
} from "../../src";
import DigitDialogConnected from "../../src/views/digit-dialog";
import DigitDialog from "../../src/views/digit-dialog/DigitDialog.view";
import { digitDialogCustomOpen } from "../../src/views/digit-dialog/DigitDialog.view.action-creator";
import DigitDialogReadme from "../../src/views/digit-dialog/readme.md";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const Stuff = ({ digitDialogCustomOpen }) => (
    <div>
        <DigitForm
            onSubmit={values => {
                digitDialogCustomOpen({
                    title: values.title,
                    renderMain: () => (
                        <>
                            {values.type === "DigitLoading" ? (
                                <DigitLoading loading={true} />
                            ) : null}
                            {values.type === "DigitSwitch" ? (
                                <DigitSwitch />
                            ) : null}
                        </>
                    ),
                    renderButtons: (confirm, cancel) => (
                        <>
                            <DigitButton text={"Confirm"} onClick={confirm} />
                            <DigitButton text={"cancel"} onClick={cancel} />
                        </>
                    ),
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
                type: "DigitLoading"
            }}
            validationSchema={yup.object().shape({
                title: yup.string().required(),
                type: yup.string().required()
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
                            component={DigitSelect}
                            name={"type"}
                            componentProps={{
                                valueToTextMap: {
                                    DigitLoading: "DigitLoading",
                                    DigitSwitch: "DigitSwitch"
                                }
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
    digitDialogCustomOpen: dialogData =>
        dispatch(digitDialogCustomOpen(dialogData))
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
        "DigitDialogCustom",
        () => {
            return <StuffContainer />;
        },
        {
            info: {
                text: DigitDialogReadme,
                propTables: [DigitDialog],
                propTablesExclude: [DigitProviders, StuffContainer, Stuff],
                header: false,
                source: false
            }
        }
    );
