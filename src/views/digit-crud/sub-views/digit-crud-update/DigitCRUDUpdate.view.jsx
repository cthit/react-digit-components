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
    keysOrder
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
                        updateAction(id, values)
                            .then(response => {
                                readOneAction(id);
                                actions.setSubmitting(false);
                                dispatch(
                                    digitToastOpen({
                                        text: "Uppdateringen lyckades"
                                    })
                                );
                            })
                            .catch(error => {
                                actions.setSubmitting(false);
                                dispatch(
                                    digitToastOpen({
                                        text: "Uppdateringen misslyckades"
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
                        text: "Tillbaka"
                    }}
                    extraButtonTo={path + "/" + id}
                    initialValues={one}
                    submitText={"Uppdatera"}
                    titleText={updateTitle}
                />
            </Center>
            {deleteAction != null && (
                <DownRightPosition>
                    <DigitFAB
                        text={"Radera"}
                        icon={Delete}
                        onClick={() => {
                            dispatch(
                                digitDialogOpen({
                                    title: "Är du säker?",
                                    cancelButtonText: "Avbryt",
                                    confirmButtonText: "Radera",
                                    onCancel: () => {},
                                    onConfirm: () => {
                                        deleteAction(id)
                                            .then(() => {
                                                dispatch(
                                                    digitToastOpen({
                                                        text: "Radering lyckaes"
                                                    })
                                                );
                                                history.push(path);
                                            })
                                            .catch(() => {
                                                dispatch(
                                                    digitToastOpen({
                                                        text:
                                                            "Någonting gick fel"
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

export default DigitCRUDUpdate;
