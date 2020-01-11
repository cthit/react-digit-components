import DigitFormContext from "../contexts/DigitFormContext";
import { useCallback } from "react";

const _swap = (value, index1, index2) => {
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

function useDigitFormFieldArray() {
    const form = useContext(DigitFormContext);
    const value = form.values[name];
    const onChange = useCallback(
        newValue => form.handleChange(newValue, name),
        [name]
    );
    const push = item => onChange([...value, { ...item }]);
    const remove = index => onChange([...value.slice(index, 1)]);
    const swap = (index1, index2) => onChange(_swap(value, index1, index2));
    const insert = (index, item) => onChange([...value.slice(index, 0, item)]);
    const pop = () => onChange([...value].splice(0, 1));
    const move = (from, to) => onChange(_move(value, from, to));
    const replace = (index, item) => onChange([...value.slice(index, 1, item)]);

    return { value, push, swap, remove, insert, pop, move, replace };
}

/**
 * push: (item: any) => void: Add a value to the end of an array
 swap: (indexA: number, indexB: number) => void: Swap two values in an array
 move: (from: number, to: number) => void: Move an element in an array to another index
 insert: (index: number, value: any) => void: Insert an element at a given index into the array
 unshift: (value: any) => number: Add an element to the beginning of an array and return its length
 remove<T>(index: number): T | undefined: Remove an element at an index of an array and return it
 pop<T>(): T | undefined: Remove and return value from the end of the array
 replace: (index: number, value: any) => void: Replace a value at the given index into the array
 */

export default useDigitFormFieldArray;
