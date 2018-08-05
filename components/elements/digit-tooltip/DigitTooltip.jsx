import React from "react";

import { Tooltip } from "@material-ui/core";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const DigitTooltip = ({ children, text }) => (
  <Tooltip title={text}>
    <Fill>{children}</Fill>
  </Tooltip>
);

export default DigitTooltip;
