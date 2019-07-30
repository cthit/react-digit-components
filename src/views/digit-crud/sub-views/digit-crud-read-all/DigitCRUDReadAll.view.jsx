import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DigitTable from "../../../digit-table";
import { Center } from "../../../../styles/digit-layout/DigitLayout.styles";

const DigitCRUDReadAll = ({
    name,
    readAllAction,
    resetAction,
    keysText,
    keysOrder,
    tableProps,
    idProp,
    hasReadOne,
    pathname
}) => {
    const all = useSelector(state => state[name].all);

    useEffect(() => {
        readAllAction();
        return resetAction;
    }, []);

    return (
        <Center>
            <DigitTable
                data={
                    hasReadOne
                        ? all.map(one => ({
                              ...one,
                              __link: pathname + "/" + one[idProp]
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
