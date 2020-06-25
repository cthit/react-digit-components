import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import useToggler from "../../hooks/use-toggler";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

const DigitList = ({
    title,
    items,
    onClick,
    dense,
    idProp,
    multipleExpanded,
    flex,
    alignSelf,
    justifySelf,
    size,
    padding,
    margin
}) => {
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        justifySelf,
        size,
        padding,
        margin
    });
    const [toggle, isExpanded] = useToggler(multipleExpanded);

    return (
        <List
            classes={classes}
            dense={dense}
            subheader={<ListSubheader component="div">{title}</ListSubheader>}
            component={"div"}
        >
            {items.map(item => (
                <React.Fragment key={item[idProp]}>
                    <ListItem
                        button={onClick != null}
                        onClick={e => {
                            if (onClick != null) {
                                onClick(item);
                            }
                        }}
                    >
                        {item.icon != null && (
                            <ListItemIcon>
                                {item.icon != null &&
                                    React.createElement(item.icon, null)}
                            </ListItemIcon>
                        )}

                        <ListItemText
                            primary={item.text}
                            secondary={
                                item.secondaryText != null
                                    ? item.secondaryText
                                    : null
                            }
                        />

                        {(item.items != null || item.actionIcon) != null && (
                            <ListItemSecondaryAction>
                                {item.actionIcon != null && (
                                    <IconButton
                                        edge="end"
                                        onClick={() => {
                                            if (item.actionOnClick != null) {
                                                item.actionOnClick(item);
                                            }
                                        }}
                                    >
                                        {React.createElement(
                                            item.actionIcon,
                                            null
                                        )}
                                    </IconButton>
                                )}
                                {item.items != null && (
                                    <IconButton
                                        edge="end"
                                        onClick={() => {
                                            toggle(item[idProp]);
                                        }}
                                    >
                                        {React.createElement(
                                            isExpanded(item[idProp])
                                                ? ExpandLess
                                                : ExpandMore
                                        )}
                                    </IconButton>
                                )}
                            </ListItemSecondaryAction>
                        )}
                    </ListItem>
                    {item.items != null && (
                        <Collapse
                            timeout="auto"
                            unmountOnExit
                            in={isExpanded(item[idProp])}
                        >
                            <div style={{ paddingLeft: "16px" }}>
                                <DigitList
                                    items={item.items}
                                    onClick={onClick}
                                    dense={dense}
                                    multipleExpanded={multipleExpanded}
                                    idProp={idProp}
                                />
                            </div>
                        </Collapse>
                    )}
                </React.Fragment>
            ))}
        </List>
    );
};

DigitList.propTypes = {
    /** A title above the list */
    title: PropTypes.string,
    /** Array of list items. Can be nested. */
    items: PropTypes.array,
    /** The function which will be called when the button has been pressed.*/
    onClick: PropTypes.func,
    /** If true, lessens the padding */
    dense: PropTypes.bool,
    /** The prop that represents a unique key for each item */
    idProp: PropTypes.string,
    /** If true, then multiple sub lists can be expanded at once. */
    multipleExpanded: PropTypes.bool,
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
    /** Controls the justifySelf property for the most outer element in this component. */
    justifySelf: PropTypes.oneOf([
        "enter",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "left",
        "right",
        "baseline",
        "inherit",
        "initial"
    ]),
    /** Controls the size for the most outer element in this component. You can set minWidth/Height, maxWidth/Height
     * and width/height via an object
     */
    size: PropTypes.bool,
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

DigitList.defaultProps = {
    title: "",
    items: [],
    onClick: () => {},
    dense: false,
    disablePadding: false,
    idProp: "text",
    multipleExpanded: false
};

export default DigitList;
