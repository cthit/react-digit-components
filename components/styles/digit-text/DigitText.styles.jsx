import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const Display = styled(({ text, white, ...rest }) => (
  <Typography {...rest} variant="display2">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white" : "")};
`;

export const Heading = styled(({ text, white, ...rest }) => (
  <Typography {...rest} variant="headline">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white" : "")};
`;

export const Heading1 = styled(({ text, white, ...rest }) => (
  <Heading text={text} {...rest} variant="headline" />
))`
  font-size: 2em;
`;

export const Heading2 = styled(({ text, white, ...rest }) => (
  <Heading text={text} {...rest} variant="headline" />
))`
  font-size: 1.5em;
`;

export const Heading3 = styled(({ text, white, ...rest }) => (
  <Heading text={text} {...rest} variant="headline" />
))`
  font-size: 1.17em;
`;

export const Heading4 = styled(({ text, white, ...rest }) => (
  <Heading text={text} {...rest} variant="headline" />
))`
  font-size: 1em;
`;

export const Heading5 = styled(({ text, white, ...rest }) => (
  <Heading text={text} {...rest} variant="headline" />
))`
  font-size: 0.83em;
`;

export const Heading6 = styled(({ text, white, ...rest }) => (
  <Heading text={text} {...rest} variant="headline" />
))`
  font-size: 0.75em;
`;

export const Title = styled(({ text, white, bold, ...rest }) => (
  <Typography {...rest} variant="title">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white !important" : "inherit")};
  font-weight: ${props => (props.bold ? "500" : "inherit")};
`;

export const Subtitle = styled(({ text, white, ...rest }) => (
  <Typography {...rest} variant="subheading">
    {text}
  </Typography>
))`
  color: ${props => (props.white ? "white" : "")};
`;

export const Text = styled(({ text, white, bold, ...rest }) => (
  <Typography {...rest} variant="body1">
    {text}
  </Typography>
))`
  font-size: 16px;
  color: ${props => (props.white ? "white" : "")};
  font-weight: ${props => (props.bold ? "500" : "inherit")};
`;
