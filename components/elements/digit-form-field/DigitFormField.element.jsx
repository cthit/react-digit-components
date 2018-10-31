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
  /** A unique name for the form. This name is the key of
   * the values object in DigitForm.
   */
  name: PropTypes.string.isRequired,
  /** The component that the DigitFormField should wrap. Can be for example a
   * DigitTextField, DigitSwitch, DigitCheckbox or DigitSelect. Anything that is
   * input.
   */
  component: PropTypes.func.isRequired,
  /** Props for the component. E.g. setting upperLabel in DigitTextField or
   * primary in DigitCheckbox.
   */
  componentProps: PropTypes.object
};

DigitFormField.defaultProps = {
  componentProps = {}
};

export default DigitFormField;
