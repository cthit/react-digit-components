import DigitFormContext from "../contexts/DigitFormContext";
import { useCallback, useContext, useMemo } from "react";

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

const _swap = (value, x, y) => {
    const out = [...value];
    const b = out[y];
    out[y] = out[x];
    out[x] = b;
    return out;
};

const _move = (value, from, to) => {
    const out = [...value];
    out.splice(to, 0, out.splice(from, 1)[0]);
    return out;
};

function useDigitFormFieldArray(name, options = { inputs: [] }) {
    const form = useContext(DigitFormContext);
    const value = form.values[name];
    const _onChange = useCallback(
        newValue => form.handleChange(newValue, name),
        [name, form]
    );
    const remove = index => {
        const newValue = [...value];
        const valueRemoved = newValue.splice(index, 1);
        _onChange(newValue);
        return valueRemoved;
    };
    const pop = () => {
        const newValue = [...value];
        const returnValue = newValue.pop();
        _onChange(newValue);
        return returnValue;
    };
    const replace = (index, item) => {
        const newValue = [...value];
        newValue[index] = item;
        _onChange(newValue);
        return newValue;
    };
    const insert = (index, item) => {
        const newValue = [...value];
        newValue.splice(index, 0, item);
        _onChange(newValue);
        return newValue;
    };
    const push = item => _onChange([...value, { ...item }]);
    const unshift = item => _onChange([{ ...item }, ...value]);
    const swap = (index1, index2) => _onChange(_swap(value, index1, index2));
    const move = (from, to) => _onChange(_move(value, from, to));

    const errors = useMemo(
        () =>
            value.map((val, index) => {
                //e.g. cars[3].name
                const errors = {};
                Object.keys(val).forEach(prop => {
                    errors[prop] = { error: false, errorMessage: "" };
                });

                Object.keys(form.errors).forEach(errorKey => {
                    if (errorKey.startsWith(name + "[" + index + "]")) {
                        const touched =
                            form.touched[errorKey] != null &&
                            form.touched[errorKey];
                        errors[errorKey.split(".")[1]] = {
                            error: touched,
                            errorMessage: form.errors[errorKey]
                        };
                    }
                });
                return errors;
            }),
        /*eslint-disable */
        [
            JSON.stringify(form.errors),
            JSON.stringify(value),
            JSON.stringify(form.touched),
            name
        ]
        /*eslint-enable */
    );

    const handleChange = form.handleChange;
    const handleTouched = form.handleTouched;

    const onInputChange = useCallback(
        (index, inputName) => e =>
            handleChange(getValue(e), name, index, inputName),
        [handleChange, name]
    );
    const onInputBlur = useCallback(
        (index, inputName) => () =>
            handleTouched(true, name + "[" + index + "]." + inputName),
        [handleTouched, name]
    );

    const innerInputs = useMemo(
        () =>
            value.map((val, i) => {
                const output = {};

                options.inputs.forEach(input => {
                    output[input] = {
                        onChange: onInputChange(i, input),
                        onBlur: onInputBlur(i, input),
                        value: val[input],
                        ...errors[i][input]
                    };
                });

                return output;
            }),
        /*eslint-disable */
        [
            JSON.stringify(value),
            JSON.stringify(options),
            JSON.stringify(errors),
            onInputChange,
            onInputBlur
        ]
        /*eslint-enable */
    );

    return {
        value,
        push,
        swap,
        remove,
        insert,
        pop,
        move,
        replace,
        unshift,
        errors,
        innerInputs
    };
}

export default useDigitFormFieldArray;
