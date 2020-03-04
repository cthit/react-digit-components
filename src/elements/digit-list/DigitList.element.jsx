import React, { useState } from "react";
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
import { Padding } from "../../styles/digit-layout/DigitLayout.styles";
import useToggler from "../../hooks/use-toggler";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

const DigitList = ({
    title,
    items,
    onClick,
    dense,
    disablePadding,
    idProp,
    multipleExpanded,
    flex,
    alignSelf,
    size
}) => {
    const classes = useLayoutMaterialUi({ flex, alignSelf, size });
    const [toggle, isExpanded] = useToggler(multipleExpanded);

    return (
        <List
            classes={classes}
            dense={dense}
            subheader={
                <ListSubheader component="div">
                    <Padding>{title}</Padding>
                </ListSubheader>
            }
            component={"div"}
            disablePadding={disablePadding}
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
                                    disablePadding
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

DigitList.defaultProps = {
    idProp: "text"
};

export default DigitList;
