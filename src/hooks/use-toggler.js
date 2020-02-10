import { useState } from "react";
import xor from "lodash/xor";

//Not exported publicly. Used by DigitList, DigitListSelectSingle and DigitListSelectMultiple
function useToggler(multiple) {
    const [toggled, setToggled] = useState([]);

    const toggle = value => {
        if (multiple) {
            setToggled(xor(toggled, [value]));
        } else {
            setToggled(isToggled(value) ? [] : [value]);
        }
    };

    const isToggled = id => toggled.includes(id);

    return [toggle, isToggled];
}

export default useToggler;
