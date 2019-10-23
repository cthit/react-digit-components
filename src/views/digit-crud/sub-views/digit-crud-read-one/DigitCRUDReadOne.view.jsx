import React, { useEffect } from "react";
import DigitDisplayData from "../../../../elements/digit-display-data";
import {
    Card,
    CardBody,
    CardButtons,
    CardTitle
} from "../../../../styles/digit-design/DigitDesign.styles";
import {
    Center,
    Padding
} from "../../../../styles/digit-layout/DigitLayout.styles";
import { useDispatch, useSelector } from "react-redux";
import DigitButton from "../../../../elements/digit-button";
import DigitLoading from "../../../../elements/digit-loading";
import DeleteFAB from "../../elements/delete-fab";

const DigitCRUDReadOne = ({
    name,
    readOneAction,
    clearAction,
    keysText,
    keysOrder,
    path,
    id,
    history,
    hasUpdate,
    backButtonText,
    updateButtonText,
    deleteAction,
    deleteButtonText,
    dialogDeleteTitle,
    dialogDeleteDescription,
    dialogDeleteConfirm,
    dialogDeleteCancel,
    toastDeleteSuccessful,
    toastDeleteFailed,
    detailsTitle,
    detailsRenderCardStart,
    detailsRenderCardEnd,
    detailsRenderStart,
    detailsRenderEnd,
    detailsCustomRender,
    customDetailsRenders,
    updatePath,
    readAllPath,
    backFromReadOnePath,
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

    if (loading) {
        return (
            <Center>
                <DigitLoading loading />
            </Center>
        );
    }

    const displayData = {};
    const customDetailsRenderKeys = Object.keys(customDetailsRenders);
    Object.keys(one)
        .filter(key => !customDetailsRenderKeys.includes(key))
        .forEach(key => (displayData[key] = one[key]));

    const deleteFAB = (
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
                backFromDeletePath == null ? readAllPath : backFromDeletePath
            }
            deleteAction={deleteAction}
            history={history}
            one={one}
            id={id}
            deleteDialogFormComponentData={deleteDialogFormComponentData}
            deleteDialogFormInitialValues={deleteDialogFormInitialValues}
            deleteDialogFormValidationSchema={deleteDialogFormValidationSchema}
            deleteDialogFormKeysOrder={deleteDialogFormKeysOrder}
        />
    );

    const goBack = () => {
        history.push(
            backFromReadOnePath == null
                ? path + readAllPath
                : backFromReadOnePath
        );
    };
    const goToEdit = () => {
        history.push(path + updatePath.replace(":id", id));
    };

    if (detailsCustomRender != null) {
        return (
            <>
                {detailsCustomRender(one, goBack, goToEdit)}
                {deleteFAB}
            </>
        );
    }

    return (
        <>
            <Center>
                {detailsRenderStart(one)}
                <Card>
                    <CardTitle text={detailsTitle(one) + ""} />
                    <CardBody>
                        {detailsRenderCardStart(one)}
                        <DigitDisplayData
                            keysText={keysText}
                            keysOrder={keysOrder}
                            data={displayData}
                        />
                        {keysOrder
                            .filter(key =>
                                customDetailsRenderKeys.includes(key)
                            )
                            .map(key => customDetailsRenders[key](one))}
                        {detailsRenderCardEnd(one)}
                    </CardBody>
                    <CardButtons>
                        <DigitButton
                            text={backButtonText}
                            outlined
                            onClick={goBack}
                        />
                        {hasUpdate && (
                            <>
                                <Padding />
                                <DigitButton
                                    primary
                                    raised
                                    text={updateButtonText(one)}
                                    onClick={goToEdit}
                                />
                            </>
                        )}
                    </CardButtons>
                </Card>
                {detailsRenderEnd(one)}
                {!hasUpdate && deleteAction != null && deleteFAB}
            </Center>
        </>
    );
};

export default DigitCRUDReadOne;
