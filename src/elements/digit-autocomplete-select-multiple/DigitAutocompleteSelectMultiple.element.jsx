import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import find from "lodash/find";
import translations from "./DigitAutocompleteSelectMultiple.element.translations";
import useDigitTranslations from "../../hooks/use-digit-translations";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const DigitAutocompleteSelectMultiple = ({
    options,
    value,
    onChange,
    noOptionsText,
    onBlur,
    upperLabel,
    lowerLabel,
    name,
    error,
    errorMessage,
    disabled,
    outlined,
    filled,
    chipOutlined
}) => {
    const [text] = useDigitTranslations(translations);

    return (
        <Autocomplete
            autoHighlight
            //To keep consistency throughout rdc, only the value is used to
            //control what becomes selected. this might become really slow.
            //but right now it has the same api as DigitTable when using selected.
            value={value.map(val => find(options, { value: val }))}
            onChange={(e, value) => {
                onChange({ target: { value: value.map(v => v.value) } });
            }}
            disableCloseOnSelect
            getOptionDisabled={value => {
                return value.disabled;
            }}
            options={options}
            getOptionLabel={value => {
                const obj = find(options, { value });
                if (obj == null) {
                    return "";
                } else {
                    return obj.text;
                }
            }}
            noOptionsText={
                noOptionsText == null ? text.NoOptions : noOptionsText
            }
            onBlur={onBlur}
            multiple
            disabled={disabled}
            renderOption={(obj, { selected }) => {
                // const obj = find(options, { value });
                // console.log(value);
                // console.log(obj);
                // const text = obj == null ? "" : obj.text;
                // console.log(text);
                return (
                    <React.Fragment>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {obj.text}
                    </React.Fragment>
                );
            }}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        variant={chipOutlined ? "outlined" : "default"}
                        label={option.text}
                        {...getTagProps({ index })}
                    />
                ))
            }
            renderInput={params => (
                <TextField
                    {...params}
                    fullWidth
                    name={name}
                    error={error}
                    label={upperLabel}
                    variant={
                        outlined ? "outlined" : filled ? "filled" : "standard"
                    }
                    helperText={
                        error && errorMessage != null
                            ? errorMessage
                            : lowerLabel != null
                            ? lowerLabel
                            : ""
                    }
                />
            )}
        />
    );
};

export default DigitAutocompleteSelectMultiple;
