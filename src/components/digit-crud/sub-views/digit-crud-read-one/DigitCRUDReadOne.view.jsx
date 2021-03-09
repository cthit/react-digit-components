import React, { useContext, useEffect } from "react";
import DigitDisplayData from "../../../digit-display-data";
import {
    Card,
    CardBody,
    CardButtons,
    CardHeader,
    CardSubtitle,
    CardTitle
} from "../../../../styles/digit-design/DigitDesign.styles";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";
import DigitButton from "../../../digit-button";
import DigitLoading from "../../../digit-loading";
import DeleteFAB from "../../elements/delete-fab";
import translations from "./DigitCRUDReadOne.view.translations.json";
import useDigitTranslations from "../../../../hooks/use-digit-translations";
import DigitCRUDContext from "../../../../contexts/DigitCRUDContext";
import useDigitCRUDStatus from "../../hooks/use-digit-crud-status";

//plz format this. I just want 1.0.0 released...
function formatDate(date, text, type) {
    if (date == null) {
        return "";
    }

    var monthNames = [
        text.January,
        text.February,
        text.March,
        text.April,
        text.May,
        text.June,
        text.July,
        text.August,
        text.September,
        text.October,
        text.November,
        text.December
    ];

    date = new Date(date);

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (type === "date") {
        return year + " " + monthNames[monthIndex] + " " + day;
    } else if (type === "date-time") {
        return (
            year +
            " " +
            monthNames[monthIndex] +
            " " +
            day +
            ", " +
            hours +
            ":" +
            minutes
        );
    } else if (type === "time") {
        return hours + ":" + minutes;
    } else {
        return date;
    }
}

const DigitCRUDReadOne = ({
    readOneAction,
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
    deleteDialogFormKeysOrder,
    timeProps,
    dateProps,
    dateAndTimeProps,
    onDelete,
    useHistoryGoBackOnBack,
    detailsSubtitle,
    canDelete,
    canUpdate,
    readOneProps,
    statusHandlers,
    statusRenders,
    hasReadAll
}) => {
    const [text] = useDigitTranslations(translations);
    const [{ one, loading }] = useContext(DigitCRUDContext);
    const [
        statusHandler,
        statusRender,
        reset,
        read,
        setRead
    ] = useDigitCRUDStatus(statusHandlers, statusRenders);

    useEffect(() => {
        if (read) {
            readOneAction(id)
                .then(() => {
                    reset();
                })
                .catch(error => {
                    statusHandler(
                        error.response != null ? error.response.status : -1,
                        error
                    );
                });
        }
        setRead(false);
    }, [readOneAction, id, read]);

    if (read || loading) {
        return (
            <Center size={{ height: "200px" }}>
                <DigitLoading loading />
            </Center>
        );
    }

    if (statusRender != null) {
        return statusRender();
    }

    const displayData = {};
    const customDetailsRenderKeys = Object.keys(customDetailsRenders);
    Object.keys(one)
        .filter(key => !customDetailsRenderKeys.includes(key))
        .forEach(key => (displayData[key] = one[key]));

    dateProps.forEach(
        dateProp =>
            (displayData[dateProp] = formatDate(one[dateProp], text, "date"))
    );
    timeProps.forEach(
        timeProp =>
            (displayData[timeProp] = formatDate(one[timeProp], text, "time"))
    );
    dateAndTimeProps.forEach(
        dateAndTimeProp =>
            (displayData[dateAndTimeProp] = formatDate(
                one[dateAndTimeProp],
                text,
                "date-time"
            ))
    );

    const hasDeleteFAB = !hasUpdate && deleteAction != null && canDelete(one);

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
                backFromDeletePath(one) == null
                    ? readAllPath
                    : backFromDeletePath(one)
            }
            deleteAction={deleteAction}
            history={history}
            one={one}
            id={id}
            deleteDialogFormComponentData={deleteDialogFormComponentData}
            deleteDialogFormInitialValues={deleteDialogFormInitialValues}
            deleteDialogFormValidationSchema={deleteDialogFormValidationSchema}
            deleteDialogFormKeysOrder={deleteDialogFormKeysOrder}
            onDelete={onDelete}
            statusHandler={statusHandler}
        />
    );

    const goBack = () => {
        if (useHistoryGoBackOnBack) {
            history.goBack();
        } else {
            history.push(
                backFromReadOnePath(one) == null
                    ? path + readAllPath
                    : backFromReadOnePath(one)
            );
        }
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
        <Center>
            {detailsRenderStart(one)}
            <Card
                size={{
                    minWidth: "280px",
                    minHeight: "280px"
                }}
                margin={hasDeleteFAB ? { bottom: "calc(56px + 16px)" } : {}}
                {...readOneProps}
            >
                <CardHeader
                    hasSubtitle={
                        detailsSubtitle != null && detailsSubtitle(one) !== ""
                    }
                >
                    <CardTitle text={detailsTitle(one) + ""} />
                    {detailsSubtitle != null && (
                        <CardSubtitle text={detailsSubtitle(one)} />
                    )}
                </CardHeader>
                <CardBody justifyContent={"center"}>
                    {detailsRenderCardStart(one)}
                    <DigitDisplayData
                        alignSelf={"center"}
                        keysText={keysText}
                        keysOrder={keysOrder}
                        data={displayData}
                    />
                    {keysOrder
                        .filter(key => customDetailsRenderKeys.includes(key))
                        .map(key => customDetailsRenders[key](one))}
                    {detailsRenderCardEnd(one)}
                </CardBody>
                <CardButtons leftRight reverseDirection={!hasReadAll}>
                    {hasReadAll && (
                        <DigitButton
                            text={backButtonText}
                            outlined
                            onClick={goBack}
                        />
                    )}
                    {hasUpdate && canUpdate(one) && (
                        <>
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
            {hasDeleteFAB && deleteFAB}
        </Center>
    );
};

export default DigitCRUDReadOne;
