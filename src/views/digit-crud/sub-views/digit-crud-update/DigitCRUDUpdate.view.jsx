import React, { useCallback, useContext, useEffect, useState } from "react";
import DigitEditData from "../../../../elements/digit-edit-data-card";
import DigitLoading from "../../../../elements/digit-loading";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";
import DeleteFAB from "../../elements/delete-fab";
import useDigitToast from "../../../../hooks/use-digit-toast";
import DigitCRUDContext from "../../../../contexts/DigitCRUDContext";

const DigitCRUDUpdate = ({
    readOneAction,
    updateAction,
    deleteAction,
    id,
    history,
    path,
    formComponentData,
    formValidationSchema,
    updateTitle,
    keysOrder,
    toastUpdateSuccessful,
    toastUpdateFailed,
    backButtonText,
    updateButtonText,
    deleteButtonText,
    dialogDeleteTitle,
    dialogDeleteDescription,
    dialogDeleteConfirm,
    dialogDeleteCancel,
    toastDeleteSuccessful,
    toastDeleteFailed,
    readOnePath,
    readAllPath,
    backFromUpdatePath,
    backFromDeletePath,
    deleteDialogFormComponentData,
    deleteDialogFormValidationSchema,
    deleteDialogFormInitialValues,
    deleteDialogFormKeysOrder,
    onUpdate,
    onDelete,
    useHistoryGoBackOnBack,
    updateSubtitle,
    canDelete,
    errorCodes
}) => {
    const [{ one, loading }] = useContext(DigitCRUDContext);
    const [statusRender, setStatusRender] = useState(-1);
    const [error, setError] = useState(null);
    const [read, setRead] = useState(true);

    const { on401, on404, on500, render401, render404, render500 } = errorCodes;

    const reset = useCallback(() => {
        setRead(true);
    }, [setRead]);

    const [queueToast] = useDigitToast();
    useEffect(() => {
        if (read) {
            readOneAction(id)
                .then(() => {
                    setStatusRender(-1);
                    setError(null);
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
                });
        }
        setRead(false);
        // Ignoring the different on* and render* since they would mean that
        // readOneAction would continuously be refreshed.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [readOneAction, id, setStatusRender, setError, error, setRead, read]);

    if (loading) {
        return (
            <Center>
                <DigitLoading loading />
            </Center>
        );
    }

    if (statusRender === 401) {
        return render401(error, reset);
    }

    if (statusRender === 404) {
        return render404(error, reset);
    }

    if (statusRender === 500) {
        return render500(error, reset);
    }

    if (Object.keys(one).length === 0) {
        return null;
    }

    return (
        <>
            <Center>
                <DigitEditData
                    centerFields
                    onSubmit={(values, actions) => {
                        const _old = one;
                        const _updated = values;
                        updateAction(id, _updated)
                            .then(response => {
                                readOneAction(id);
                                actions.setSubmitting(false);
                                queueToast({
                                    text: toastUpdateSuccessful(
                                        _updated,
                                        _old,
                                        response
                                    )
                                });
                                onUpdate(response);
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
                                    text: toastUpdateFailed(
                                        _updated,
                                        _old,
                                        error
                                    )
                                });
                            });
                    }}
                    keysOrder={keysOrder.filter(
                        key => formComponentData[key] != null
                    )}
                    keysComponentData={formComponentData}
                    validationSchema={formValidationSchema(one)}
                    isInitialValid={true}
                    extraButton={{
                        outlined: true,
                        text: backButtonText,
                        onClick: () =>
                            useHistoryGoBackOnBack ? history.goBack() : null
                    }}
                    extraButtonTo={
                        useHistoryGoBackOnBack
                            ? null
                            : backFromUpdatePath(one) == null
                            ? path + readOnePath.replace(":id", id)
                            : backFromUpdatePath(one)
                    }
                    initialValues={one}
                    submitText={updateButtonText(one)}
                    titleText={updateTitle(one)}
                    updateSubtitle={
                        updateSubtitle == null ? null : updateSubtitle(one)
                    }
                />
            </Center>
            {deleteAction != null && canDelete(one) && (
                <DeleteFAB
                    dialogDeleteCancel={dialogDeleteCancel}
                    dialogDeleteConfirm={dialogDeleteConfirm}
                    dialogDeleteTitle={dialogDeleteTitle}
                    dialogDeleteDescription={dialogDeleteDescription}
                    deleteButtonText={deleteButtonText}
                    toastDeleteFailed={toastDeleteFailed}
                    toastDeleteSuccessful={toastDeleteSuccessful}
                    path={path}
                    backFromDeletePath={
                        backFromDeletePath(one) == null
                            ? readAllPath
                            : backFromDeletePath(one)
                    }
                    deleteAction={deleteAction}
                    history={history}
                    one={one}
                    id={id}
                    deleteDialogFormValidationSchema={
                        deleteDialogFormValidationSchema
                    }
                    deleteDialogFormInitialValues={
                        deleteDialogFormInitialValues
                    }
                    deleteDialogFormComponentData={
                        deleteDialogFormComponentData
                    }
                    deleteDialogFormKeysOrder={deleteDialogFormKeysOrder}
                    onDelete={onDelete}
                    errorCodes={errorCodes}
                    setError={setError}
                    setStatusRender={setStatusRender}
                />
            )}
        </>
    );
};

export default DigitCRUDUpdate;
