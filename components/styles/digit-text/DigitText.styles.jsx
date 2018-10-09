import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const Heading1 = styled(({ text, white, ...rest }) => (
  <Typography {...rest} variant="h1" component="h2">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white" : "")};
  font-weight: 900;
`;

Heading1.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  white: PropTypes.bool
};

export const Heading2 = styled(({ text, white, ...rest }) => (
  <Typography {...rest} variant="h2">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white" : "")};
  font-weight: 900;
`;

Heading2.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  white: PropTypes.bool
};

export const Heading3 = styled(({ text, white, ...rest }) => (
  <Typography {...rest} variant="h3">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white" : "")};
  font-weight: 900;
`;

Heading3.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  white: PropTypes.bool
};

export const Heading4 = styled(({ text, white, ...rest }) => (
  <Typography {...rest} variant="h4">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white" : "")};
  font-weight: 900;
`;

Heading4.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  white: PropTypes.bool
};

export const Heading5 = styled(({ text, white, ...rest }) => (
  <Typography {...rest} variant="h5">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white" : "")};
  font-weight: 900;
`;

Heading5.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  white: PropTypes.bool
};

export const Heading6 = styled(({ text, white, ...rest }) => (
  <Typography {...rest} variant="h6">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white" : "")};
  font-weight: 900;
`;

Heading6.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  white: PropTypes.bool
};

export const Title = styled(({ text, white, ...rest }) => (
  <Typography {...rest} variant="h6">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white" : "")};
  font-weight: 900;
`;

Title.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  white: PropTypes.bool
};

export const Subtitle = styled(({ text, white, ...rest }) => (
  <Typography {...rest} variant="subtitle1">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white" : "")};
`;

Subtitle.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  white: PropTypes.bool
};

export const Subtitle2 = styled(({ text, white, ...rest }) => (
  <Typography {...rest} variant="subtitle2">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white" : "")};
`;

Subtitle2.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  white: PropTypes.bool
};

export const Text = styled(({ text, white, bold, ...rest }) => (
  <Typography {...rest} variant="body1">
    {text}
  </Typography>
))`
  font-size: 16px;
  color: ${props => (props.white ? "white" : "")};
  font-weight: ${props => (props.bold ? "500" : "inherit")};
`;

Text.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  white: PropTypes.bool,
  bold: PropTypes.bool
};
