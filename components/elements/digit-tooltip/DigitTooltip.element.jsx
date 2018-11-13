import { Tooltip } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const DigitTooltip = ({ children, text }) => (
    <Tooltip title={text}>
        <Fill>{children}</Fill>
    </Tooltip>
);

DigitTooltip.displayName = "DigitTooltip";
DigitTooltip.propTypes = {
    /** The child element which is what you need to hover to show the text */
    children: PropTypes.element.isRequired,
    /** The hover text. */
    text: PropTypes.string.isRequired
};

export default DigitTooltip;
