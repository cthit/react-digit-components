import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ListItemText, ListItem, ListItemIcon } from "@material-ui/core";

const DigitNavLink = ({ text, link, onClick, icon }) => (
  <Link to={link}>
    <ListItem button>
      {icon && <ListItemIcon>{React.createElement(icon)}</ListItemIcon>}
      <ListItemText onClick={onClick}>{text}</ListItemText>
    </ListItem>
  </Link>
);

const Link = styled(NavLink)`
  text-decoration: none;
`;

DigitNavLink.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.func,
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default DigitNavLink;
