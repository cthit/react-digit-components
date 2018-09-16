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
  DigitToast,
  DigitProviders,
  DigitSwitch
} from "../components";

import { toastOpen } from "../components/views/digit-toast/DigitToast.view.action-creator";

import DigitToastReadme from "../components/views/digit-toast/readme.md";

const vertLabel = "vertical";
const vertOptions = ["primary", "secondary", "none"];
const vertDefaultValue = "none";

const horiLabel = "style";
const horiOptions = ["raised", "outline", "flat"];
const horiDefaultValue = "flat";

const DigitButtonStory = storiesOf("Views", module);

DigitButtonStory.addDecorator(withKnobs);

DigitButtonStory.add(
  "DigitToast",
  withReadme(DigitToastReadme, () => {
    const vert = select(vertLabel, vertOptions, vertDefaultValue);
    const hori = select(horiLabel, horiOptions, horiDefaultValue);

    return (
      <DigitProviders>
        <StuffContainer />
      </DigitProviders>
    );
  })
);

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

    <DigitToast />
  </div>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  toastOpen: toastData => dispatch(toastOpen(toastData))
});

const StuffContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stuff);
