import React from "react";
import Select from "react-select";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import CancelIcon from "@material-ui/icons/Cancel";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import DigitChip from "../digit-chip";
import { Text } from "../../styles/digit-text/DigitText.styles";
import { DigitLayout } from "../../";
import * as _ from "lodash";

const styles = theme => ({
    container: {
        display: "flex"
    },
    input: {
        display: "flex"
    },
    valueContainer: {
        display: "flex",
        flexWrap: "wrap",
        flex: 1,
        alignItems: "center",
        overflow: "hidden"
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
    },
    paper: {
        position: "absolute",
        zIndex: 1,
        top: "75%",
        bottom: "auto"
    }
});

function NoOptionsMessage(props) {
    return <Text text={props.children} />;
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

function Control(props) {
    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    inputRef: props.innerRef,
                    children: props.children,
                    ...props.innerProps
                }
            }}
            {...props.selectProps.textFieldProps}
        />
    );
}

function Option(props) {
    return (
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

function SingleValue(props) {
    return <Text text={props.children} />;
}

function ValueContainer(props) {
    return (
        <div className={props.selectProps.classes.valueContainer}>
            {props.children}
        </div>
    );
}

function MultiValue(props) {
    return (
        <DigitChip
            label={props.children}
            onDelete={!props.isDisabled ? props.removeProps.onClick : null}
            deleteIcon={<CancelIcon {...props.removeProps} />}
        />
    );
}

function Menu(props) {
    return (
        <Paper
            square
            className={props.selectProps.classes.paper}
            {...props.innerProps}
        >
            {props.children}
        </Paper>
    );
}

const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    SingleValue,
    ValueContainer
};

class DigitAutocompleteSelectMultiple extends React.Component {
    state = {
        menuIsOpen: false,
        height: 0
    };

    onMenuIsOpenChange = open => {
        this.setState({
            menuIsOpen: open
        });
    };

    render() {
        const {
            classes,
            theme,
            value,
            onChange,
            upperLabel,
            lowerLabel,
            error,
            errorMessage,
            name,
            selectableValues,
            disabled
        } = this.props;

        const { menuIsOpen } = this.state;

        const selectStyles = {
            container: () => ({
                display: "flex",
                flex: 1
            }),
            input: base => ({
                ...base,
                color: theme.palette.text.primary
            })
        };

        const selectedValueObjects = value.map(value =>
            _.find(selectableValues, { value })
        );

        return (
            <Select
                name={name}
                classes={classes}
                styles={selectStyles}
                options={selectableValues}
                components={components}
                value={selectedValueObjects}
                onChange={e => {
                    onChange({
                        target: {
                            value: e.map(value => value.value)
                        }
                    });
                }}
                isMulti
                placeholder=""
                menuIsOpen={menuIsOpen}
                onMenuOpen={() => {
                    this.onMenuIsOpenChange(true);
                }}
                onMenuClose={() => {
                    this.onMenuIsOpenChange(false);
                }}
                isDisabled={disabled}
                textFieldProps={{
                    label: upperLabel,
                    error: error,
                    disabled: disabled,
                    helperText:
                        error && errorMessage != null
                            ? errorMessage
                            : lowerLabel,
                    InputLabelProps: {
                        shrink:
                            (value != null && value.length > 0) ||
                            this.state.multipleOpen
                    }
                }}
            />
        );
    }
}

export default withStyles(styles, { withTheme: true })(
    DigitAutocompleteSelectMultiple
);
