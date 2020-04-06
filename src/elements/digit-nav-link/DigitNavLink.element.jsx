import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";
import NavLink from "react-router-dom/NavLink";

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
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        size,
        padding,
        margin
    });

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
    onClick: PropTypes.func,
    /** Controls the flex property for the most outer element in this component.*/
    flex: PropTypes.string,
    /** Controls the alignSelf property for the most outer element in this component.*/
    alignSelf: PropTypes.oneOf([
        "auto",
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "baseline",
        "initial",
        "inherit"
    ]),
    /** Controls the size for the most outer element in this component. You can set minWidth/Height, maxWidth/Height
     * and width/height via an object
     */
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        minWidth: PropTypes.string,
        minHeight: PropTypes.string,
        maxWidth: PropTypes.string,
        maxHeight: PropTypes.string
    }),
    /** Padding property for the most outer element in this component.
     * It can either be a string, using the padding shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
    /** Margin property for the most outer element in this component.
     * It can either be a string, using the margin shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ])
};

DigitNavLink.defaultProps = {
    onClick: () => {},
    link: "/"
};

export default DigitNavLink;
