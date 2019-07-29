import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const DigitCRUDReadAll = ({ name, readAllAction, resetAction }) => {
    const all = useSelector(state => state[name].all);

    useEffect(() => {
        readAllAction();
        return resetAction;
    }, []);

    return (
        <div>
            {all.map(row => (
                <div>
                    <p>{row.name}</p>
                </div>
            ))}
        </div>
    );
};

export default DigitCRUDReadAll;
