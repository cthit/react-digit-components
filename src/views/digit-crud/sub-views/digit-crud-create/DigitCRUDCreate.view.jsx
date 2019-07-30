import React from "react";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";
import DigitEditData from "../../../../elements/digit-edit-data";
import { digitToastOpen } from "../../../digit-toast/DigitToast.view.action-creator";
import { useDispatch } from "react-redux";

const DigitCRUDCreate = ({
    createAction,
    path,
    formComponentData,
    formValidationSchema,
    formInitialValues,
    keysOrder,
    createTitle,
    toastCreateSuccessful,
    toastCreateFailed,
    backButtonText,
    createButtonText
}) => {
    const dispatch = useDispatch();

    return (
        <Center>
            <DigitEditData
                onSubmit={(values, actions) => {
                    createAction(values)
                        .then(response => {
                            actions.resetForm();
                            dispatch(
                                digitToastOpen({
                                    text: toastCreateSuccessful(response)
                                })
                            );
                        })
                        .catch(error => {
                            actions.setSubmitting(false);
                            dispatch(
                                digitToastOpen({
                                    text: toastCreateFailed(error)
                                })
                            );
                        });
                }}
                keysOrder={keysOrder.filter(
                    key => formComponentData[key] != null
                )}
                keysComponentData={formComponentData}
                validationSchema={formValidationSchema}
                extraButton={{
                    outlined: true,
                    text: backButtonText
                }}
                extraButtonTo={path}
                initialValues={formInitialValues}
                submitText={createButtonText}
                titleText={createTitle}
            />
        </Center>
    );
};

DigitCRUDCreate.defaultProps = {
    toastCreateSuccessful: () => "Skapning lyckades",
    toastCreateFailed: () => "Skapning misslyckades",
    backButtonText: "Tillbaka",
    createButtonText: "Skapa"
};

export default DigitCRUDCreate;
