import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DigitEditData from "../../../../elements/digit-edit-data";
import { digitToastOpen } from "../../../digit-toast/DigitToast.view.action-creator";
import DigitLoading from "../../../../elements/digit-loading";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";

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
        <DigitEditData
            onSubmit={(values, actions) => {
                updateAction(id, values)
                    .then(response => {
                        actions.resetForm();
                        readOneAction(id);
                        dispatch(
                            digitToastOpen({
                                text: "yay"
                            })
                        );
                    })
                    .catch(error => {
                        actions.setSubmitting(false);
                        dispatch(
                            digitToastOpen({
                                text: "nay"
                            })
                        );
                    });
            }}
            keysOrder={keysOrder.filter(key => formComponentData[key] != null)}
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
    );
};

export default DigitCRUDUpdate;
