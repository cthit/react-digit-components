import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import PropTypes from "prop-types";
import React from "react";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

const DigitSelect = ({
    value,
    onChange,
    disabled,
    valueToTextMap,
    allowToChooseNone,
    name,
    upperLabel,
    lowerLabel,
    reverse,
    filled,
    outlined,
    error,
    errorMessage,
    onBlur,
    selectNothingText,
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
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, [inputLabel.ref, upperLabel]);

    return (
        <FormControl
            classes={classes}
            disabled={disabled}
            variant={filled ? "filled" : outlined ? "outlined" : "standard"}
        >
            <InputLabel ref={inputLabel}>{upperLabel}</InputLabel>
            <Select
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                displayEmpty={allowToChooseNone}
                value={value}
                labelWidth={labelWidth}
                inputProps={{
                    name: "age",
                    id: "outlined-age-simple"
                }}
            >
                {allowToChooseNone ? (
                    <MenuItem
                        value=""
                        name={selectNothingText}
                        component={"li"}
                    >
                        <div style={{ height: "24px" }} />
                    </MenuItem>
                ) : null}

                {_getValues(valueToTextMap, reverse).map(value => {
                    const text = valueToTextMap[value];
                    return (
                        <MenuItem
                            name={value}
                            key={value}
                            value={value}
                            component={"li"}
                        >
                            {text}
                        </MenuItem>
                    );
                })}
            </Select>
            {(lowerLabel != null || errorMessage != null) && (
                <FormHelperText>
                    {error && errorMessage != null ? errorMessage : lowerLabel}
                </FormHelperText>
            )}
        </FormControl>
    );
};

function _getValues(valueToTextMap, reverse) {
    var result = Object.keys(valueToTextMap);

    if (reverse) {
        result.reverse();
    }

    return result;
}

DigitSelect.displayName = "DigitSelect";
DigitSelect.propTypes = {
    /** The selected value of the DigitSelect. Note that
     * this component is uncontrolled, which means you need to
     * store the selected value yourself. Use onChange to
     * get new selected values.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** This function will be called when a new
     * value has been selected inside the DigitSelect. The
     * first argument is the new selected value.
     */
    onChange: PropTypes.func.isRequired,
    /** If true, then you can't select a new value. */
    disabled: PropTypes.bool,
    /** A string to string map, the pretty text to render. */
    valueToTextMap: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ).isRequired,
    /** If true, then the user can select nothing. */
    allowToChooseNone: PropTypes.bool,
    /** The text label over the DigitSelect */
    upperLabel: PropTypes.string,
    /** The text label under the DigitSelect */
    lowerLabel: PropTypes.string,
    /** If true, then reverses the list */
    reverse: PropTypes.bool,
    /**
     * Adds an outline around the button in black color.
     */
    outlined: PropTypes.bool,
    /** Adds a grey isch background */
    filled: PropTypes.bool,
    /** A unique name relative to a form. e.g. pizzaTopping or attendanceYear.*/
    name: PropTypes.string,
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
    padding: PropTypes.oneOf([
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
    margin: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ])
};

DigitSelect.defaultProps = {
    disabled: false,
    allowToChooseNone: false,
    upperLabel: "",
    lowerLabel: "",
    reverse: false,
    outlined: false,
    filled: false,
    name: "",
    value: "",
    valueToTextMap: {},
    selectNothingText: "Nothing",
    size: {
        width: "224px"
    }
};

export default DigitSelect;
