import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "@material-ui/core";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const DigitTooltip = ({ children, text }) => (
  <Tooltip title={text}>
    <Fill>{children}</Fill>
  </Tooltip>
);

DigitTooltip.displayName = "DigitTooltip";
DigitTooltip.propTypes = {
  children: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired
};

export default DigitTooltip;
