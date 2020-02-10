import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import React from "react";
import { Fill } from "../../styles/digit-layout/DigitLayout.styles";

const DigitTooltip = ({ render, text }) => (
    <Tooltip title={text}>
        <Fill>{render()}</Fill>
    </Tooltip>
);

DigitTooltip.displayName = "DigitTooltip";
DigitTooltip.propTypes = {
    /** The child element which is what you need to hover to show the text */
    render: PropTypes.func.isRequired,
    /** The hover text. */
    text: PropTypes.string.isRequired
};

export default DigitTooltip;
