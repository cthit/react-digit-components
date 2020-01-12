import PropTypes from "prop-types";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import DigitFormContext from "../../contexts/DigitFormContext";

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
    formName,
    forceChange,
    onValidSubmitChange
}) => {
    const [isSubmitting, setSubmitting] = useState(false);
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

    const handleReset = useCallback(() => {
        resetForm();
    }, []);

    const resetForm = useCallback(() => {
        setSubmitting(false);
        setValues(initialValues);
        setTouched({});
    }, []);

    const runValidationSchema = useCallback(
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

    useEffect(() => {
        runValidationSchema(values)
            .then(res => {
                setErrors(yupToFormErrors(res));
            })
            .catch(err => {
                console.log(err);
            });
    }, [validationSchema, JSON.stringify(values)]);

    const isValid = useMemo(() => Object.keys(errors).length === 0, [
        Object.keys(errors).length
    ]);

    const form = {
        values,
        errors,
        touched,
        handleChange,
        handleTouched,
        isValid,
        isSubmitting
    };

    const actions = {
        setSubmitting,
        resetForm
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(values, actions);
    };

    useEffect(() => {
        if (onValidSubmitChange != null) {
            onValidSubmitChange(!isSubmitting && isValid);
        }
    }, [isValid, isSubmitting]);

    //todo implement forceChange

    return (
        <DigitFormContext.Provider value={form}>
            <form
                id={formName}
                onReset={handleReset}
                onSubmit={handleSubmit}
                action={"#"}
            >
                {render(form)}
            </form>
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
    render: PropTypes.func.isRequired,
    /**
     * A unique name for the form
     */
    name: PropTypes.string
};

DigitForm.defaultProps = {
    initialValues: {},
    validationSchema: {},
    onSubmit: () => {},
    render: () => null
};

export default DigitForm;
