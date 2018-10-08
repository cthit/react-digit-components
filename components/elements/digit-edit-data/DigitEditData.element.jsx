import React from "react";
import PropTypes from "prop-types";
import DigitForm from "../digit-form";
import {
  Card,
  CardTitle,
  CardButtons,
  CardBody,
  CardSubTitle
} from "../../styles/digit-design/DigitDesign.styles";
import DigitFormField from "../digit-form-field";
import DigitFormFieldArray from "../digit-form-field-array";
import DigitButton from "../digit-button";
import { DigitIfElseRendering } from "../..";
const DigitEditData = ({
  initialValues,
  validationSchema,
  onSubmit,
  keysOrder,
  keysComponentData,
  titleText,
  submitText
}) => (
  <DigitIfElseRendering
    test={initialValues != null}
    ifRender={() => (
      <DigitForm
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ isSubmitting, isValid }) => (
          <Card minWidth="300px" maxWidth="600px">
            <CardTitle text={titleText} />
            <CardBody>
              {keysOrder.map(key => {
                const keyComponentData = keysComponentData[key];
                if (keyComponentData.array == null || !keyComponentData.array) {
                  return (
                    <DigitFormField
                      key={key}
                      name={key}
                      component={keyComponentData.component}
                      componentProps={keyComponentData.componentProps}
                    />
                  );
                } else {
                  return (
                    <DigitFormFieldArray
                      key={key}
                      name={key}
                      component={keyComponentData.component}
                      componentProps={keyComponentData.componentProps}
                    />
                  );
                }
              })}
            </CardBody>
            <CardButtons reverseDirection>
              <DigitButton
                disabled={isSubmitting || !isValid}
                submit
                text={submitText}
                raised
                primary
              />
            </CardButtons>
          </Card>
        )}
      />
    )}
  />
);

DigitEditData.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  keysOrder: PropTypes.arrayOf(PropTypes.string),
  keysComponentData: PropTypes.shape({
    component: PropTypes.element.isRequired,
    componentKeys: PropTypes.object
  }),
  titleText: PropTypes.string,
  submitText: PropTypes.string
};

initialValues,
  validationSchema,
  onSubmit,
  keysOrder,
  keysComponentData,
  titleText,
  submitText;

export default DigitEditData;
