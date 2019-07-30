import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DigitTable from "../../../digit-table";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";
import DigitLoading from "../../../../elements/digit-loading";

const DigitCRUDReadAll = ({
    name,
    readAllAction,
    clearAction,
    keysText,
    keysOrder,
    tableProps,
    idProp,
    hasReadOne,
    path
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

    console.log(all);

    return (
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
                headerTexts={{ ...keysText, __link: "Detaljer" }}
                idProp={idProp}
                {...tableProps}
            />
        </Center>
    );
};

export default DigitCRUDReadAll;