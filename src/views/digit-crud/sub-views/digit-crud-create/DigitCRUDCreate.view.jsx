import React from "react";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";
import DigitEditData from "../../../../elements/digit-edit-data-card";
import useDigitToast from "../../../../hooks/use-digit-toast";

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
    createButtonText,
    readAllPath,
    backFromCreatePath,
    onCreate
}) => {
    const [queueToast] = useDigitToast();

    return (
        <Center>
            <DigitEditData
                onSubmit={(values, actions) => {
                    const _new = values;
                    createAction(_new)
                        .then(response => {
                            actions.resetForm();
                            queueToast({
                                text: toastCreateSuccessful(_new, response)
                            });
                            onCreate(response);
                        })
                        .catch(error => {
                            actions.setSubmitting(false);
                            queueToast({
                                text: toastCreateFailed(_new, error)
                            });
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
                extraButtonTo={
                    backFromCreatePath == null
                        ? path + readAllPath
                        : backFromCreatePath
                }
                initialValues={formInitialValues}
                submitText={createButtonText}
                titleText={createTitle}
            />
        </Center>
    );
};

export default DigitCRUDCreate;
