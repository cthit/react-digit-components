import { FieldArray } from "formik";
import PropTypes from "prop-types";
import React from "react";

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

DigitFormFieldArray.displayName = "DigitFormFieldArray";
DigitFormFieldArray.propTypes = {
    /** A unique name for the form. This name is the key of
     * the values object in DigitForm.
     */
    name: PropTypes.string.isRequired,
    /** A render prop to render the list. See https://jaredpalmer.com/formik/docs/api/fieldarray#render-arrayhelpers-arrayhelpers-reactreactnode.
     * Also see digit-form-field-array/readme.md for examples.
     */
    render: PropTypes.func,
    /** See https://jaredpalmer.com/formik/docs/api/fieldarray#component-reactreactnode.
     *  Has precedence over the render prop. Also see example in
     * digit-form-field-array/readme.md for examples.
     */
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /** Props for the component. E.g. setting upperLabel in DigitTextField or
     * primary in DigitCheckbox.
     */
    componentProps: PropTypes.object
};

DigitFormFieldArray.defaultProps = {
    componentProps: {},
    component: null,
    render: () => null
};

export default DigitFormFieldArray;
