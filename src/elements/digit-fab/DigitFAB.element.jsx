import PropTypes from "prop-types";
import React from "react";
import { Text } from "../../styles/digit-text/DigitText.styles";
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";
import Fab from "@material-ui/core/Fab";
import { Padding } from "../../styles/digit-layout/DigitLayout.styles";

const DigitFAB = ({
    onClick,
    disabled,
    primary,
    secondary,
    submit,
    icon,
    text
}) => (
    <Fab
        variant={text == null ? "round" : "extended"}
        type={submit ? "submit" : "button"}
        disabled={disabled}
        onClick={onClick}
        color={primary ? "primary" : secondary ? "secondary" : "inherit"}
    >
        {React.createElement(icon, null)}
        <DigitIfElseRendering
            test={text != null}
            ifRender={() => (
                <>
                    <Padding />
                    <Text text={text} />
                    <Padding />
                </>
            )}
        />
    </Fab>
);

DigitFAB.displayName = "DigitFAB";
DigitFAB.propTypes = {
    /** The function which will be called when the button has been pressed.*/
    onClick: PropTypes.func,
    /** The icon of the FAB. Use @material-ui/icons.  */
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    /** Disables the button. onClick will not be called if you click the button.
     * The styling of the button also changes to reflect.
     */
    disabled: PropTypes.bool,
    /** Sets the color to the primary one. This has predence precedence over secondary. */
    primary: PropTypes.bool,
    /** Sets the color to the secondary one. This has precedence over the normal button. */
    secondary: PropTypes.bool,
    /** If true, then forms will be called if you press this button. No need to use onClick.
     * This can be useful for e.g. DigitForm.
     */
    submit: PropTypes.bool,
    /**
     * If provided, the fab will become an extended fab
     */
    text: PropTypes.string
};

DigitFAB.defaultProps = {
    onClick: () => {},
    disabled: false,
    primary: false,
    secondary: false,
    submit: false,
    icon: () => null,
    text: null
};

export default DigitFAB;
