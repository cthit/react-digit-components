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

const DigitCRUDReadAll = ({
    readAllAction,
    clearAction,
    keysText,
    keysOrder,
    tableProps,
    idProp,
    hasReadOne,
    path,
    detailsButtonText,
    hasCreate,
    createButtonText,
    history,
    readOnePath,
    createPath,
    timeProps,
    dateProps,
    dateAndTimeProps,
    canReadOne
}) => {
    const [text] = useDigitTranslations(translations);
    const [{ all, loading }] = useContext(DigitCRUDContext);

    useEffect(() => {
        readAllAction();
        return clearAction;
    }, [readAllAction, clearAction]);

    if (loading || all == null) {
        return (
            <Center>
                <DigitLoading loading />
            </Center>
        );
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
        <Center>
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
                    <div //To let the user scroll all the way down, so that the FAB isn't in the way
                        style={{
                            height: "80px"
                        }}
                    />
                </>
            )}
        </Center>
    );
};

export default DigitCRUDReadAll;
