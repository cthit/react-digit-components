import PropTypes from "prop-types";
import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardButtons,
    CardTitle,
    CardSubtitle,
    Link,
    CardHeader
} from "../../styles/digit-design/DigitDesign.styles";
import DigitButton from "../digit-button";
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
    justifySelf,
    size,
    padding,
    margin,
    gridColumn,
    gridRow,
    cardProps,
    cardBodyProps
}) => {
    const formName = JSON.stringify(keysComponentData);
    const [submitValid, setSubmitValid] = useState(false);

    return (
        <Card
            flex={flex}
            alignSelf={alignSelf}
            justifySelf={justifySelf}
            size={size}
            padding={padding}
            margin={margin}
            gridColumn={gridColumn}
            gridRow={gridRow}
            {...cardProps}
        >
            <CardHeader hasSubtitle={subtitleText != null}>
                <CardTitle text={titleText} />
                {subtitleText && <CardSubtitle text={subtitleText} />}
            </CardHeader>
            <CardBody {...cardBodyProps}>
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
            <CardButtons reverseDirection leftRight={extraButton != null}>
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
    /** Controls the flex property for the most outer element in this component.*/
    flex: PropTypes.string,
    /** Controls the alignSelf property for the most outer element in this component.*/
    alignSelf: PropTypes.oneOf([
        "auto",
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "baseline",
        "initial",
        "inherit"
    ]),
    /** Controls the justifySelf property for the most outer element in this component. */
    justifySelf: PropTypes.oneOf([
        "enter",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "left",
        "right",
        "baseline",
        "inherit",
        "initial"
    ]),
    /** Controls the size for the most outer element in this component. You can set minWidth/Height, maxWidth/Height
     * and width/height via an object
     */
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        minWidth: PropTypes.string,
        minHeight: PropTypes.string,
        maxWidth: PropTypes.string,
        maxHeight: PropTypes.string
    }),
    /** Padding property for the most outer element in this component.
     * It can either be a string, using the padding shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
    /** Margin property for the most outer element in this component.
     * It can either be a string, using the margin shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
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
    }),
    /** Options to update <DigitDesign.Card /> */
    cardProps: PropTypes.object,
    /** Options to update <DigitDesign.CardBody /> */
    cardBodyProps: PropTypes.object,
    /** An extra button that has the same props as DigitButton */
    extraButton: PropTypes.object,
    /** If set, then the extra button will be used as a link */
    extraButtonTo: PropTypes.string
};

DigitEditDataCard.defaultProps = {
    initialValues: {},
    validationSchema: yup.object(),
    titleText: "",
    submitText: "",
    marginVertical: "4px",
    keysOrder: [],
    isInitialValid: false,
    centerFields: true
};

export default DigitEditDataCard;
