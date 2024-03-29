import React from "react";
import PropTypes from "prop-types";
import useToggler from "../../hooks/use-toggler";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Row } from "../../styles/digit-layout/DigitLayout.styles";
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
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

const DigitListSelectSingle = ({
    title,
    items,
    dense,
    idProp,
    multipleExpanded,
    value,
    onChange,
    flex,
    alignSelf,
    justifySelf,
    size,
    padding,
    margin,
    gridColumn,
    gridRow
}) => {
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        justifySelf,
        size,
        padding,
        margin,
        gridColumn,
        gridRow
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

DigitListSelectSingle.propTypes = {
    /** A title above the list */
    title: PropTypes.string,
    /** Array of list items. Can be nested. */
    items: PropTypes.array,
    /** If true, lessens the padding */
    dense: PropTypes.bool,
    /** The prop that represents a unique key for each item */
    idProp: PropTypes.string,
    /** If true, then multiple sub lists can be expanded at once. */
    multipleExpanded: PropTypes.bool,
    /** The id that's selected */
    value: PropTypes.array,
    /** Function with the new selected value. */
    onChange: PropTypes.func,
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
    ]),
    /** Controls grid-column-start and grid-column-end */
    gridColumn: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    }),
    /** Controls grid-row-start and grid-row-end */
    gridRow: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    })
};

DigitListSelectSingle.defaultProps = {
    idProp: "text",
    multipleExpanded: false
};

export default DigitListSelectSingle;
