import React, { useCallback, useEffect, useState } from "react";
import DigitFAB from "../../../../elements/digit-fab";
import Delete from "@material-ui/icons/Delete";
import { DownRightPosition } from "../../../../styles/digit-layout/DigitLayout.styles";
import DigitButton from "../../../../elements/digit-button";
import DialogContentText from "@material-ui/core/DialogContentText";
import useDigitToast from "../../../../hooks/use-digit-toast";
import useDigitCustomDialog from "../../../../hooks/use-digit-custom-dialog";
import DigitEditData from "../../../../elements/digit-edit-data";
import useDigitDialog from "../../../../hooks/use-digit-dialog";

const DeleteDialogMain = ({
    dialogDeleteDescription,
    onSubmit,
    deleteDialogFormInitialValues,
    deleteDialogFormValidationSchema,
    onValidSubmitChange,
    deleteDialogFormComponentData,
    deleteDialogFormKeysOrder,
    one
}) => (
    <>
        <DialogContentText id="alert-dialog-description">
            {dialogDeleteDescription(one)}
        </DialogContentText>
        <DigitEditData
            onSubmit={onSubmit}
            formName={"deleteDialogCRUD"}
            initialValues={deleteDialogFormInitialValues}
            validationSchema={deleteDialogFormValidationSchema(one)}
            onValidSubmitChange={onValidSubmitChange}
            keysComponentData={deleteDialogFormComponentData}
            keysOrder={deleteDialogFormKeysOrder}
        />
    </>
);

const DeleteDialogButtons = ({
    confirm,
    cancel,
    dialogDeleteCancel,
    closeCustomDialog,
    dialogDeleteConfirm,
    formValid,
    one
}) => (
    <>
        <DigitButton
            text={dialogDeleteCancel(one)}
            onClick={() => {
                cancel();
                closeCustomDialog();
            }}
        />
        <DigitButton
            text={dialogDeleteConfirm(one)}
            submit
            raised
            primary
            disabled={!formValid}
            form={"deleteDialogCRUD"}
            onClick={() => {
                confirm();
            }}
        />
    </>
);

const DeleteFAB = ({
    deleteButtonText,
    dialogDeleteTitle,
    dialogDeleteDescription,
    dialogDeleteCancel,
    dialogDeleteConfirm,
    deleteAction,
    toastDeleteSuccessful,
    history,
    path,
    backFromDeletePath,
    toastDeleteFailed,
    one,
    id,
    deleteDialogFormComponentData,
    deleteDialogFormValidationSchema,
    deleteDialogFormInitialValues,
    deleteDialogFormKeysOrder,
    onDelete
}) => {
    const [formValid, setFormValid] = useState(false);
    const [queueToast] = useDigitToast();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [
        openCustomDialog,
        closeCustomDialog,
        updateCustomDialog
    ] = useDigitCustomDialog();
    const onDeleteInternal = form =>
        deleteAction(id, form)
            .then(response => {
                queueToast({
                    text: toastDeleteSuccessful(one, response)
                });
                closeCustomDialog();
                history.push(path + backFromDeletePath);
                onDelete(response);
            })
            .catch(error => {
                queueToast({
                    text: toastDeleteFailed(one, error)
                });
            });
    const [openDialog] = useDigitDialog({
        title: dialogDeleteTitle(one),
        description: dialogDeleteDescription(one),
        cancelButtonText: dialogDeleteCancel(one),
        confirmButtonText: dialogDeleteConfirm(one),
        onCancel: () => {},
        onClose: () => {
            setDialogOpen(false);
        },
        onConfirm: onDeleteInternal
    });

    const renderButtons = (confirm, cancel) => (
        <DeleteDialogButtons
            dialogDeleteConfirm={dialogDeleteConfirm}
            dialogDeleteCancel={dialogDeleteCancel}
            cancel={cancel}
            confirm={confirm}
            closeCustomDialog={closeCustomDialog}
            formValid={formValid}
            one={one}
        />
    );

    useEffect(() => {
        if (dialogOpen) {
            updateCustomDialog({
                renderButtons
            });
        }
    }, [formValid, dialogOpen]);

    return (
        <DownRightPosition>
            <DigitFAB
                text={deleteButtonText(one)}
                icon={Delete}
                onClick={() => {
                    if (deleteDialogFormComponentData != null) {
                        setDialogOpen(true);
                        openCustomDialog({
                            renderMain: () => (
                                <DeleteDialogMain
                                    onSubmit={values =>
                                        onDeleteInternal(values)
                                    }
                                    onValidSubmitChange={valid =>
                                        setFormValid(valid)
                                    }
                                    dialogDeleteDescription={
                                        dialogDeleteDescription
                                    }
                                    deleteDialogFormInitialValues={
                                        deleteDialogFormInitialValues
                                    }
                                    deleteDialogFormValidationSchema={
                                        deleteDialogFormValidationSchema
                                    }
                                    deleteDialogFormComponentData={
                                        deleteDialogFormComponentData
                                    }
                                    deleteDialogFormKeysOrder={
                                        deleteDialogFormKeysOrder
                                    }
                                    one={one}
                                />
                            ),
                            renderButtons,
                            title: dialogDeleteTitle(one),
                            preventDefaultClose: true
                        });
                    } else {
                        openDialog();
                    }
                }}
            />
        </DownRightPosition>
    );
};

export default DeleteFAB;
