import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import find from "lodash/find";
import findIndex from "lodash/findIndex";

const DigitList = ({
    title,
    items,
    onClick,
    dense,
    disablePadding,
    value,
    onChange,
    multipleSelect
}) => {
    const [openIndex, setOpenIndex] = useState(null); //index on items

    const selectedIndex =
        value != null && !(value instanceof Array) ? value.__index : -1;

    return (
        <List
            dense={dense}
            subheader={<ListSubheader component="div">{title}</ListSubheader>}
            component={"div"}
            disablePadding={disablePadding}
        >
            {items.map((item, itemIndex) => (
                <>
                    <ListItem
                        key={item.text + "-" + itemIndex}
                        button={
                            !multipleSelect &&
                            (onClick != null || onChange != null)
                        }
                        selected={
                            !multipleSelect &&
                            value != null &&
                            value.text + "-" + selectedIndex ===
                                item.text + "-" + itemIndex
                        }
                        onClick={e => {
                            if (!multipleSelect && onChange != null) {
                                onChange({
                                    target: {
                                        value: { ...item, __index: itemIndex }
                                    }
                                });
                            } else if (onClick != null) {
                                onClick(item);
                            }
                        }}
                    >
                        {(item.icon || multipleSelect) != null && (
                            <ListItemIcon>
                                {multipleSelect ? (
                                    <Checkbox
                                        edge="start"
                                        onChange={() => {
                                            const newValue = [...value];
                                            const index = findIndex(newValue, {
                                                __index: itemIndex,
                                                text: item.text
                                            });
                                            if (index === -1) {
                                                newValue.push({
                                                    ...item,
                                                    __index: itemIndex
                                                });
                                            } else {
                                                newValue.splice(index);
                                            }
                                            onChange({
                                                target: { value: newValue }
                                            });
                                        }}
                                        checked={
                                            find(value, {
                                                __index: itemIndex,
                                                text: item.text
                                            }) != null
                                        }
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                ) : (
                                    React.createElement(item.icon, null)
                                )}
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
                                <IconButton
                                    edge="end"
                                    onClick={() => {
                                        if (item.items != null) {
                                            setOpenIndex(
                                                openIndex === itemIndex
                                                    ? null
                                                    : itemIndex
                                            );
                                        } else {
                                            item.actionOnClick(item);
                                        }
                                    }}
                                >
                                    {React.createElement(
                                        item.items != null
                                            ? openIndex === itemIndex
                                                ? ExpandLess
                                                : ExpandMore
                                            : item.actionIcon,
                                        null
                                    )}
                                </IconButton>
                            </ListItemSecondaryAction>
                        )}
                    </ListItem>
                    {item.items != null && (
                        <Collapse
                            timeout="auto"
                            unmountOnExit
                            in={openIndex === itemIndex}
                        >
                            <div style={{ paddingLeft: "16px" }}>
                                <DigitList
                                    items={item.items}
                                    onClick={onClick}
                                    onChange={onChange}
                                    value={value}
                                    dense={dense}
                                    disablePadding
                                    multipleSelect={multipleSelect}
                                />
                            </div>
                        </Collapse>
                    )}
                </>
            ))}
        </List>
    );
};

DigitList.defaultProps = {};

export default DigitList;
