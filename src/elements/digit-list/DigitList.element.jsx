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

const DigitList = ({
    title,
    items,
    onClick,
    dense,
    disablePadding,
    value,
    onChange
}) => {
    const [openIndex, setOpenIndex] = useState(null); //index on items

    const selectedIndex = value != null ? value.__index : -1;

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
                        button={onClick != null || onChange != null}
                        selected={
                            value != null &&
                            value.text + "-" + selectedIndex ===
                                item.text + "-" + itemIndex
                        }
                        onClick={e => {
                            if (item.items != null) {
                                setOpenIndex(
                                    openIndex === itemIndex ? null : itemIndex
                                );
                            } else if (onChange != null) {
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
                        {item.icon != null && (
                            <ListItemIcon>
                                {React.createElement(item.icon, null)}
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

                        {item.items != null &&
                            (openIndex === itemIndex ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            ))}

                        {item.actionIcon != null && (
                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    onClick={() => item.actionOnClick(item)}
                                >
                                    {React.createElement(item.actionIcon, null)}
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
