import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Subtitle, Title } from "../digit-text/DigitText.styles";

/** Props:
 * width, height, maxWidth, maxHeight, minWidth, minHeight
 * absWidth, absHeight: If size, max and min will be the same.
 */
export const Card = styled(
  ({
    absWidth,
    absHeight,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    hasSubTitle,
    hasIcon,
    width,
    height,
    ...rest
  }) => <Paper {...rest} />
)`
  display: flex;
  flex-direction: column;

  width: ${props => (props.absWidth != null ? props.absWidth : props.width)};
  height: ${props =>
    props.absHeight != null ? props.absHeight : props.height};

  max-width: ${props =>
    props.absWidth != null ? props.absWidth : props.maxWidth};
  max-height: ${props =>
    props.absHeight != null ? props.absHeight : props.maxHeight};

  min-width: ${props =>
    props.absWidth != null ? props.absWidth : props.minWidth};
  min-height: ${props =>
    props.absHeight != null ? props.absHeight : props.minHeight};

  background-color: white;
`;

Card.displayName = "Card";
Card.propTypes = {
  /** Sets minWidth, maxWidth and width to absWidth */
  absWidth: PropTypes.string,
  /** Sets minHeight, maxHeight and height to absHeight */
  absHeight: PropTypes.string,
  /** minWidth of the card */
  minWidth: PropTypes.string,
  /** minHeight of the card */
  minHeight: PropTypes.string,
  /** maxWidth of the card */
  maxWidth: PropTypes.string,
  /** maxHeight of the card */
  maxHeight: PropTypes.string,
  /** width of the card */
  width: PropTypes.string,
  /** height of the card */
  height: PropTypes.string
};
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
  flex-direction: ${props => (props.reverseDirection ? "row-reverse" : "row")};
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
  text-decoration: none;
`;

Link.displayName = "Link";
