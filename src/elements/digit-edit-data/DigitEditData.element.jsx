import PropTypes from "prop-types";
import React, { createElement, useMemo } from "react";
import DigitButton from "../digit-button";
import DigitForm from "../../views/digit-form";
import { Column, Row } from "../../styles/digit-layout/DigitLayout.styles";
import * as yup from "yup";
import useDigitFormField from "../../hooks/use-digit-form-field";
import useDigitFormFieldArray from "../../hooks/use-digit-form-field-array";

const DigitEditDataInner = ({
    keysOrder,
    keysComponentData,
    centerFields,
    marginVertical = 8
}) => {
    return keysOrder.map(key => (
        <React.Fragment key={key}>
            <div style={{ marginBottom: marginVertical }} />
            {keysComponentData[key].array && (
                <DigitEditDataFieldArray
                    name={key}
                    componentData={keysComponentData[key]}
                    alignSelfCenter={centerFields}
                />
            )}
            {!keysComponentData[key].array && (
                <DigitEditDataField
                    name={key}
                    componentData={keysComponentData[key]}
                    alignSelfCenter={centerFields}
                />
            )}
            <div style={{ marginBottom: marginVertical }} />
        </React.Fragment>
    ));
};

const DigitEditDataField = ({ name, componentData, alignSelfCenter }) => {
    const field = useDigitFormField(name);
    const { component, componentProps } = componentData;

    return useMemo(
        () =>
            createElement(component, {
                ...{
                    alignSelf: alignSelfCenter ? "center" : "auto",
                    ...componentProps
                },
                ...field,
                name
            }),
        [JSON.stringify(field), JSON.stringify(componentData), alignSelfCenter]
    );
};

const DigitEditDataFieldArray = ({ name, componentData, alignSelfCenter }) => {
    const field = useDigitFormFieldArray(name);
    const { component, componentProps } = componentData;

    return useMemo(
        () =>
            createElement(component, {
                ...{
                    alignSelf: alignSelfCenter ? "center" : "auto",
                    ...componentProps
                },
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
    onValidSubmitChange,
    centerFields
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
                        centerFields={centerFields}
                    />
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
    /** If new data should be force */
    isInitialValid: PropTypes.bool
};

DigitEditData.defaultProps = {
    initialValues: {},
    validationSchema: yup.object(),
    titleText: "",
    submitText: "",
    marginVertical: "4px",
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
