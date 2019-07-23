import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

class DigitTextArea extends React.Component {
    render() {
        const {
            value,
            onChange,
            onBlur,
            upperLabel,
            lowerLabel,
            name,
            error,
            errorMessage,
            disabled,
            rows,
            rowsMax,
            outlined,
            filled
        } = this.props;
        return (
            <Fill>
                <FormControl
                    variant={
                        outlined ? "outlined" : filled ? "filled" : "standard"
                    }
                    error={error}
                >
                    <InputLabel
                        ref={ref => {
                            this.labelRef = ReactDOM.findDOMNode(ref);
                        }}
                    >
                        {upperLabel}
                    </InputLabel>

                    <DigitIfElseRendering
                        test={outlined != null && outlined}
                        ifRender={() => (
                            <OutlinedInput
                                name={name}
                                labelWidth={
                                    this.labelRef
                                        ? this.labelRef.offsetWidth
                                        : 0
                                }
                                value={value || ""}
                                onChange={onChange}
                                onBlur={onBlur}
                                disabled={disabled}
                                rows={rows}
                                rowsMax={rowsMax}
                                multiline
                            />
                        )}
                    />

                    <DigitIfElseRendering
                        test={filled != null && filled}
                        ifRender={() => (
                            <FilledInput
                                name={name}
                                value={value != null ? value : ""}
                                onChange={onChange}
                                onBlur={onBlur}
                                disabled={disabled}
                                rows={rows}
                                rowsMax={rowsMax}
                                multiline
                            />
                        )}
                    />

                    <DigitIfElseRendering
                        test={!filled && !outlined}
                        ifRender={() => (
                            <Input
                                name={name}
                                value={value != null ? value : ""}
                                onChange={onChange}
                                onBlur={onBlur}
                                disabled={disabled}
                                rows={rows}
                                rowsMax={rowsMax}
                                multiline
                            />
                        )}
                    />

                    <FormHelperText>
                        {error && errorMessage != null
                            ? errorMessage
                            : lowerLabel != null
                            ? lowerLabel
                            : ""}
                    </FormHelperText>
                </FormControl>
            </Fill>
        );
    }
}

DigitTextArea.displayName = "DigitTextArea";
DigitTextArea.propTypes = {
    /** The value of the text area. Note that this
     * element is uncontrolled, meaning you have to store
     * the value of the text area yourself. For updates of the value,
     * use the onChange function.
     */
    value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    /** This function will be called when the input changes.
     * The first argument is the event. To get the new value,
     * use e.target.value.
     */
    onChange: PropTypes.func.isRequired,
    /** The onBlur event occurs when DigitTextArea loses focus. */
    onBlur: PropTypes.func,
    /** The text label over the DigitSelect */
    upperLabel: PropTypes.string,
    /** The text label under the DigitSelect */
    lowerLabel: PropTypes.string,
    /** A unique name relative to a form. e.g. pizzaTopping or attendanceYear.*/
    name: PropTypes.string,
    /** If true, then errorMessage will be shown instead of lowerLabel */
    error: PropTypes.bool,
    /** If error is true, then this errorMessage will be shown instead of lowerLabel */
    errorMessage: PropTypes.string,
    /** If true, then you can't edit this text area. */
    disabled: PropTypes.bool,
    /** The least amount of rows for this text area. */
    rows: PropTypes.number,
    /** The max amount of rows for this text area. After
     * the text area has hit this amount of rows, it will begin to
     * scroll instead of expanding.
     */
    rowsMax: PropTypes.number,
    /**
     * Adds an outline around the text area in black color.
     */
    outlined: PropTypes.bool,
    /** Adds a grey isch background */
    filled: PropTypes.bool
};

DigitTextArea.defaultProps = {
    onBlur: () => {},
    upperLabel: "",
    lowerLabel: "",
    name: "",
    error: false,
    errorMessage: null,
    disabled: false,
    outlined: false,
    filled: false,
    rows: 3,
    rowsMax: 6
};

export default DigitTextArea;
