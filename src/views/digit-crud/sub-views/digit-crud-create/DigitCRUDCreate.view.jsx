import React, { useCallback, useState } from "react";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";
import DigitEditData from "../../../../elements/digit-edit-data-card";
import useDigitToast from "../../../../hooks/use-digit-toast";
import { useHistory } from "react-router-dom";

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
    errorCodes,
    createProps,
    hasReadOne,
    readOnePath,
    idProp
}) => {
    const [queueToast] = useDigitToast();
    const [statusRender, setStatusRender] = useState(-1);
    const [error, setError] = useState(null);
    const history = useHistory();

    const reset = useCallback(() => {
        setStatusRender(-1);
        setError(null);
    }, [setStatusRender, setError]);

    const { on401, on404, on500, render401, render404, render500 } = errorCodes;

    if (statusRender === 401) {
        return render401(error, reset);
    }

    if (statusRender === 404) {
        return render404(error, reset);
    }

    if (statusRender === 500) {
        return render500(error, reset);
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
                            var status = -1;
                            if (error.response != null) {
                                status = error.response.status;
                            }

                            if (status === 401) {
                                on401(error);

                                if (render401 != null) {
                                    setStatusRender(401);
                                }
                            }

                            if (status === 404) {
                                on404(error);

                                if (render404 != null) {
                                    setStatusRender(404);
                                }
                            }

                            if (status === 500) {
                                on500(error);

                                if (render500 != null) {
                                    setStatusRender(500);
                                }
                            }

                            setError(error);
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
