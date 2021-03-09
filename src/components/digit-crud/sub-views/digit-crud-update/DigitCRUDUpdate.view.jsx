import React, { useContext, useEffect } from "react";
import DigitEditDataCard from "../../../digit-edit-data-card";
import DigitLoading from "../../../digit-loading";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";
import DeleteFAB from "../../elements/delete-fab";
import useDigitToast from "../../../../hooks/use-digit-toast";
import DigitCRUDContext from "../../../../contexts/DigitCRUDContext";
import { useHistory } from "react-router-dom";
import useDigitCRUDStatus from "../../hooks/use-digit-crud-status";

const DigitCRUDUpdate = ({
    readOneAction,
    updateAction,
    deleteAction,
    id,
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
    updateProps,
    statusHandlers,
    statusRenders
}) => {
    const [{ one, loading }] = useContext(DigitCRUDContext);
    const history = useHistory();
    const [
        statusHandler,
        statusRender,
        reset,
        read,
        setRead
    ] = useDigitCRUDStatus(statusHandlers, statusRenders);

    const [queueToast] = useDigitToast();
    useEffect(() => {
        if (read) {
            readOneAction(id)
                .then(() => {
                    reset();
                })
                .catch(error => {
                    statusHandler(
                        error.response != null ? error.response.status : -1,
                        error
                    );
                });
        }
        setRead(false);
    }, [readOneAction, id, read]);

    if (read || loading) {
        return (
            <Center size={{ height: "200px" }}>
                <DigitLoading loading />
            </Center>
        );
    }

    if (statusRender != null) {
        return statusRender();
    }

    if (Object.keys(one).length === 0) {
        return null;
    }

    return (
        <>
            <Center>
                <DigitEditDataCard
                    centerFields
                    onSubmit={(values, actions) => {
                        const _old = one;
                        const _updated = values;
                        updateAction(id, _updated)
                            .then(response => {
                                actions.setSubmitting(false);
                                queueToast({
                                    text: toastUpdateSuccessful(
                                        _updated,
                                        _old,
                                        response
                                    )
                                });
                                onUpdate(response);
                                useHistoryGoBackOnBack
                                    ? history.goBack()
                                    : history.push(
                                          backFromUpdatePath(one) == null
                                              ? path +
                                                    readOnePath.replace(
                                                        ":id",
                                                        id
                                                    )
                                              : backFromUpdatePath(one)
                                      );
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
                    margin={
                        deleteAction != null && canDelete(one)
                            ? { bottom: "calc(56px + 16px)" }
                            : {}
                    }
                    {...updateProps}
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
                    statusHandler={statusHandler}
                />
            )}
        </>
    );
};

export default DigitCRUDUpdate;
