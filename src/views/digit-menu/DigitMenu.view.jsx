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
    onClick: PropTypes.func.isRequired
};

DigitMenu.defaultProps = {
    valueToTextMap: {}
};

export default DigitMenu;
