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
    history
}) => {
    const all = useSelector(state => state[name].all);
    const loading = useSelector(state => state[name].loading);

    useEffect(() => {
        readAllAction();
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
                <DigitTable
                    data={
                        hasReadOne
                            ? all.map(one => ({
                                  ...one,
                                  __link: path + "/" + one[idProp]
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
                        onClick={() => history.push(path + "/add")}
                    />
                </DownRightPosition>
            )}
        </>
    );
};

DigitCRUDReadAll.defaultProps = {
    detailsButtonText: "Detaljer"
};

export default DigitCRUDReadAll;
