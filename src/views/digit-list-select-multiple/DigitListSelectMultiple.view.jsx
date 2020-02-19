import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
import uniq from "lodash/uniq";

//Can be optimized to fail fast.
const hasAtLeastOneItemChecked = (item, checkedLeaves, idProp) =>
    item.items == null //if leaf
        ? checkedLeaves.includes(item[idProp])
        : item.items.reduce(
              (acc, next) =>
                  acc || allItemsChecked(next, checkedLeaves, idProp),
              false
          );

const allItemsChecked = (item, checkedLeaves, idProp) =>
    item.items == null //if leaf
        ? checkedLeaves.includes(item[idProp])
        : item.items.reduce(
              (acc, next) =>
                  acc && allItemsChecked(next, checkedLeaves, idProp),
              false
          );

const getCheckedNodes = (checkedLeaves, all, idProp) =>
    all
        .filter(node => node.items != null)
        .filter(node =>
            node.items.reduce(
                (acc, next) =>
                    acc && allItemsChecked(next, checkedLeaves, idProp), //either a node within a node or a leaves
                true
            )
        )
        .map(node => node[idProp]);

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
    includeNodeValue,
    root
}) => {
    const [toggle, isExpanded] = useToggler(multipleExpanded);
    const [innerValue, setValue] = useState(value);

    //recalculates innerValue
    useEffect(() => {
        if (root && !includeNodeValue) {
            const all = items.reduce((a, i) => a.concat(getAllSubItems(i)), []);
            const newInnerValue = [
                ...value,
                ...getCheckedNodes(value, all, idProp)
            ];

            newInnerValue.sort();
            const innerValueCopy = [...innerValue].sort();

            if (
                JSON.stringify(newInnerValue) !== JSON.stringify(innerValueCopy)
            ) {
                setValue(newInnerValue);
            }
        } else {
            setValue(value);
        }
    }, [value, root, includeNodeValue]);

    const handleChange = e => {
        const e2 = {
            target: {
                value: uniq(e.target.value)
            }
        };

        if (root && !includeNodeValue) {
            const all = items.reduce((a, i) => a.concat(getAllSubItems(i)), []);
            const nodes = all
                .filter(item => item.items != null)
                .map(item => item[idProp]);
            onChange(e2.target.value.filter(itemId => !nodes.includes(itemId)));
            setValue(e2.target.value);
        } else {
            onChange(e2);
        }
    };

    const toggleValue = id => {
        const newValue = xor([...innerValue], [id]);
        handleChange({ target: { value: newValue } });
    };

    const addAllValuesAs = (ids, bol) => {
        console.log(ids);
        console.log(
            bol
                ? [...ids, ...innerValue]
                : innerValue.filter(v => !ids.includes(v))
        );
        handleChange({
            target: {
                value: bol
                    ? [...ids, ...innerValue]
                    : innerValue.filter(v => !ids.includes(v))
            }
        });
    };

    const getAllSubItems = item => {
        return [
            item,
            ...(item.items != null
                ? item.items.reduce((a, i) => a.concat(getAllSubItems(i)), [])
                : [])
        ];
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
                                    !innerValue.includes(item[idProp])
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
                                        checked={innerValue.includes(
                                            item[idProp]
                                        )}
                                        onChange={() => {}}
                                        color={
                                            item.primary
                                                ? "primary"
                                                : "secondary"
                                        }
                                        disabled={item.disabled}
                                        indeterminate={
                                            item.items != null &&
                                            !innerValue.includes(
                                                item[idProp]
                                            ) &&
                                            hasAtLeastOneItemChecked(
                                                item,
                                                innerValue,
                                                idProp
                                            )
                                        }
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
                                    value={innerValue}
                                    onChange={handleChange}
                                    idProp={idProp}
                                    nodeSelectsAllChildren={
                                        nodeSelectsAllChildren
                                    }
                                    root={false}
                                />
                            </div>
                        </Collapse>
                    )}
                </React.Fragment>
            ))}
        </List>
    );
};

DigitListSelectMultiple.propTypes = {
    /** If true, then node values will be excluded from onChange */
    includeNodeValue: PropTypes.bool
};

DigitListSelectMultiple.defaultProps = {
    idProp: "text",
    value: [],
    includeNodeValue: false,
    root: true
};

export default DigitListSelectMultiple;