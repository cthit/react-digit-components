import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Button } from "@material-ui/core";

const DigitFAB = ({
  onClick,
  disabled,
  primary,
  secondary,
  submit,
  component
}) => (
  <Button
    variant="fab"
    type={submit ? "submit" : "button"}
    disabled={disabled}
    onClick={onClick}
    color={primary ? "primary" : secondary ? "secondary" : "default"}
  >
    {React.createElement(component, null)}
  </Button>
);

DigitFAB.propTypes = {
  onClick: PropTypes.func,
  component: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  submit: PropTypes.bool
};

export default DigitFAB;
