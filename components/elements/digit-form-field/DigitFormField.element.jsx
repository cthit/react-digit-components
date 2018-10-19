import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

const DigitFormField = ({ name, component, componentProps }) => (
  <Field
    type="text"
    name={name}
    render={props => {
      const { field, form } = props;
      const error = form.touched[name] && form.errors[name];
      field.value = field.value == null ? "" : field.value;

      return React.createElement(component, {
        error: error != null,
        errorMessage: error,
        ...field,
        ...componentProps
      });
    }}
  />
);

DigitFormField.displayName = "DigitFormField";
DigitFormField.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  componentProps: PropTypes.object
};

export default DigitFormField;
