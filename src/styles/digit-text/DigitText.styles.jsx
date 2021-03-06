import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export const Heading1 = styled(
    ({ text, white, alignCenter, alignRight, ...rest }) => (
        <Typography {...rest} variant="h1" component="h2">
            {text}
        </Typography>
    )
)`
    color: ${props => (props.white ? "white" : "")} !important;
    font-size: 6rem;
    font-weight: 900;
    text-align: ${props =>
        props.alignCenter ? "center" : props.alignRight ? "right" : "left"};
`;

Heading1.displayName = "Heading1";
Heading1.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Makes the text white if true */
    white: PropTypes.bool,
    /** text-align: center */
    alignCenter: PropTypes.bool,
    /** text-align: right */
    alignRight: PropTypes.bool
};

export const Heading2 = styled(
    ({ text, white, alignCenter, alignRight, ...rest }) => (
        <Typography {...rest} variant="h2">
            {text}
        </Typography>
    )
)`
    color: ${props => (props.white ? "white" : "")} !important;
    font-size: 3.75rem;
    font-weight: 900;
    text-align: ${props =>
        props.alignCenter ? "center" : props.alignRight ? "right" : "left"};
`;

Heading2.displayName = "Heading2";
Heading2.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Makes the text white if true */
    white: PropTypes.bool,
    /** text-align: center */
    alignCenter: PropTypes.bool,
    /** text-align: right */
    alignRight: PropTypes.bool
};

export const Heading3 = styled(
    ({ text, white, alignCenter, alignRight, ...rest }) => (
        <Typography {...rest} variant="h3">
            {text}
        </Typography>
    )
)`
    color: ${props => (props.white ? "white" : "")} !important;
    font-size: 3rem;
    font-weight: 900;
    text-align: ${props =>
        props.alignCenter ? "center" : props.alignRight ? "right" : "left"};
`;

Heading3.displayName = "Heading3";
Heading3.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Makes the text white if true */
    white: PropTypes.bool,
    /** text-align: center */
    alignCenter: PropTypes.bool,
    /** text-align: right */
    alignRight: PropTypes.bool
};

export const Heading4 = styled(
    ({ text, white, alignCenter, alignRight, ...rest }) => (
        <Typography {...rest} variant="h4">
            {text}
        </Typography>
    )
)`
    color: ${props => (props.white ? "white" : "")} !important;
    font-size: 2.125rem;
    font-weight: 900;
    text-align: ${props =>
        props.alignCenter ? "center" : props.alignRight ? "right" : "left"};
`;

Heading4.displayName = "Heading4";
Heading4.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Makes the text white if true */
    white: PropTypes.bool,
    /** text-align: center */
    alignCenter: PropTypes.bool,
    /** text-align: right */
    alignRight: PropTypes.bool
};

export const Heading5 = styled(
    ({ text, white, alignCenter, alignRight, ...rest }) => (
        <Typography {...rest} variant="h5">
            {text}
        </Typography>
    )
)`
    color: ${props => (props.white ? "white" : "")} !important;
    font-size: 1.5rem;
    font-weight: 900;
    text-align: ${props =>
        props.alignCenter ? "center" : props.alignRight ? "right" : "left"};
`;

Heading5.displayName = "Heading5";
Heading5.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Makes the text white if true */
    white: PropTypes.bool,
    /** text-align: center */
    alignCenter: PropTypes.bool,
    /** text-align: right */
    alignRight: PropTypes.bool
};

export const Heading6 = styled(
    ({ text, white, alignCenter, alignRight, ...rest }) => (
        <Typography {...rest} variant="h6">
            {text}
        </Typography>
    )
)`
    color: ${props => (props.white ? "white" : "")} !important;
    font-size: 1.25rem;
    font-weight: 900;
    text-align: ${props =>
        props.alignCenter ? "center" : props.alignRight ? "right" : "left"};
`;

Heading6.displayName = "Heading6";
Heading6.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Makes the text white if true */
    white: PropTypes.bool,
    /** text-align: center */
    alignCenter: PropTypes.bool,
    /** text-align: right */
    alignRight: PropTypes.bool
};

export const Title = styled(
    ({ text, white, alignCenter, alignRight, ...rest }) => (
        <Typography {...rest} variant="h6">
            {text}
        </Typography>
    )
)`
    color: ${props => (props.white ? "white" : "")} !important;
    font-size: 1.25rem;
    font-weight: 900;
    text-align: ${props =>
        props.alignCenter ? "center" : props.alignRight ? "right" : "left"};
`;

Title.displayName = "Title";
Title.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Makes the text white if true */
    white: PropTypes.bool,
    /** text-align: center */
    alignCenter: PropTypes.bool,
    /** text-align: right */
    alignRight: PropTypes.bool
};

export const Subtitle = styled(
    ({ text, white, alignCenter, alignRight, ...rest }) => (
        <Typography {...rest} variant="subtitle1">
            {text}
        </Typography>
    )
)`
    color: ${props => (props.white ? "white" : "")} !important;
    font-size: 1rem;
    text-align: ${props =>
        props.alignCenter ? "center" : props.alignRight ? "right" : "left"};
`;

Subtitle.displayName = "Subtitle";
Subtitle.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Makes the text white if true */
    white: PropTypes.bool,
    /** text-align: center */
    alignCenter: PropTypes.bool,
    /** text-align: right */
    alignRight: PropTypes.bool
};

export const Subtitle2 = styled(
    ({ text, white, alignCenter, alignRight, ...rest }) => (
        <Typography {...rest} variant="subtitle2">
            {text}
        </Typography>
    )
)`
    color: ${props => (props.white ? "white" : "")} !important;
    font-size: 0.875rem;
    text-align: ${props =>
        props.alignCenter ? "center" : props.alignRight ? "right" : "left"};
`;

Subtitle2.displayName = "Subtitle2";
Subtitle2.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Makes the text white if true */
    white: PropTypes.bool,
    /** text-align: center */
    alignCenter: PropTypes.bool,
    /** text-align: right */
    alignRight: PropTypes.bool
};

export const Text = styled(
    ({
        text,
        white,
        bold,
        italic,
        alignCenter,
        alignRight,
        inline,
        wordBreak,
        ...rest
    }) => (
        <Typography {...rest} variant="body1">
            {text}
        </Typography>
    )
)`
    display: ${props => (props.inline ? "inline-block" : "block")};
    font-size: 1rem;
    color: ${props => (props.white ? "white" : "")} !important;
    font-weight: ${props => (props.bold ? "900" : "inherit")};
    font-style: ${props => (props.italic ? "italic" : "normal")};
    text-align: ${props =>
        props.alignCenter ? "center" : props.alignRight ? "right" : "left"};
    word-break: ${props => (props.wordBreak ? props.wordBreak : "break-word")};
`;

Text.displayName = "Text";
Text.propTypes = {
    /** The text. */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Makes the text white if true */
    white: PropTypes.bool,
    /** Makes the text bold if true */
    bold: PropTypes.bool,
    /** text-align: center */
    alignCenter: PropTypes.bool,
    /** text-align: right */
    alignRight: PropTypes.bool
};
