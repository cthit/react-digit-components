import React from "react";

import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";
import { connect } from "react-redux";

import * as yup from "yup";

import {
  DigitButton,
  DigitDesign,
  DigitFormField,
  DigitForm,
  DigitTextField,
  DigitDialog,
  DigitProviders,
  DigitTextArea
} from "../../components";

import { digitDialogOpen } from "../../components/views/digit-dialog/DigitDialog.view.action-creator";

import DigitDialogReadme from "../../components/views/digit-dialog/readme.md";

const DigitDialogStory = storiesOf("Views", module);

DigitDialogStory.addDecorator(withKnobs);

DigitDialogStory.add(
  "DigitDialog",
  withReadme(DigitDialogReadme, () => {
    return (
      <DigitProviders>
        <StuffContainer />
      </DigitProviders>
    );
  })
);

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
              componentProps={{ upperLabel: "Confirm button text" }}
            />

            <DigitFormField
              name="cancelButtonText"
              component={DigitTextField}
              componentProps={{ upperLabel: "Cancel button text" }}
            />
          </DigitDesign.CardBody>
          <DigitDesign.CardButtons>
            <DigitButton text="Show Dialog" submit raised primary />
          </DigitDesign.CardButtons>
        </DigitDesign.Card>
      )}
    />

    <DigitDialog />
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
