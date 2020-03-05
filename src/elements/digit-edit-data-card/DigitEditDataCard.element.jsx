import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import {
    Card,
    CardBody,
    CardButtons,
    CardTitle,
    CardSubTitle,
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
    subtitleText,
    submitText,
    marginVertical,
    extraButton,
    extraButtonTo,
    centerFields,
    flex,
    alignSelf,
    size,
    padding,
    margin
}) => {
    const formName = useMemo(() => JSON.stringify(keysComponentData).trim());
    const [submitValid, setSubmitValid] = useState(false);

    return (
        <Card
            flex={flex}
            alignSelf={alignSelf}
            size={size}
            padding={padding}
            margin={margin}
            hasSubTitle={subtitleText}
        >
            <CardTitle text={titleText} />
            {subtitleText && <CardSubTitle text={subtitleText} />}
            <CardBody>
                <DigitEditData
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                    keysOrder={keysOrder}
                    keysComponentData={keysComponentData}
                    validationSchema={validationSchema}
                    marginVertical={marginVertical}
                    formName={formName}
                    onValidSubmitChange={submitValid =>
                        setSubmitValid(submitValid)
                    }
                    centerFields={centerFields}
                />
            </CardBody>
            <CardButtons reverseDirection>
                <DigitButton
                    disabled={!submitValid}
                    submit
                    text={submitText}
                    raised
                    primary
                    form={formName}
                />
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
    /** If new data should be force */
    isInitialValid: PropTypes.bool
};

DigitEditDataCard.defaultProps = {
    initialValues: {},
    validationSchema: yup.object(),
    titleText: "",
    submitText: "",
    marginVertical: "4px",
    keysOrder: [],
    isInitialValid: false
};

export default DigitEditDataCard;
