import React, { useEffect, useState } from "react";
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
import Checkbox from "@material-ui/core/Checkbox";
import xor from "lodash/xor";

const DigitListSelectMultiple = ({
    title,
    items,
    dense,
    disablePadding,
    idProp,
    multipleExpanded,
    value,
    onChange,
    nodeSelectsAllChildren,
    includeNodeValue
}) => {
    const [toggle, isExpanded] = useToggler(multipleExpanded);

    const toggleValue = id => {
        const newValue = xor([...value], [id]);
        onChange({ target: { value: newValue } });
    };

    const addAllValuesAs = (ids, bol) => {
        onChange({
            target: {
                value: bol
                    ? [...ids, ...value]
                    : [...value].filter(v => !ids.includes(v))
            }
        });
    };

    const getAllSubItemIds = item => {
        return [
            item[idProp],
            ...(item.items != null
                ? item.items.reduce((a, i) => a.concat(getAllSubItemIds(i)), [])
                : [])
        ];
    };

    return (
        <List
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
                        button
                        onClick={e => {
                            if (item.items == null) {
                                toggleValue(item[idProp]);
                            } else if (nodeSelectsAllChildren) {
                                addAllValuesAs(
                                    getAllSubItemIds(item),
                                    !value.includes(item[idProp])
                                );
                            } else {
                                toggle(item[idProp]);
                                e.preventDefault();
                            }
                        }}
                    >
                        <ListItemIcon>
                            <Row>
                                {(item.items == null ||
                                    nodeSelectsAllChildren) && (
                                    <Checkbox
                                        checked={value.includes(item[idProp])}
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
                                <DigitListSelectMultiple
                                    items={item.items}
                                    multipleExpanded={item.multipleExpanded}
                                    dense={dense}
                                    disablePadding
                                    value={value}
                                    onChange={onChange}
                                    idProp={idProp}
                                    nodeSelectsAllChildren={
                                        nodeSelectsAllChildren
                                    }
                                />
                            </div>
                        </Collapse>
                    )}
                </React.Fragment>
            ))}
        </List>
    );
};

DigitListSelectMultiple.defaultProps = {
    idProp: "text",
    value: []
};

export default DigitListSelectMultiple;
