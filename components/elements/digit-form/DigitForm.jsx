import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";

const DigitForm = ({ initialValues, onSubmit, validationSchema, render }) => (
  <Formik
    validationSchema={validationSchema}
    initialValues={{ ...initialValues }}
    onSubmit={onSubmit}
    render={formData => <Form>{render(formData)}</Form>}
  />
);

DigitForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.object,
  render: PropTypes.func.isRequired
};

export default DigitForm;
