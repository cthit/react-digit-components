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

DigitNavLink.displayName = "DigitNavLink";
DigitNavLink.propTypes = {
  /** The text display inside the link. */
  text: PropTypes.string.isRequired,
  /** The icon of the FAB. Use @material-ui/icons.  */
  icon: PropTypes.func,
  /** The redirect link. Should be relative to the root.
   * Do not include the website url.
   */
  link: PropTypes.string.isRequired,
  /** When the link is clicked, this is called.
   * It is useful to call closeDrawer from DigitHeaders renderDrawer function
   * to close the drawer when a user clicks on a link.
   */
  onClick: PropTypes.func
};

DigitNavLink.defaultProps = {
  icon: () => null,
  onClick: () => {}
};

export default DigitNavLink;
