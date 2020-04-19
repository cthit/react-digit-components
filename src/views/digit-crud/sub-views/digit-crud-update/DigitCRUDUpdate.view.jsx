import React, { useContext, useEffect } from "react";
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
    clearAction,
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
    canDelete
}) => {
    const [{ one, loading }] = useContext(DigitCRUDContext);

    const [queueToast] = useDigitToast();
    useEffect(() => {
        readOneAction(id);
        return clearAction;
    }, [readOneAction, clearAction, id]);

    if (Object.keys(one).length === 0) {
        return null;
    }

    if (loading) {
        return (
            <Center>
                <DigitLoading loading />
            </Center>
        );
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
                />
            )}
        </>
    );
};

export default DigitCRUDUpdate;
