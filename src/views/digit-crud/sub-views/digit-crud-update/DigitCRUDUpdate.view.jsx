import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DigitEditData from "../../../../elements/digit-edit-data";
import { digitToastOpen } from "../../../digit-toast/DigitToast.view.action-creator";
import DigitLoading from "../../../../elements/digit-loading";
import {
    Center,
    DownRightPosition
} from "../../../../styles/digit-layout/DigitLayout.styles";
import DigitFAB from "../../../../elements/digit-fab";
import Delete from "@material-ui/icons/DeleteForever";
import { digitDialogOpen } from "../../../digit-dialog/DigitDialog.view.action-creator";

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
    toastDeleteFailed
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
                    validationSchema={formValidationSchema}
                    isInitialValid={true}
                    extraButton={{
                        outlined: true,
                        text: backButtonText
                    }}
                    extraButtonTo={path + "/" + id}
                    initialValues={one}
                    submitText={updateButtonText}
                    titleText={updateTitle(one)}
                />
            </Center>
            {deleteAction != null && (
                <DownRightPosition>
                    <DigitFAB
                        text={deleteButtonText}
                        icon={Delete}
                        onClick={() => {
                            dispatch(
                                digitDialogOpen({
                                    title: dialogDeleteTitle(one),
                                    description: dialogDeleteDescription(one),
                                    cancelButtonText: dialogDeleteCancel(one),
                                    confirmButtonText: dialogDeleteConfirm(one),
                                    onCancel: () => {},
                                    onConfirm: () => {
                                        deleteAction(id)
                                            .then(response => {
                                                dispatch(
                                                    digitToastOpen({
                                                        text: toastDeleteSuccessful(
                                                            one,
                                                            response
                                                        )
                                                    })
                                                );
                                                history.push(path);
                                            })
                                            .catch(error => {
                                                dispatch(
                                                    digitToastOpen({
                                                        text: toastDeleteFailed(
                                                            one,
                                                            error
                                                        )
                                                    })
                                                );
                                            });
                                    }
                                })
                            );
                        }}
                    />
                </DownRightPosition>
            )}
        </>
    );
};

DigitCRUDUpdate.defaultProps = {
    updateTitle: () => "Uppdatera",
    toastUpdateSuccessful: () => "Skapning lyckades",
    toastUpdateFailed: () => "Skapning misslyckades",
    backButtonText: "Tillbaka",
    updateButtonText: "Uppdatera",
    deleteButtonText: "Radera",
    dialogDeleteTitle: () => "Är du säker?",
    dialogDeleteDescription: () => "",
    dialogDeleteConfirm: () => "Radera",
    dialogDeleteCancel: () => "Avbryt",
    toastDeleteSuccessful: () => "Raderingen lyckades",
    toastDeleteFailed: () => "Raderingen misslyckades"
};

export default DigitCRUDUpdate;
