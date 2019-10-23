import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DigitTable from "../../../digit-table";
import {
    Center,
    DownRightPosition
} from "../../../../styles/digit-layout/DigitLayout.styles";
import DigitLoading from "../../../../elements/digit-loading";
import DigitFAB from "../../../../elements/digit-fab";
import Add from "@material-ui/icons/Add";

const DigitCRUDReadAll = ({
    name,
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
    createPath
}) => {
    const all = useSelector(state => state[name].all);
    const loading = useSelector(state => state[name].loading);

    useEffect(() => {
        readAllAction();
        return clearAction;
    }, []);

    if (loading || all == null) {
        return (
            <Center>
                <DigitLoading loading />
            </Center>
        );
    }

    return (
        <>
            <Center>
                <DigitTable
                    data={
                        hasReadOne
                            ? all.map(one => ({
                                  ...one,
                                  __link:
                                      path +
                                      readOnePath.replace(":id", one[idProp])
                              }))
                            : all
                    }
                    columnsOrder={keysOrder}
                    headerTexts={{ ...keysText, __link: detailsButtonText }}
                    idProp={idProp}
                    {...tableProps}
                />
            </Center>
            {hasCreate && (
                <DownRightPosition>
                    <DigitFAB
                        primary
                        text={createButtonText}
                        icon={Add}
                        onClick={() => history.push(path + createPath)}
                    />
                </DownRightPosition>
            )}
        </>
    );
};

export default DigitCRUDReadAll;
