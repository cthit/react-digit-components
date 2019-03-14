import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export const Heading1 = styled(({ text, white, ...rest }) => (
    <Typography {...rest} variant="h1" component="h2">
        {text}
    </Typography>
))`
    color: ${props => (props.white ? "white" : "")};
    font-size: 6rem;
    font-weight: 900;
`;

Heading1.displayName = "Heading1";
Heading1.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** Makes the text white if true */
    white: PropTypes.bool
};

export const Heading2 = styled(({ text, white, ...rest }) => (
    <Typography {...rest} variant="h2">
        {text}
    </Typography>
))`
    color: ${props => (props.white ? "white" : "")};
    font-size: 3.75rem;
    font-weight: 900;
`;

Heading2.displayName = "Heading2";
Heading2.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** Makes the text white if true */
    white: PropTypes.bool
};

export const Heading3 = styled(({ text, white, ...rest }) => (
    <Typography {...rest} variant="h3">
        {text}
    </Typography>
))`
    color: ${props => (props.white ? "white" : "")};
    font-size: 3rem;
    font-weight: 900;
`;

Heading3.displayName = "Heading3";
Heading3.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** Makes the text white if true */
    white: PropTypes.bool
};

export const Heading4 = styled(({ text, white, ...rest }) => (
    <Typography {...rest} variant="h4">
        {text}
    </Typography>
))`
    color: ${props => (props.white ? "white" : "")};
    font-size: 2.125rem;
    font-weight: 900;
`;

Heading4.displayName = "Heading4";
Heading4.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** Makes the text white if true */
    white: PropTypes.bool
};

export const Heading5 = styled(({ text, white, ...rest }) => (
    <Typography {...rest} variant="h5">
        {text}
    </Typography>
))`
    color: ${props => (props.white ? "white" : "")};
    font-size: 1.5rem;
    font-weight: 900;
`;

Heading5.displayName = "Heading5";
Heading5.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** Makes the text white if true */
    white: PropTypes.bool
};

export const Heading6 = styled(({ text, white, ...rest }) => (
    <Typography {...rest} variant="h6">
        {text}
    </Typography>
))`
    color: ${props => (props.white ? "white" : "")};
    font-size: 1.25rem;
    font-weight: 900;
`;

Heading6.displayName = "Heading6";
Heading6.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** Makes the text white if true */
    white: PropTypes.bool
};

export const Title = styled(({ text, white, ...rest }) => (
    <Typography {...rest} variant="h6">
        {text}
    </Typography>
))`
    color: ${props => (props.white ? "white" : "")};
    font-size: 1.25rem;
    font-weight: 900;
`;

Title.displayName = "Title";
Title.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** Makes the text white if true */
    white: PropTypes.bool
};

export const Subtitle = styled(({ text, white, ...rest }) => (
    <Typography {...rest} variant="subtitle1">
        {text}
    </Typography>
))`
    color: ${props => (props.white ? "white" : "")};
    font-size: 1rem;
`;

Subtitle.displayName = "Subtitle";
Subtitle.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** Makes the text white if true */
    white: PropTypes.bool
};

export const Subtitle2 = styled(({ text, white, ...rest }) => (
    <Typography {...rest} variant="subtitle2">
        {text}
    </Typography>
))`
    color: ${props => (props.white ? "white" : "")};
    font-size: 0.875rem;
`;

Subtitle2.displayName = "Subtitle2";
Subtitle2.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** Makes the text white if true */
    white: PropTypes.bool
};

export const Text = styled(({ text, white, bold, ...rest }) => (
    <Typography {...rest} variant="body1">
        {text}
    </Typography>
))`
    font-size: 1rem;
    color: ${props => (props.white ? "white" : "")};
    font-weight: ${props => (props.bold ? "900" : "inherit")};
`;

Text.displayName = "Text";
Text.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** Makes the text white if true */
    white: PropTypes.bool,
    /** Makes the text bold if true */
    bold: PropTypes.bool
};
