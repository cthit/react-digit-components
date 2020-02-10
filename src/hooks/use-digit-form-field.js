import { useCallback, useContext } from "react";
import DigitFormContext from "../contexts/DigitFormContext";

const getValue = e => {
    if (e.target != null) {
        const type = e.target.type;
        if (type === "checkbox" || type === "radio") {
            return e.target.checked;
        } else if (e.target.value != null) {
            return e.target.value;
        }
    }
    return e;
};

function useDigitFormField(
    name,
    valueFieldName = "value",
    getValueFromEvent = getValue
) {
    const form = useContext(DigitFormContext);
    const onChange = useCallback(
        e => form.handleChange(getValueFromEvent(e), name),
        [name]
    );
    const onBlur = useCallback(() => form.handleTouched(true, name), [name]);
    const error =
        form.errors[name] != null &&
        form.touched[name] != null &&
        form.touched[name];
    const errorMessage = form.errors[name];
    const re = { onChange, onBlur, error, errorMessage };
    re[valueFieldName] = form.values[name];
    return re;
}

export default useDigitFormField;
