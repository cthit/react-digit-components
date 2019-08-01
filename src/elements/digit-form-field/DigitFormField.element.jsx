import { FastField, Field } from "formik";
import PropTypes from "prop-types";
import React, { Component } from "react";
import DigitCheckbox from "../digit-checkbox";
import DigitSwitch from "../digit-switch";

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
        const {
            name,
            component,
            componentProps,
            notFast,
            formatEvent,
            render
        } = this.props;

        var _formatEvent = formatEvent;

        if (
            _formatEvent == null &&
            (component === DigitCheckbox || component === DigitSwitch)
        ) {
            _formatEvent = e => e.target.checked;
        } else {
            _formatEvent = e => e.target.value;
        }

        const c = (error, errorMessage, field, componentProps) =>
            component != null
                ? React.createElement(component, {
                      error,
                      errorMessage,
                      ...field,
                      ...componentProps
                  })
                : render(error, errorMessage, field, componentProps);

        if (notFast) {
            return (
                <Field
                    name={name}
                    render={props => {
                        const { field, form } = props;
                        const error = form.touched[name] && form.errors[name];
                        field.onChange = e => {
                            form.setFieldValue(field.name, _formatEvent(e));
                        };

                        return c(error != null, error, field, componentProps);
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
                    name={name}
                    render={props => {
                        const { field, form } = props;
                        const error = form.touched[name] && form.errors[name];

                        field.onChange = e => {
                            form.setFieldValue(field.name, _formatEvent(e));
                        };

                        return c(error != null, error, field, componentProps);
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
    render: PropTypes.func,
    /** The component that the DigitFormField should wrap. Can be for example a
     * DigitTextField, DigitSwitch, DigitCheckbox or DigitSelect. Anything that is
     * input.
     */
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /** Props for the component. E.g. setting upperLabel in DigitTextField or
     * primary in DigitCheckbox.
     */
    componentProps: PropTypes.object,
    /** Turns the event from onChange to the actual data that the component uses */
    formatEvent: PropTypes.func
};

DigitFormField.defaultProps = {
    componentProps: {},
    component: () => null,
    name: ""
};

export default DigitFormField;
