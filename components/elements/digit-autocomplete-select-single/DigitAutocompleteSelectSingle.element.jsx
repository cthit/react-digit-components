import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Select from "react-select";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NoSsr from "@material-ui/core/NoSsr";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import CancelIcon from "@material-ui/icons/Cancel";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import DigitChip from "../digit-chip";
import { Text } from "../../styles/digit-text/DigitText.styles";

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
        marginTop: theme.spacing.unit
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
            placeholder=""
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
            onDelete={props.removeProps.onClick}
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

class DigitAutocompleteSelectSingle extends React.Component {
    state = {
        menuIsOpen: false
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
            filled,
            outlined,
            upperLabel,
            lowerLabel,
            error,
            errorMessage,
            name,
            selectableValues
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

        return (
            <NoSsr>
                <Select
                    name={name}
                    classes={classes}
                    styles={selectStyles}
                    options={selectableValues}
                    components={components}
                    value={value}
                    onChange={onChange}
                    placeholder=""
                    menuIsOpen={menuIsOpen}
                    onMenuOpen={() => {
                        this.onMenuIsOpenChange(true);
                    }}
                    onMenuClose={() => {
                        this.onMenuIsOpenChange(false);
                    }}
                    textFieldProps={{
                        label: upperLabel,
                        helperText:
                            error && errorMessage != null
                                ? errorMessage
                                : lowerLabel,
                        InputLabelProps: {
                            shrink: value !== "" || this.state.singleOpen
                        },
                        variant: filled
                            ? "filled"
                            : outlined
                            ? "outlined"
                            : "standard"
                    }}
                />
            </NoSsr>
        );
    }
}

DigitAutocompleteSelectSingle.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
    DigitAutocompleteSelectSingle
);
