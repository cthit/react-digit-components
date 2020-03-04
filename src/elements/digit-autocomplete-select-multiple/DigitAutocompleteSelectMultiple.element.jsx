import React from "react";
import PropTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import find from "lodash/find";
import translations from "./DigitAutocompleteSelectMultiple.element.translations";
import useDigitTranslations from "../../hooks/use-digit-translations";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";
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
    chipOutlined,
    checkboxPrimary,
    checkboxSecondary,
    flex,
    alignSelf,
    size
}) => {
    const classes = useLayoutMaterialUi({ flex, alignSelf, size });
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
                return (
                    <React.Fragment>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                            color={
                                checkboxPrimary
                                    ? "primary"
                                    : checkboxSecondary
                                    ? "secondary"
                                    : "default"
                            }
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

DigitAutocompleteSelectMultiple.defaultProps = {
    options: [],
    value: [],
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

DigitAutocompleteSelectMultiple.propTypes = {
    /** The selectable options */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * The selected values of the autocomplete
             */
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            /**
             * The text that represents the value
             */
            text: PropTypes.string.isRequired,
            /**
             * If you should be able to select the given value. Will still show up in the autocomplete
             */
            disabled: PropTypes.bool
        })
    ),
    /** Value of the select options */
    value: PropTypes.arrayOf(
        PropTypes.oneOfType(PropTypes.number, PropTypes.string)
    ).isRequired,
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
    filled: PropTypes.bool,
    /** Adds outline for the selected chips */
    chipOutlined: PropTypes.bool,
    /** Sets checkbox color to primary */
    checkboxPrimary: PropTypes.bool,
    /** Sets checkbox color to secondary */
    checkboxSecondary: PropTypes.bool
};

export default DigitAutocompleteSelectMultiple;
