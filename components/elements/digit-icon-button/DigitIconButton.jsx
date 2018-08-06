import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";

const DigitIconButton = ({
  disabled,
  onBlur,
  onClick,
  primary,
  secondary,
  component
}) => (
  <IconButton
    disabled={disabled}
    onClick={onClick}
    onBlur={onBlur}
    color={primary ? "primary" : secondary ? "secondary" : "default"}
  >
    {React.createElement(component, null)}
  </IconButton>
);

DigitIconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool
};

export default DigitIconButton;
