import React from "react";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";
import DigitEditData from "../../../../elements/digit-edit-data-card";
import useDigitToast from "../../../../hooks/use-digit-toast";
import { useHistory } from "react-router";

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
    onCreate,
    useHistoryGoBackOnBack,
    createSubtitle
}) => {
    const [queueToast] = useDigitToast();
    const history = useHistory();

    return (
        <Center>
            <DigitEditData
                size={{
                    minWidth: "280px",
                    minHeight: "280px"
                }}
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
                    text: backButtonText,
                    onClick: () =>
                        useHistoryGoBackOnBack ? history.goBack() : null
                }}
                extraButtonTo={
                    useHistoryGoBackOnBack
                        ? null
                        : backFromCreatePath() == null
                        ? path + readAllPath
                        : backFromCreatePath()
                }
                initialValues={formInitialValues}
                submitText={createButtonText}
                titleText={createTitle}
                subtitleText={createSubtitle}
            />
        </Center>
    );
};

export default DigitCRUDCreate;
