import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ListItemText, ListItem, ListItemIcon } from "@material-ui/core";

const DigitNavLink = ({ text, link, onClick, icon }) => (
  <Link to={link}>
      <ListItem button>
          {icon&&
          <ListItemIcon>
                {React.createElement(icon)}
          </ListItemIcon>}
          <ListItemText onClick={onClick}>{text}</ListItemText>
      </ListItem>
  </Link>
);

const Link = styled(NavLink)`
  text-decoration: none;
`;

export default DigitNavLink;
