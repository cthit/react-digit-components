import { FastField, Field } from "formik";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    DigitAutocompleteSelectSingle,
    DigitAutocompleteSelectMultiple
} from "../..";

class DigitFormField extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate(prevProps) {
        if (
            !this.props.notFast &&
            JSON.stringify(this.props) !== JSON.stringify(prevProps)
        ) {
            this.setState({
                update: true
            });
        }
    }

    _testFormikValues = (newValues, oldValues, name) => () =>
        JSON.stringify(newValues[name]) !== JSON.stringify(oldValues[name]);

    _testFormikErrors = (newErrors, oldErrors, name) => () =>
        JSON.stringify(newErrors[name]) !== JSON.stringify(oldErrors[name]);

    _testFormikTouched = (newTouched, oldTouched, name) => () =>
        JSON.stringify(newTouched[name]) !== JSON.stringify(oldTouched[name]);

    _testFormikPropsLength = (newFormikProps, oldFormikProps) => () =>
        Object.keys(newFormikProps).length !==
        Object.keys(oldFormikProps).length;

    _testFormikIsSubmitting = (newIsSubmitting, oldIsSubmitting) => () =>
        newIsSubmitting !== oldIsSubmitting;

    shouldUpdate(newFormikProps, oldFormikProps) {
        const { name } = this.props;

        const tests = [
            this._testFormikValues(
                newFormikProps.values,
                oldFormikProps.values,
                name
            ),
            this._testFormikErrors(
                newFormikProps.errors,
                oldFormikProps.errors,
                name
            ),
            this._testFormikTouched(
                newFormikProps.touched,
                oldFormikProps.touched,
                name
            ),
            this._testFormikPropsLength(newFormikProps, oldFormikProps),
            this._testFormikIsSubmitting(
                newFormikProps.isSubmitting,
                oldFormikProps.isSubmitting
            )
        ];
        let shouldUpdate = this.state.update;
        let i = 0;
        for (; i < tests.length; i++) {
            if (shouldUpdate) {
                break;
            }
            shouldUpdate = shouldUpdate || tests[i]();
        }

        if (shouldUpdate) {
            this.setState(prevState => ({
                update: false
            }));
        }
        return shouldUpdate;
    }

    render() {
        const { name, component, componentProps, notFast } = this.props;

        var customOnChange = null;

        if (
            component === DigitAutocompleteSelectSingle ||
            component === DigitAutocompleteSelectMultiple
        ) {
            customOnChange = form => value => {
                form.setFieldValue(name, value);
            };
        }

        if (notFast) {
            return (
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
        } else {
            return (
                <FastField
                    shouldUpdate={(newFormikProps, oldFormikProps) => {
                        newFormikProps = newFormikProps.formik;
                        oldFormikProps = oldFormikProps.formik;

                        return this.shouldUpdate(
                            newFormikProps,
                            oldFormikProps
                        );
                    }}
                    type="text"
                    name={name}
                    render={props => {
                        const { field, form } = props;
                        const error = form.touched[name] && form.errors[name];
                        field.value = field.value == null ? "" : field.value;

                        if (customOnChange != null) {
                            field.onChange = customOnChange(form);
                        }

                        return React.createElement(component, {
                            error: error != null,
                            errorMessage: error,
                            ...field,
                            ...componentProps
                        });
                    }}
                />
            );
        }
    }
}

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
    componentProps: {},
    component: () => null,
    name: ""
};

export default DigitFormField;
