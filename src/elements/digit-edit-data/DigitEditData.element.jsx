import PropTypes from "prop-types";
import React, { createElement, useMemo } from "react";
import DigitButton from "../digit-button";
import DigitForm from "../../views/digit-form";
import {
    Column,
    Padding,
    Row
} from "../../styles/digit-layout/DigitLayout.styles";
import * as yup from "yup";
import useDigitFormField from "../../hooks/use-digit-form-field";

const DigitEditDataInner = ({
    keysOrder,
    keysComponentData,
    marginVertical = 8
}) => {
    return keysOrder.map(key => (
        <>
            <div style={{ marginBottom: marginVertical / 2 }} />
            <DigitEditDataField
                name={key}
                componentData={keysComponentData[key]}
            />
            <div style={{ marginBottom: marginVertical / 2 }} />
        </>
    ));
};

const DigitEditDataField = ({ name, componentData }) => {
    const field = useDigitFormField(name);
    const { component, componentProps } = componentData;

    return useMemo(
        () =>
            createElement(component, {
                ...componentProps,
                ...field,
                name
            }),
        [JSON.stringify(field), JSON.stringify(componentData)]
    );
};

const DigitEditData = ({
    initialValues,
    validationSchema,
    onSubmit,
    keysOrder,
    keysComponentData,
    marginVertical,
    hasButtons,
    renderButtons,
    formName,
    onValidSubmitChange
}) => {
    return (
        <DigitForm
            formName={formName}
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
            onValidSubmitChange={onValidSubmitChange}
            render={form => (
                <Column>
                    <DigitEditDataInner
                        marginVertical={marginVertical}
                        keysOrder={keysOrder}
                        keysComponentData={keysComponentData}
                    />
                    <Padding />
                    {hasButtons && <Row reverse>{renderButtons(form)}</Row>}
                </Column>
            )}
        />
    );
};

DigitEditData.displayName = "DigitEditData";
DigitEditData.propTypes = {
    initialValues: PropTypes.object,
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    keysOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
    keysComponentData: PropTypes.objectOf(
        PropTypes.shape({
            component: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
                .isRequired,
            componentProps: PropTypes.object,
            formatEvent: PropTypes.func,
            render: PropTypes.func
        })
    ).isRequired,
    titleText: PropTypes.string,
    submitText: PropTypes.string,
    marginVertical: PropTypes.string,
    /** Sets minWidth, maxWidth and width to absWidth */
    absWidth: PropTypes.string,
    /** Sets minHeight, maxHeight and height to absHeight */
    absHeight: PropTypes.string,
    /** minWidth of the card */
    minWidth: PropTypes.string,
    /** minHeight of the card */
    minHeight: PropTypes.string,
    /** maxWidth of the card */
    maxWidth: PropTypes.string,
    /** maxHeight of the card */
    maxHeight: PropTypes.string,
    /** width of the card */
    width: PropTypes.string,
    /** height of the card */
    height: PropTypes.string,
    /** If new data should be force */
    isInitialValid: PropTypes.bool
};

DigitEditData.defaultProps = {
    initialValues: {},
    validationSchema: yup.object(),
    titleText: "",
    submitText: "",
    marginVertical: "4px",
    absWidth: null,
    absHeight: null,
    minWidth: "300px",
    maxWidth: "300px",
    keysOrder: [],
    isInitialValid: false,
    hasButtons: false,
    renderButtons: form => (
        <DigitButton
            disabled={form.isSubmitting || !form.isValid}
            text={"Submit"}
            submit
            raised
            primary
        />
    )
};

export default DigitEditData;
