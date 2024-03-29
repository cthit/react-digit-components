import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import PropTypes from "prop-types";
import React from "react";
import { Lowerlabel, UpperLabel } from "./DigitRadioButtonGroup.element.styles";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";
import FormControl from "@material-ui/core/FormControl";

const DigitRadioButtonGroup = ({
    value,
    onChange,
    onBlur,
    name,
    upperLabel,
    lowerLabel,
    radioButtons,
    error,
    errorMessage,
    flex,
    alignSelf,
    justifySelf,
    size,
    padding,
    margin,
    gridColumn,
    gridRow
}) => {
    const classes = useLayoutMaterialUi({
        size
    });
    const outerClasses = useLayoutMaterialUi({
        flex,
        alignSelf,
        justifySelf,
        padding,
        margin,
        gridColumn,
        gridRow
    });

    return (
        <FormControl classes={outerClasses} component="fieldset">
            <UpperLabel component="legend">{upperLabel}</UpperLabel>
            <RadioGroup
                classes={classes}
                value={value}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
            >
                {radioButtons.map(value => {
                    const { id, label, disabled, primary, secondary } = value;
                    return (
                        <FormControlLabel
                            key={id}
                            value={id}
                            label={label}
                            disabled={disabled}
                            control={
                                <Radio
                                    color={
                                        primary
                                            ? "primary"
                                            : secondary
                                            ? "secondary"
                                            : "default"
                                    }
                                />
                            }
                        />
                    );
                })}
            </RadioGroup>
            <Lowerlabel error={error}>
                {error && errorMessage != null ? errorMessage : lowerLabel}
            </Lowerlabel>
        </FormControl>
    );
};
DigitRadioButtonGroup.displayName = "DigitRadioButtonGroup";
DigitRadioButtonGroup.propTypes = {
    /** The chosen value of the radio buttons. The value must be one of
     * the ids of the radio buttons. Note that this component is uncontrolled.
     */
    value: PropTypes.string.isRequired,
    /**
     * Fires on radio button change. Only argument is the event object
     * with the new selected value, use `e.target.value`.
     */
    onChange: PropTypes.func.isRequired,
    /** The onBlur event occurs when an object loses focus. */
    onBlur: PropTypes.func,
    /** A unique name relative to a form. e.g. acceptedTerms or pizza.*/
    name: PropTypes.string,
    /** An upper label over all radio buttons */
    upperLabel: PropTypes.string,
    /** A lower label under all radio buttons */
    lowerLabel: PropTypes.string,
    /** All the radio button for this group. Has label, disabled, primary and secondary.*/
    radioButtons: PropTypes.arrayOf(
        PropTypes.shape({
            /** Unique id to identify the radio button. */
            id: PropTypes.string,
            /** The label that is next to the radio button. */
            label: PropTypes.string,
            /** If true, then you cannot select this value. */
            disabled: PropTypes.bool,
            /** If true, then the primary color is used on the radio button when selected. */
            primary: PropTypes.bool,
            /** If true, then the secondary color is used on the radio button when selected. */
            secondary: PropTypes.bool
        })
    ),
    /** If true, then the lower label will be red and errorMessage
     * will be used instead of lowerLabel.
     */
    error: PropTypes.bool,
    /** Will replace lowerLabel if error is true.  */
    errorMessage: PropTypes.string,
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

DigitRadioButtonGroup.defaultProps = {
    onBlur: () => {},
    name: "",
    upperLabel: "",
    lowerLabel: "",
    error: false,
    errorMessage: null,
    radioButtons: [],
    size: { width: "224px" }
};

export default DigitRadioButtonGroup;
