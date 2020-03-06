import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVert from "@material-ui/icons/MoreVert";
import PropTypes from "prop-types";
import React from "react";
import DigitIconButton from "../../elements/digit-icon-button";

class DigitMenu extends React.Component {
    state = {
        open: false,
        anchorElement: null,
        id: "todo"
    };

    _handleClose = () => {
        this.setState({
            open: false
        });
    };

    _handleClick = event => {
        this.setState({
            open: true,
            anchorElement: event.currentTarget
        });
    };

    render() {
        const { open, id, anchorElement } = this.state;

        const {
            valueToTextMap,
            onClick,
            flex,
            alignSelf,
            size,
            padding,
            margin
        } = this.props;

        return (
            <>
                <DigitIconButton
                    flex={flex}
                    alignSelf={alignSelf}
                    size={size}
                    padding={padding}
                    margin={margin}
                    onClick={this._handleClick}
                    aria-label="More"
                    aria-owns={open ? id : null}
                    aria-haspopup="true"
                    icon={MoreVert}
                />
                <Menu
                    id={id}
                    open={open}
                    anchorEl={anchorElement}
                    onClose={this._handleClose}
                >
                    {Object.keys(valueToTextMap).map(value => {
                        const text = valueToTextMap[value];
                        return (
                            <MenuItem
                                key={value}
                                onClick={() => {
                                    onClick(value);
                                    this._handleClose();
                                }}
                            >
                                {text}
                            </MenuItem>
                        );
                    })}
                </Menu>
            </>
        );
    }
}

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
    padding: PropTypes.oneOf([
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
    margin: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ])
};

DigitMenu.defaultProps = {
    valueToTextMap: {}
};

export default DigitMenu;
