import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import {
    Card,
    CardBody,
    CardButtons,
    CardTitle,
    Link
} from "../../styles/digit-design/DigitDesign.styles";
import DigitButton from "../digit-button";
import { Padding, Size } from "../../styles/digit-layout/DigitLayout.styles";
import * as yup from "yup";
import DigitEditData from "../digit-edit-data";

const DigitEditDataCard = ({
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
    const formName = useMemo(() => JSON.stringify(keysComponentData));
    // console.log(formName);
    const [formValues, setFormValues] = useState({
        isSubmitting: false,
        isValid: false
    });
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
            <Card
                minWidth={minWidth}
                maxWidth={maxWidth}
                minHeight={minHeight}
                maxHeight={maxHeight}
                absWidth={absWidth}
                absHeight={absHeight}
                width={width}
                height={height}
            >
                <CardTitle text={titleText} />
                <CardBody>
                    <DigitEditData
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        keysOrder={keysOrder}
                        keysComponentData={keysComponentData}
                        validationSchema={validationSchema}
                        marginVertical={marginVertical}
                        formName={formName}
                        onFormikChange={formik => {
                            setFormValues({
                                isSubmitting: formik.isSubmitting,
                                isValid: formik.isValid
                            });
                        }}
                    />
                </CardBody>
                <CardButtons reverseDirection>
                    <DigitButton
                        disabled={
                            formValues.isSubmitting || !formValues.isValid
                        } //props.validationSchema.isValidSync(props.initialValues)
                        submit
                        text={submitText}
                        raised
                        primary
                        form={formName}
                    />
                    <Padding />
                    {extraButton != null && (
                        <>
                            {extraButtonTo == null && (
                                <DigitButton {...extraButton} />
                            )}

                            {extraButtonTo != null && (
                                <Link to={extraButtonTo}>
                                    <DigitButton {...extraButton} />
                                </Link>
                            )}
                        </>
                    )}
                </CardButtons>
            </Card>
        </Size>
    );
};

DigitEditDataCard.displayName = "DigitEditDataCard";
DigitEditDataCard.propTypes = {
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

DigitEditDataCard.defaultProps = {
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

export default DigitEditDataCard;
