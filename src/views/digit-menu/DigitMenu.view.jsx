import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVert from "@material-ui/icons/MoreVert";
import PropTypes from "prop-types";
import React, { useState } from "react";
import DigitIconButton from "../../elements/digit-icon-button";

const DigitMenu = ({
    valueToTextMap,
    onClick,
    flex,
    alignSelf,
    justifySelf,
    size,
    padding,
    margin,
    icon,
    order
}) => {
    const [open, setOpen] = useState(false);
    const [anchorElement, setAnchorElement] = useState(null);

    const handleClose = () => setOpen(false);

    const handleClick = e => {
        setOpen(true);
        setAnchorElement(e.currentTarget);
    };

    return (
        <>
            <DigitIconButton
                flex={flex}
                alignSelf={alignSelf}
                justifySelf={justifySelf}
                size={size}
                padding={padding}
                margin={margin}
                onClick={handleClick}
                icon={icon}
            />
            <Menu open={open} anchorEl={anchorElement} onClose={handleClose}>
                {order.map(value => {
                    const text = valueToTextMap[value];
                    return (
                        <MenuItem
                            key={value}
                            onClick={() => {
                                onClick(value);
                                handleClose();
                            }}
                        >
                            {text}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
};

DigitMenu.displayName = "DigitMenu";
DigitMenu.propTypes = {
    /** Values to text map. Value is what the code
     * works with, text is what the user sees.
     */
    valueToTextMap: PropTypes.objectOf(PropTypes.string).isRequired,
    /** Gets called when a selection on the menu
     * has been made. First and only argument is the
     * value of the clicked.
     */
    onClick: PropTypes.func.isRequired,
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
    /** Use @material-ui/icons. */
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /** Decides the order of valueToTextMap */
    order: PropTypes.array.isRequired
};

DigitMenu.defaultProps = {
    valueToTextMap: {},
    icon: MoreVert,
    order: []
};

export default DigitMenu;
