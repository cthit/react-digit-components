import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import find from "lodash/find";
import translations from "./DigitAutocompleteSelectSingle.element.translations";
import useDigitTranslations from "../../hooks/use-digit-translations";

const DigitAutocompleteSelectSingle = ({
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
    filled
}) => {
    const [text] = useDigitTranslations(translations);

    return (
        <Autocomplete
            autoHighlight
            value={value}
            onChange={(e, value) => {
                onChange({ target: { value } });
            }}
            getOptionDisabled={value => {
                const obj = find(options, { value });
                return obj == null || obj.disabled;
            }}
            options={options.map(option => option.value)}
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
            disabled={disabled}
            onBlur={onBlur}
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

export default DigitAutocompleteSelectSingle;
