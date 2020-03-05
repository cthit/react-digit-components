import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import find from "lodash/find";
import translations from "./DigitAutocompleteSelectSingle.element.translations";
import useDigitTranslations from "../../hooks/use-digit-translations";
import PropTypes from "prop-types";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

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
    filled,
    flex,
    alignSelf,
    size,
    padding,
    margin
}) => {
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        size,
        padding,
        margin
    });
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
                    classes={classes}
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

DigitAutocompleteSelectSingle.defaultProps = {
    options: [],
    value: "",
    onChange: () => {},
    noOptionsText: null,
    onBlur: () => {},
    upperLabel: null,
    lowerLabel: null,
    name: null,
    error: false,
    errorMessage: null,
    disabled: false,
    outlined: false,
    filled: false
};

DigitAutocompleteSelectSingle.propTypes = {
    /** The selectable options */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            /** The selected values of the autocompleted */
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            /** The text that represents the value */
            text: PropTypes.string.isRequired,
            /** If you should be able to select the given value. Will still show up in the autocomplete */
            disabled: PropTypes.bool
        })
    ),
    /** The selected value */
    value: PropTypes.oneOfType(PropTypes.number, PropTypes.string).isRequired,
    /** Gets called something in selected changes. */
    onChange: PropTypes.func.isRequired,
    /** text displayed when there are no options*/
    noOptionsText: PropTypes.string,
    /** Gets called when the component loses focus*/
    onBlur: PropTypes.func,
    /** The text label over the component */
    upperLabel: PropTypes.string,
    /** The text label over the component */
    lowerLabel: PropTypes.string,
    /** The name for the component in a form */
    name: PropTypes.string,
    /** If true, then errorMessage will be shown instead of lowerLabel */
    error: PropTypes.bool,
    /** If error is true, then this errorMessage will be shown instead of lowerLabel */
    errorMessage: PropTypes.string,
    /** If true, then you can't select any options */
    disabled: PropTypes.bool,
    /** Adds an outline around the component. Either this or filled.*/
    outlined: PropTypes.bool,
    /** Adds a grey isch background around the component. Either this or outlined. */
    filled: PropTypes.bool
};

export default DigitAutocompleteSelectSingle;
