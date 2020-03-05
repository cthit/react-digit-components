import React, { useState } from "react";
import useToggler from "../../hooks/use-toggler";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Padding, Row } from "../../styles/digit-layout/DigitLayout.styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import Radio from "@material-ui/core/Radio";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

const DigitListSelectSingle = ({
    title,
    items,
    dense,
    disablePadding,
    idProp,
    multipleExpanded,
    value,
    onChange,
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
    const [toggle, isExpanded] = useToggler(multipleExpanded);

    return (
        <List
            classes={classes}
            dense={dense}
            subheader={<ListSubheader component="div">{title}</ListSubheader>}
            component={"div"}
            disablePadding={disablePadding}
        >
            {items.map(item => (
                <React.Fragment key={item[idProp]}>
                    <ListItem
                        button
                        onClick={e => {
                            if (item.items == null) {
                                onChange({ target: { value: item[idProp] } });
                            } else {
                                toggle(item[idProp]);
                                e.preventDefault();
                            }
                        }}
                    >
                        <ListItemIcon>
                            <Row>
                                {item.items == null && (
                                    <Radio
                                        checked={value === item[idProp]}
                                        onChange={() => {}}
                                        color={
                                            item.primary
                                                ? "primary"
                                                : "secondary"
                                        }
                                        disabled={item.disabled}
                                    />
                                )}
                                {item.icon != null &&
                                    React.createElement(item.icon, null)}
                            </Row>
                        </ListItemIcon>

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
                                <DigitListSelectSingle
                                    items={item.items}
                                    dense={dense}
                                    disablePadding
                                    value={value}
                                    onChange={onChange}
                                    idProp={idProp}
                                    multipleExpanded={item.multipleExpanded}
                                />
                            </div>
                        </Collapse>
                    )}
                </React.Fragment>
            ))}
        </List>
    );
};

DigitListSelectSingle.defaultProps = {
    idProp: "text"
};

export default DigitListSelectSingle;
