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
    tableProps
}) => {
    const all = useSelector(state => state[name].all);

    useEffect(() => {
        readAllAction();
        return resetAction;
    }, []);

    return (
        <Center>
            <DigitTable
                data={all}
                columnsOrder={keysOrder}
                headerTexts={keysText}
                {...tableProps}
            />
        </Center>
    );
};

export default DigitCRUDReadAll;
