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
  outline
}) => (
  <Button
    type={submit ? "submit" : "button"}
    onClick={onClick}
    disabled={disabled}
    color={primary ? "primary" : secondary ? "secondary" : "default"}
    variant={raised ? "contained" : outline ? "outlined" : "flat"}
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
  disabled: PropTypes.bool,
  submit: PropTypes.bool
};

export default DigitButton;
