import React from "react";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";
import DigitEditData from "../../../digit-edit-data-card";
import useDigitToast from "../../../../hooks/use-digit-toast";
import { useHistory } from "react-router-dom";
import useDigitCRUDStatus from "../../hooks/use-digit-crud-status";

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
    toastCreateSuccessfulGoToButton,
    backButtonText,
    createButtonText,
    readAllPath,
    backFromCreatePath,
    onCreate,
    useHistoryGoBackOnBack,
    createSubtitle,
    createProps,
    hasReadOne,
    readOnePath,
    idProp,
    statusHandlers,
    statusRenders
}) => {
    const [queueToast] = useDigitToast();
    const [statusHandler, statusRender] = useDigitCRUDStatus(
        statusHandlers,
        statusRenders
    );
    const history = useHistory();

    if (statusRender != null) {
        return statusRender();
    }

    return (
        <Center>
            <DigitEditData
                centerFields
                size={{
                    minWidth: "280px",
                    minHeight: "280px"
                }}
                onSubmit={(values, actions) => {
                    const _new = values;
                    createAction(_new)
                        .then(response => {
                            actions.resetForm();

                            if (
                                toastCreateSuccessfulGoToButton != null &&
                                hasReadOne
                            ) {
                                queueToast({
                                    text: toastCreateSuccessful(_new, response),
                                    actionHandler: () =>
                                        history.push(
                                            path +
                                                readOnePath.replace(
                                                    ":id",
                                                    response.data[idProp]
                                                )
                                        ),
                                    actionText: toastCreateSuccessfulGoToButton(
                                        _new,
                                        response
                                    )
                                });
                            } else {
                                queueToast({
                                    text: toastCreateSuccessful(_new, response)
                                });
                            }
                            onCreate(response);
                        })
                        .catch(error => {
                            statusHandler(
                                error.response != null
                                    ? error.response.status
                                    : -1,
                                error
                            );

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
                {...createProps}
            />
        </Center>
    );
};

export default DigitCRUDCreate;
