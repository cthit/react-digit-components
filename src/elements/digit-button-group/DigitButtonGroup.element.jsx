import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const DigitButtonGroup = ({
    buttons,
    raised,
    outlined,
    primary,
    secondary,
    disabled,
    small,
    large
}) => (
    <ButtonGroup
        variant={raised ? "contained" : outlined ? "outlined" : "text"}
        color={primary ? "primary" : secondary ? "secondary" : "inherit"}
        disabled={disabled}
        size={small ? "small" : large ? "large" : "medium"}
    >
        {buttons.map(button => (
            <Button
                disabled={button.disabled}
                startIcon={button.startIcon}
                endIcon={button.endIcon}
                onClick={button.onClick}
            >
                {button.text}
            </Button>
        ))}
    </ButtonGroup>
);

DigitButtonGroup.defaultProps = {
    buttons: []
};

export default DigitButtonGroup;
