import DigitFormContext from "../contexts/DigitFormContext";
import { useCallback, useContext } from "react";

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

function useDigitFormFieldArray(name) {
    const form = useContext(DigitFormContext);
    const value = form.values[name];
    const onChange = useCallback(
        newValue => form.handleChange(newValue, name),
        [name, form]
    );
    const remove = index => {
        const newValue = [...value];
        const valueRemoved = newValue.splice(index, 1);
        onChange(newValue);
        return valueRemoved;
    };
    const pop = () => {
        const newValue = [...value];
        const returnValue = newValue.pop();
        onChange(newValue);
        return returnValue;
    };
    const replace = (index, item) => {
        const newValue = [...value];
        newValue[index] = item;
        onChange(newValue);
        return newValue;
    };
    const insert = (index, item) => {
        const newValue = [...value];
        newValue.splice(index, 0, item);
        onChange(newValue);
        return newValue;
    };
    const push = item => onChange([...value, { ...item }]);
    const unshift = item => onChange([{ ...item }, ...value]);
    const swap = (index1, index2) => onChange(_swap(value, index1, index2));
    const move = (from, to) => onChange(_move(value, from, to));

    return { value, push, swap, remove, insert, pop, move, replace, unshift };
}

export default useDigitFormFieldArray;
