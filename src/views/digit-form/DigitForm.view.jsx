import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import DigitFormContext from "../../contexts/DigitFormContext";

const FullWidthForm = styled.form`
    width: 100%;
`;

const yupToFormErrors = yupError => {
    const errors = {};
    if (yupError.inner) {
        for (var i = 0; i < yupError.inner.length; i++) {
            const fieldError = yupError.inner[i];
            errors[fieldError.path] = fieldError.message;
        }
    }
    return errors;
};

const DigitForm = ({
    initialValues,
    onSubmit,
    validationSchema,
    render,
    isInitialValid,
    name
}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const handleTouched = useCallback(
        (value, fieldName) =>
            setTouched(_touched => {
                const newTouched = { ..._touched };
                newTouched[fieldName] = value;
                return newTouched;
            }),
        []
    );
    const handleChange = useCallback(
        (value, fieldName) =>
            setValues(_values => {
                const newValues = { ..._values };
                newValues[fieldName] = value;
                return newValues;
            }),
        []
    );
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(values);
    };
    const handleReset = event => {};

    useEffect(() => {
        runValidationSchema(values)
            .then(res => {
                setErrors(yupToFormErrors(res));
            })
            .catch(err => {
                console.log(err);
            });
    }, [validationSchema, JSON.stringify(values)]);

    const runValidationSchema = React.useCallback(
        values => {
            return new Promise((resolve, reject) => {
                validationSchema
                    .validate(values, {
                        abortEarly: false
                    })
                    .then(
                        () => {
                            resolve({});
                        },
                        err => {
                            if (err.name === "ValidationError") {
                                resolve(err);
                            } else {
                                reject(err);
                            }
                        }
                    );
            });
        },
        [validationSchema]
    );

    return (
        <DigitFormContext.Provider
            value={{
                values,
                errors,
                touched,
                handleChange,
                handleTouched
            }}
        >
            <FullWidthForm
                onReset={handleReset}
                onSubmit={handleSubmit}
                action={"#"}
            >
                {render({ values })}
            </FullWidthForm>
        </DigitFormContext.Provider>
    );
};

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
