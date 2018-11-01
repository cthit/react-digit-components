import { FormControlLabel } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const DigitControlLabelWithError = styled(({ error, ...props }) => (
  <FormControlLabel {...props} classes={{ label: "label" }} />
))`
  & .label {
    color: ${props => (props.error ? "#F44336" : "inherit")};
  }
`;

DigitControlLabelWithError.displayName = "DigitControlLabelWithError";
DigitControlLabelWithError.propTypes = {
  /** If true, changes the text color to red. */
  error: PropTypes.bool
};

export default DigitControlLabelWithError;
