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
    DownRightPosition,
    Padding
} from "../../../../styles/digit-layout/DigitLayout.styles";
import { useDispatch, useSelector } from "react-redux";
import DigitButton from "../../../../elements/digit-button";
import DigitLoading from "../../../../elements/digit-loading";
import DigitFAB from "../../../../elements/digit-fab";
import Delete from "@material-ui/icons/DeleteForever";
import { digitDialogOpen } from "../../../digit-dialog/DigitDialog.view.action-creator";
import { digitToastOpen } from "../../../digit-toast/DigitToast.view.action-creator";

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
    readAllPath
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

    const goBack = () => {
        history.push(path + readAllPath);
    };
    const goToEdit = () => {
        history.push(path + updatePath.replace(":id", id));
    };
    var deleteFAB = () => null;

    if (!hasUpdate && deleteAction != null) {
        deleteFAB = one => (
            <DownRightPosition>
                <DigitFAB
                    text={deleteButtonText(one)}
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
                                            history.push(path + readAllPath);
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
        );
    }

    if (detailsCustomRender != null) {
        return (
            <>
                {detailsCustomRender(one, goBack, goToEdit)}
                {deleteFAB(one)}
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
                {deleteFAB(one)}
            </Center>
        </>
    );
};

export default DigitCRUDReadOne;
