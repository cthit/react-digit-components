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
    marginVertical = "8px"
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
    const { component, componentProps = {} } = componentData;

    const check = JSON.stringify(field) + JSON.stringify(componentProps);

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
        // Ignoring warning since JSON.stringify is used instead of comparing the reference.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [check, component, name, alignSelfCenter]
    );
};

const DigitEditDataFieldArray = ({ name, componentData, alignSelfCenter }) => {
    const field = useDigitFormFieldArray(
        name,
        componentData.formFieldArrayOptions
    );
    const { component, componentProps } = componentData;

    const check = JSON.stringify(field) + JSON.stringify(componentData);

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
        // Ignoring warning since JSON.stringify is used instead of comparing the reference.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [check, component, name, alignSelfCenter]
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
    centerFields,
    size,
    justifySelf,
    alignSelf,
    gridColumn,
    gridRow
}) => {
    return (
        <DigitForm
            formName={formName}
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
            onValidSubmitChange={onValidSubmitChange}
            render={form => (
                <Column
                    alignSelf={alignSelf}
                    justifySelf={justifySelf}
                    size={size}
                    gridRow={gridRow}
                    gridColumn={gridColumn}
                >
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
            render: PropTypes.func,
            array: PropTypes.bool,
            formFieldArrayOptions: PropTypes.object
        })
    ).isRequired,
    titleText: PropTypes.string,
    submitText: PropTypes.string,
    marginVertical: PropTypes.string,
    /** If new data should be force */
    isInitialValid: PropTypes.bool,
    centerFields: PropTypes.bool,
    /** Controls grid-column-start and grid-column-end */
    gridColumn: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    }),
    /** Controls grid-row-start and grid-row-end */
    gridRow: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    })
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
