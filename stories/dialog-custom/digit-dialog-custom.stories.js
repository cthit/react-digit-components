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
    DigitIfElseRendering,
    DigitLoading,
    DigitProviders,
    DigitSelect,
    DigitSwitch,
    DigitTextArea,
    DigitTextField
} from "../../components";
import DigitDialogConnected from "../../components/views/digit-dialog";
import DigitDialog from "../../components/views/digit-dialog/DigitDialog.view";
import {
    digitDialogCustomOpen,
    digitDialogOpen
} from "../../components/views/digit-dialog/DigitDialog.view.action-creator";
import DigitDialogReadme from "../../components/views/digit-dialog/readme.md";
import centered from "@storybook/addon-centered/react";
import { Text } from "../../components/styles/digit-text/DigitText.styles";
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
                    renderButtons: () => (
                        <Text
                            text={
                                "Use digitDialogClosedConfirm and digitDialogClosedCancel from DigitDialogActions " +
                                "to implement your own dialog buttons row. But for now you can click beside the dialog"
                            }
                        />
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
