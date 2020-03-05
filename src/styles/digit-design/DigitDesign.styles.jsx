import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Subtitle, Title } from "../digit-text/DigitText.styles";

export const Card = styled(
    ({ hasSubTitle, hasIcon, flex, alignSelf, size, ...rest }) => (
        <Paper {...rest} />
    )
)`
    display: flex;
    flex-direction: column;
    flex: ${props => props.flex || "0 1 auto"};
    align-self: ${props => props.alignSelf || "auto"};

    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};

    max-width: ${props => props.maxWidth || "none"};
    max-height: ${props => props.maxHeight || "none"};

    min-width: ${props => props.minWidth || 0};
    min-height: ${props => props.minHeight || 0};

    padding: ${({ padding = "0px" }) =>
        (typeof padding === "string"
            ? padding
            : (padding.top || "0px") +
              " " +
              (padding.right || "0px") +
              " " +
              (padding.bottom || "0px") +
              " " +
              (padding.left || "0px")) + " !important"};

    margin: ${({ margin = "4px" }) =>
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

/**
 * use this hasSubTitle and hasIcon must be true if you have them inside your Card.
 */
export const CardHeader = styled.div`
  padding: 8px;
  display: grid;

  grid-template-columns: ${props =>
      props.hasIcon ? "40px auto 32px" : "0px auto 32px"}

  grid-template-rows: ${props =>
      props.hasSubTitle ? "33px 25px auto" : "33px 0px auto"};
`;

CardHeader.displayName = "CardHeader";
CardHeader.propTypes = {
    /** If you want to have a sub title, set this to true */
    hasSubTitle: PropTypes.bool,
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

    margin: 0;
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 8px;

    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
`;

CardTitle.displayName = "CardTitle";

export const CardSubTitle = styled(Subtitle)`
    font-size: 15px;
    line-height: 25px;

    margin: 0;
    margin-left: 8px;
    margin-right: 8px;

    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;

    color: ${({ theme }) => theme.textColorSecondary};
`;

CardSubTitle.displayName = "CardSubTitle";

export const CardBody = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    padding: 8px;
`;

CardBody.displayName = "CardBody";

export const CardButtons = styled.div`
    padding: 8px;
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
