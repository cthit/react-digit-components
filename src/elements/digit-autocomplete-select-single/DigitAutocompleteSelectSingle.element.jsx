import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import find from "lodash/find";
import translations from "./DigitAutocompleteSelectSingle.element.translations";
import useDigitTranslations from "../../hooks/use-digit-translations";
import PropTypes from "prop-types";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

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
    justifySelf,
    size,
    padding,
    margin,
    gridColumn,
    gridRow,
    disableClearable
}) => {
    const outerClasses = useLayoutMaterialUi({
        gridColumn,
        gridRow,
        padding,
        margin,
        alignSelf,
        justifySelf,
        flex
    });
    const classes = useLayoutMaterialUi({
        size
    });
    const [text] = useDigitTranslations(translations);

    return (
        <Autocomplete
            classes={outerClasses}
            disableClearable={disableClearable}
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
                    fullWidth={false}
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
    filled: false,
    size: { width: "224px" }
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
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
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
    /** Controls the flex property for the most outer element in this component.*/
    flex: PropTypes.string,

    /** Controls the alignSelf property for the most outer element in this component.*/
    alignSelf: PropTypes.oneOf([
        "auto",
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "baseline",
        "initial",
        "inherit"
    ]),
    /** Controls the justifySelf property for the most outer element in this component. */
    justifySelf: PropTypes.oneOf([
        "enter",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "left",
        "right",
        "baseline",
        "inherit",
        "initial"
    ]),
    /** Controls the size for the most outer element in this component. You can set minWidth/Height, maxWidth/Height
     * and width/height via an object
     */
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        minWidth: PropTypes.string,
        minHeight: PropTypes.string,
        maxWidth: PropTypes.string,
        maxHeight: PropTypes.string
    }),
    /** Padding property for the most outer element in this component.
     * It can either be a string, using the padding shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
    /** Margin property for the most outer element in this component.
     * It can either be a string, using the margin shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
    /** If true, then there's no clearable button */
    disableClearable: PropTypes.bool,
    /** Controls grid-column-start and grid-column-end */
    gridColumn: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    }),
    /** Controls grid-row-start and grid-row-end */
    gridRow: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    })
};

export default DigitAutocompleteSelectSingle;
