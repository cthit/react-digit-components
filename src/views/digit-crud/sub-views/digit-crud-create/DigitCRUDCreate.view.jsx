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
                    const _new = values;
                    createAction(_new)
                        .then(response => {
                            actions.resetForm();
                            dispatch(
                                digitToastOpen({
                                    text: toastCreateSuccessful(_new, response)
                                })
                            );
                        })
                        .catch(error => {
                            actions.setSubmitting(false);
                            dispatch(
                                digitToastOpen({
                                    text: toastCreateFailed(_new, error)
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
