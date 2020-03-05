import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

const DigitNavLink = ({
    text,
    link,
    onClick,
    icon,
    flex,
    alignSelf,
    size,
    padding,
    margin
}) => {
    const classes = useLayoutMaterialUi({ flex, alignSelf, size });

    return (
        <Link classes={classes} to={link}>
            <ListItem button>
                {icon && (
                    <ListItemIcon>{React.createElement(icon)}</ListItemIcon>
                )}
                <ListItemText onClick={onClick}>{text}</ListItemText>
            </ListItem>
        </Link>
    );
};

const Link = styled(NavLink)`
    text-decoration: none;
    color: black;
`;

DigitNavLink.displayName = "DigitNavLink";
DigitNavLink.propTypes = {
    /** The text display inside the link. */
    text: PropTypes.string.isRequired,
    /** The icon of the FAB. Use @material-ui/icons.  */
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
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
    onClick: () => {}
};

export default DigitNavLink;
