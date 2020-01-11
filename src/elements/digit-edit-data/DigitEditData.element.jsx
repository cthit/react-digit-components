import PropTypes from "prop-types";
import React, { createElement, useMemo } from "react";
import {
    Card,
    CardBody,
    CardButtons,
    CardTitle,
    Link
} from "../../styles/digit-design/DigitDesign.styles";
import DigitButton from "../digit-button";
import DigitForm from "../../views/digit-form";
import { Size } from "../../styles/digit-layout/DigitLayout.styles";
import * as yup from "yup";
import useDigitFormField from "../../hooks/form/use-digit-form-field";

function isInitialValid(props) {
    if (!props.validationSchema) return true;
    return props.validationSchema.isValidSync(props.initialValues);
}

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
    titleText,
    submitText,
    marginVertical,
    absWidth,
    absHeight,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    width,
    height,
    extraButton,
    extraButtonTo
}) => {
    return (
        <Size
            minWidth={minWidth}
            maxWidth={maxWidth}
            minHeight={minHeight}
            maxHeight={maxHeight}
            absWidth={absWidth}
            absHeight={absHeight}
            width={width}
            height={height}
        >
            <DigitForm
                validationSchema={validationSchema}
                initialValues={initialValues}
                isInitialValid={isInitialValid}
                onSubmit={onSubmit}
                render={() => (
                    <>
                        {keysOrder.map(key => (
                            <DigitEditDataField
                                name={key}
                                componentData={keysComponentData[key]}
                            />
                        ))}
                        <DigitButton text={"Submit"} submit />
                    </>
                )}
            />
        </Size>
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
    isInitialValid: false
};

export default DigitEditData;
