import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Subtitle, Title } from "../digit-text/DigitText.styles";
import { Flex } from "../digit-layout/DigitLayout.styles";

export const Card = styled(({ alignSelf, ...rest }) => <Paper {...rest} />)`
    display: flex;
    flex-direction: column;
    flex: ${props => props.flex || "0 1 auto"};
    align-self: ${props => props.alignSelf || "auto"};

    width: ${props => props.size.width || "auto"};
    height: ${props => props.size.height || "auto"};

    max-width: ${props => props.size.maxWidth || "none"};
    max-height: ${props => props.size.maxHeight || "none"};

    min-width: ${props => props.size.minWidth || 0};
    min-height: ${props => props.size.minHeight || 0};

    padding: ${({ padding = "" }) =>
        (typeof padding === "string"
            ? padding
            : (padding.top || "0px") +
              " " +
              (padding.right || "0px") +
              " " +
              (padding.bottom || "0px") +
              " " +
              (padding.left || "0px")) + " !important"};

    margin: ${({ margin = "" }) =>
        (typeof margin === "string"
            ? margin
            : (margin.top || "0px") +
              " " +
              (margin.right || "0px") +
              " " +
              (margin.bottom || "0px") +
              " " +
              (margin.left || "0px")) + " !important"};

    background-color: white;
`;

Card.displayName = "Card";
Card.defaultProps = {
    size: {}
};

/**
 * use this hasSubtitle and hasIcon must be true if you have them inside your Card.
 */
export const CardHeader = styled(({ hasSubtitle, hasIcon, ...rest }) => (
    <div {...rest} />
))`
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    display: grid;

    grid-template-columns: ${props =>
        props.hasIcon ? "40px auto 32px" : "0px auto 32px"};

    grid-template-rows: ${props =>
        props.hasSubtitle ? "33px auto auto" : "33px 0px auto"};
`;

CardHeader.displayName = "CardHeader";
CardHeader.propTypes = {
    /** If you want to have a sub title, set this to true */
    hasSubtitle: PropTypes.bool,
    /** If you want to have a icon, set this to true */
    hasIcon: PropTypes.bool
};

export const CardHeaderImage = styled.img`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;

    width: 100%;
    height: 200px;
    object-fit: cover;
`;

CardHeaderImage.displayName = "CardHeaderImage";

export const CardIcon = styled.img`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;

    width: 100%;
    height: 100%;
    object-fit: contain;
`;

CardIcon.displayName = "CardIcon";

export const CardMenuContainer = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
`;

CardMenuContainer.displayName = "CardMenuContainer";

export const CardTitle = styled(Title)`
    font-size: 20px;
    line-height: 33px;

    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
`;

CardTitle.displayName = "CardTitle";

export const CardSubtitle = styled(Subtitle)`
    font-size: 15px;
    line-height: 25px;

    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;

    color: ${({ theme }) => theme.textColorSecondary};
`;

CardSubtitle.displayName = "CardSubtitle";

export const CardBody = styled(Flex)`
    flex: 1;

    display: flex;
    flex-direction: column;
    padding: 16px !important;
`;

CardBody.displayName = "CardBody";

export const CardButtons = styled.div`
    padding: 16px;
    min-height: 50px;
    height: 50px;
    max-height: 50px;

    display: flex;
    flex-direction: ${props =>
        props.reverseDirection ? "row-reverse" : "row"};
    justify-content: ${props =>
        props.leftRight ? "space-between" : "flex-start"};

    align-items: center;
`;

CardButtons.displayName = "CardButtons";
CardButtons.propTypes = {
    /** If true, then the align and order is reversed */
    reverseDirection: PropTypes.bool,
    /** Recommended to only use when you have two buttons. If true, and you have
     * two buttons, then this will have one button to the left and one to the right.
     */
    leftRight: PropTypes.bool
};

export const Divider = styled.hr`
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

Divider.displayName = "Divider";

export const Link = styled(NavLink)`
    color: inherit;
    text-decoration: none;
`;

Link.displayName = "Link";
