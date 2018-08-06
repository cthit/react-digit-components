import React from "react";
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

export default DigitFormFieldArray;
