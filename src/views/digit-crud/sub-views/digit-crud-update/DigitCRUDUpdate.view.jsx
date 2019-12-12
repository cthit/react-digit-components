import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DigitEditData from "../../../../elements/digit-edit-data";
import { digitToastOpen } from "../../../digit-toast/DigitToast.view.action-creator";
import DigitLoading from "../../../../elements/digit-loading";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";
import DeleteFAB from "../../elements/delete-fab";

const DigitCRUDUpdate = ({
    name,
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
    deleteDialogFormKeysOrder
}) => {
    const dispatch = useDispatch();
    const one = useSelector(state => state[name].one);
    const loading = useSelector(state => state[name].loading);
    useEffect(() => {
        readOneAction(id);
        return clearAction;
    }, []);

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
                    onSubmit={(values, actions) => {
                        const _old = one;
                        const _updated = values;
                        updateAction(id, _updated)
                            .then(response => {
                                readOneAction(id);
                                actions.setSubmitting(false);
                                dispatch(
                                    digitToastOpen({
                                        text: toastUpdateSuccessful(
                                            _updated,
                                            _old,
                                            response
                                        )
                                    })
                                );
                            })
                            .catch(error => {
                                actions.setSubmitting(false);
                                dispatch(
                                    digitToastOpen({
                                        text: toastUpdateFailed(
                                            _updated,
                                            _old,
                                            error
                                        )
                                    })
                                );
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
                        text: backButtonText
                    }}
                    extraButtonTo={
                        backFromUpdatePath == null
                            ? path + readOnePath.replace(":id", id)
                            : backFromUpdatePath
                    }
                    initialValues={one}
                    submitText={updateButtonText(one)}
                    titleText={updateTitle(one)}
                />
            </Center>
            {deleteAction != null && (
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
                        backFromDeletePath == null
                            ? readAllPath
                            : backFromDeletePath
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
                />
            )}
        </>
    );
};

export default DigitCRUDUpdate;
