import React from "react";
import PropTypes from "prop-types";
import { FieldArray } from "formik";

const DigitFormFieldArray = ({ name, render, component, componentProps }) => (
  <FieldArray
    name={name}
    render={props => {
      if (component != null) {
        return React.createElement(component, {
          ...componentProps,
          ...props
        });
      } else {
        return render({
          ...props
        });
      }
    }}
  />
);

DigitFormFieldArray.propTypes = {
  name: PropTypes.string.isRequired,
  render: PropTypes.func,
  component: PropTypes.element,
  componentProps: PropTypes.object
};

export default DigitFormFieldArray;
