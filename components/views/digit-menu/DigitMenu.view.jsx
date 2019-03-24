import { Menu, MenuItem } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import PropTypes from "prop-types";
import React from "react";
import DigitIconButton from "../../elements/digit-icon-button";
import generateId from "../../utils/generators/id.generator";

class DigitMenu extends React.Component {
    state = {
        open: false,
        anchorElement: null,
        id: generateId()
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

        const { valueToTextMap, onClick } = this.props;

        return (
            <div>
                <DigitIconButton
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
            </div>
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
