import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import React from "react";

const DigitTooltip = ({ render, text }) => (
    <Tooltip title={text}>{render()}</Tooltip>
);

DigitTooltip.displayName = "DigitTooltip";
DigitTooltip.propTypes = {
    /** The child element which is what you need to hover to show the text */
    render: PropTypes.func.isRequired,
    /** The hover text. */
    text: PropTypes.string.isRequired
};

export default DigitTooltip;
