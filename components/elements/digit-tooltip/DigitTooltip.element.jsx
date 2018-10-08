import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "@material-ui/core";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const DigitTooltip = ({ children, text }) => (
  <Tooltip title={text}>
    <Fill>{children}</Fill>
  </Tooltip>
);

DigitTooltip.propTypes = {
  children: PropTypes.element.isRequired,
  text: PropTypes.text.isRequired
};

export default DigitTooltip;
