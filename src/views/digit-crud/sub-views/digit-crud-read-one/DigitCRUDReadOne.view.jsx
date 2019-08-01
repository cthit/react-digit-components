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
    detailsRenderCardEnd
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

    return (
        <>
            <Center>
                <Card>
                    <CardTitle text={detailsTitle(one)} />
                    <CardBody>
                        <DigitDisplayData
                            keysText={keysText}
                            keysOrder={keysOrder}
                            data={one}
                        />
                        {detailsRenderCardEnd(one)}
                    </CardBody>
                    <CardButtons>
                        <DigitButton
                            text={backButtonText}
                            outlined
                            onClick={() => history.push(path)}
                        />
                        {hasUpdate && (
                            <>
                                <Padding />
                                <DigitButton
                                    primary
                                    raised
                                    text={updateButtonText(one)}
                                    onClick={() =>
                                        history.push(path + "/" + id + "/edit")
                                    }
                                />
                            </>
                        )}
                    </CardButtons>
                </Card>
            </Center>
            {!hasUpdate && deleteAction != null && (
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

export default DigitCRUDReadOne;
