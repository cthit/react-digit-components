import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";

const DigitIconButton = ({
  disabled,
  onBlur,
  onClick,
  primary,
  secondary,
  icon
}) => (
  <IconButton
    disabled={disabled}
    onClick={onClick}
    onBlur={onBlur}
    color={primary ? "primary" : secondary ? "secondary" : "default"}
  >
    {React.createElement(icon, null)}
  </IconButton>
);

DigitIconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.func.isRequired
};

export default DigitIconButton;
