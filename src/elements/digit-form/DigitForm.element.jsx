import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const FullWidthForm = styled(Form)`
    width: 100%;
`;

const DigitForm = ({
    initialValues,
    onSubmit,
    validationSchema,
    render,
    isInitialValid,
    name
}) => (
    <Formik
        validateOnMount={isInitialValid}
        validationSchema={validationSchema}
        initialValues={{ ...initialValues }}
        onSubmit={onSubmit}
        render={formData => (
            <FullWidthForm id={name}>{render(formData)}</FullWidthForm>
        )}
    />
);

DigitForm.displayName = "DigitForm";
DigitForm.propTypes = {
    /** The starting value of the form. */
    initialValues: PropTypes.object,
    /** Called when submit has happend. The first argument is the
     * values of the form. The second is a set of useful functions to call, e.g. resetForm().
     */
    onSubmit: PropTypes.func.isRequired,
    /** See yup (https://github.com/jquense/yup). It's dead simple.
     * See example in digit-form/readme.md for examples.
     */
    validationSchema: PropTypes.object,
    /** A render prop. See https://jaredpalmer.com/formik/docs/api/formik#render-props-formikprops-values-reactnode.
     * See examples in digit-form/readme.md for examples.
     */
    render: PropTypes.func.isRequired
};

DigitForm.defaultProps = {
    initialValues: {},
    validationSchema: {},
    onSubmit: () => {},
    render: () => null
};

export default DigitForm;
