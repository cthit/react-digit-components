import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const DigitButton = ({
  text,
  onClick,
  primary,
  secondary,
  raised,
  disabled,
  submit,
  outlined
}) => (
  <Button
    type={submit ? "submit" : "button"}
    onClick={onClick}
    disabled={disabled}
    color={primary ? "primary" : secondary ? "secondary" : "default"}
    variant={raised ? "contained" : outlined ? "outlined" : "text"}
  >
    {text}
  </Button>
);

DigitButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  raised: PropTypes.bool,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  submit: PropTypes.bool
};

export default DigitButton;
