import React, { useContext, useEffect } from "react";
import DigitTable from "../../../digit-table";
import {
    Center,
    DownRightPosition
} from "../../../../styles/digit-layout/DigitLayout.styles";
import DigitLoading from "../../../../elements/digit-loading";
import DigitFAB from "../../../../elements/digit-fab";
import Add from "@material-ui/icons/Add";
import translations from "./DigitCRUDReadAll.view.translations";
import useDigitTranslations from "../../../../hooks/use-digit-translations";
import DigitCRUDContext from "../../../../contexts/DigitCRUDContext";
import { useHistory } from "react-router-dom";
import useDigitCRUDStatus from "../../hooks/use-digit-crud-status";
import formatDate from "../../utils/date-time.format";

const DigitCRUDReadAll = ({
    readAllAction,
    keysText,
    keysOrder,
    tableProps,
    idProp,
    hasReadOne,
    path,
    detailsButtonText,
    hasCreate,
    createButtonText,
    readOnePath,
    createPath,
    timeProps,
    dateProps,
    dateAndTimeProps,
    canReadOne,
    statusHandlers,
    statusRenders,
    readAllBackButton
}) => {
    const [text] = useDigitTranslations(translations);
    const [{ all, loading }] = useContext(DigitCRUDContext);
    const history = useHistory();
    const [
        statusHandler,
        statusRender,
        reset,
        read,
        setRead
    ] = useDigitCRUDStatus(statusHandlers, statusRenders);

    useEffect(() => {
        if (read) {
            readAllAction()
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
    }, [readAllAction, read, setRead, statusHandler]);

    if (read || loading || all == null) {
        return (
            <Center size={{ height: "200px" }}>
                <DigitLoading loading />
            </Center>
        );
    }

    if (statusRender != null) {
        return statusRender();
    }

    if (timeProps.length + dateProps.length + dateAndTimeProps.length > 0) {
        for (let i = 0; i < all.length; i++) {
            for (let j = 0; j < timeProps.length; j++) {
                all[i][timeProps[j]] = formatDate(
                    all[i][timeProps[j]],
                    text,
                    "time"
                );
            }
            for (let j = 0; j < dateProps.length; j++) {
                all[i][dateProps[j]] = formatDate(
                    all[i][dateProps[j]],
                    text,
                    "date"
                );
            }
            for (let j = 0; j < dateAndTimeProps.length; j++) {
                all[i][dateAndTimeProps[j]] = formatDate(
                    all[i][dateAndTimeProps[j]],
                    text,
                    "date-time"
                );
            }
        }
    }

    return (
        <>
            <DigitTable
                alignSelf={"flex-start"}
                padding={"8px"}
                data={
                    hasReadOne
                        ? all.map(one =>
                              canReadOne(one)
                                  ? {
                                        ...one,
                                        __link:
                                            path +
                                            readOnePath.replace(
                                                ":id",
                                                one[idProp]
                                            )
                                    }
                                  : one
                          )
                        : all
                }
                columnsOrder={keysOrder}
                headerTexts={
                    hasReadOne
                        ? { ...keysText, __link: detailsButtonText }
                        : { ...keysText }
                }
                idProp={idProp}
                margin={hasCreate ? { bottom: "calc(56px + 16px)" } : {}}
                backButton={readAllBackButton}
                {...tableProps}
            />
            {hasCreate && (
                <>
                    <DownRightPosition>
                        <DigitFAB
                            primary
                            text={createButtonText}
                            icon={Add}
                            onClick={() => history.push(path + createPath)}
                        />
                    </DownRightPosition>
                </>
            )}
        </>
    );
};

export default DigitCRUDReadAll;
