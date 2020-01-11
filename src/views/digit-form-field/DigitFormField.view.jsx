import PropTypes from "prop-types";
import React from "react";

const DigitFormField = () => {
    return null;
};

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
