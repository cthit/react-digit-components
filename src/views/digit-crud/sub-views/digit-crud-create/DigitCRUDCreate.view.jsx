import React from "react";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";
import DigitEditData from "../../../../elements/digit-edit-data";
import { digitToastOpen } from "../../../digit-toast/DigitToast.view.action-creator";
import { useDispatch } from "react-redux";

const DigitCRUDCreate = ({
    createAction,
    path,
    formComponentData,
    formValidationSchema,
    formInitialValues,
    keysOrder,
    createTitle
}) => {
    const dispatch = useDispatch();

    return (
        <Center>
            <DigitEditData
                onSubmit={(values, actions) => {
                    createAction(values)
                        .then(response => {
                            actions.resetForm();
                            dispatch(
                                digitToastOpen({
                                    text: "Skapning lyckades"
                                })
                            );
                        })
                        .catch(error => {
                            actions.setSubmitting(false);
                            dispatch(
                                digitToastOpen({
                                    text: "Skapning misslyckades"
                                })
                            );
                        });
                }}
                keysOrder={keysOrder.filter(
                    key => formComponentData[key] != null
                )}
                keysComponentData={formComponentData}
                validationSchema={formValidationSchema}
                extraButton={{
                    outlined: true,
                    text: "Tillbaka"
                }}
                extraButtonTo={path}
                initialValues={formInitialValues}
                submitText={"Skapa"}
                titleText={createTitle}
            />
        </Center>
    );
};

export default DigitCRUDCreate;
