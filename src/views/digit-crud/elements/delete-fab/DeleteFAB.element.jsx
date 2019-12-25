import React, { useCallback, useEffect, useState } from "react";
import DigitFAB from "../../../../elements/digit-fab";
import Delete from "@material-ui/icons/Delete";
import {
    digitDialogClosedConfirm,
    digitDialogCustomOpen,
    digitDialogOpen
} from "../../../digit-dialog/DigitDialog.view.action-creator";
import { digitToastOpen } from "../../../digit-toast/DigitToast.view.action-creator";
import {
    Column,
    DownRightPosition
} from "../../../../styles/digit-layout/DigitLayout.styles";
import { useDispatch } from "react-redux";
import DigitButton from "../../../../elements/digit-button";
import DialogContentText from "@material-ui/core/DialogContentText";
import DigitForm from "../../../../views/digit-form";
import DigitFormField from "../../../../views/digit-form-field";
import DigitFormFieldArray from "../../../../views/digit-form-field-array";

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
    deleteDialogFormKeysOrder
}) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({});
    const [confirmed, setConfirmed] = useState(false);
    const onDelete = useCallback(
        form => {
            return deleteAction(id, form)
                .then(response => {
                    dispatch(
                        digitToastOpen({
                            text: toastDeleteSuccessful(one, response)
                        })
                    );
                    dispatch(digitDialogClosedConfirm());
                    history.push(path + backFromDeletePath);
                })
                .catch(error => {
                    dispatch(
                        digitToastOpen({
                            text: toastDeleteFailed(one, error)
                        })
                    );
                });
        },
        [
            backFromDeletePath,
            deleteAction,
            dispatch,
            history,
            id,
            one,
            path,
            toastDeleteFailed,
            toastDeleteSuccessful
        ]
    );

    useEffect(() => {
        if (confirmed && JSON.stringify(form) !== "{}") {
            onDelete(form);
            setConfirmed(false);
        }
    }, [onDelete, form, confirmed]);

    return (
        <DownRightPosition>
            <DigitFAB
                text={deleteButtonText(one)}
                icon={Delete}
                onClick={() => {
                    if (deleteDialogFormComponentData != null) {
                        dispatch(
                            digitDialogCustomOpen({
                                renderMain: () => (
                                    <>
                                        <DialogContentText id="alert-dialog-description">
                                            {dialogDeleteDescription(one)}
                                        </DialogContentText>
                                        <DigitForm
                                            validationSchema={deleteDialogFormValidationSchema(
                                                one
                                            )}
                                            initialValues={
                                                deleteDialogFormInitialValues
                                            }
                                            onSubmit={values => {
                                                setForm(values);
                                            }}
                                            name={"deleteDialogCRUD"}
                                            render={() => (
                                                <Column marginVertical={"4px"}>
                                                    {deleteDialogFormKeysOrder.map(
                                                        key => {
                                                            const keyComponentData =
                                                                deleteDialogFormComponentData[
                                                                    key
                                                                ];
                                                            if (
                                                                !keyComponentData.array
                                                            ) {
                                                                return (
                                                                    <DigitFormField
                                                                        key={
                                                                            key
                                                                        }
                                                                        name={
                                                                            key
                                                                        }
                                                                        render={
                                                                            keyComponentData.render
                                                                        }
                                                                        component={
                                                                            keyComponentData.component
                                                                        }
                                                                        componentProps={
                                                                            keyComponentData.componentProps
                                                                        }
                                                                        formatEvent={
                                                                            keyComponentData.formatEvent
                                                                        }
                                                                    />
                                                                );
                                                            } else {
                                                                return (
                                                                    <DigitFormFieldArray
                                                                        key={
                                                                            key
                                                                        }
                                                                        name={
                                                                            key
                                                                        }
                                                                        render={
                                                                            keyComponentData.render
                                                                        }
                                                                        component={
                                                                            keyComponentData.component
                                                                        }
                                                                        componentProps={
                                                                            keyComponentData.componentProps
                                                                        }
                                                                    />
                                                                );
                                                            }
                                                        }
                                                    )}
                                                </Column>
                                            )}
                                        />
                                    </>
                                ),
                                renderButtons: (confirm, cancel) => (
                                    <>
                                        <DigitButton
                                            text={dialogDeleteCancel(one)}
                                            onClick={cancel}
                                        />
                                        <DigitButton
                                            text={dialogDeleteConfirm(one)}
                                            submit
                                            form={"deleteDialogCRUD"}
                                            onClick={() => {
                                                setConfirmed(true);
                                            }}
                                        />
                                    </>
                                ),
                                title: dialogDeleteTitle(one),
                                onConfirm: () => {},
                                onDelete: () => {}
                            })
                        );
                    } else {
                        dispatch(
                            digitDialogOpen({
                                title: dialogDeleteTitle(one),
                                description: dialogDeleteDescription(one),
                                cancelButtonText: dialogDeleteCancel(one),
                                confirmButtonText: dialogDeleteConfirm(one),
                                onCancel: () => {},
                                onConfirm: onDelete
                            })
                        );
                    }
                }}
            />
        </DownRightPosition>
    );
};

export default DeleteFAB;
