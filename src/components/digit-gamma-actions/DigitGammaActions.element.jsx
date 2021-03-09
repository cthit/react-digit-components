import React from "react";
import { Title } from "../../styles/digit-text/DigitText.styles";
import DigitMenu from "../digit-menu";
import ExpandMore from "@material-ui/icons/ExpandMore";
import useDigitTranslations from "../../hooks/use-digit-translations";
import translations from "./DigitGammaActions.translations.json";
import { Row } from "../../styles/digit-layout/DigitLayout.styles";
import useGammaMe from "../../hooks/use-gamma-me";
import DigitAvatar from "../digit-avatar";
import PropTypes from "prop-types";

const DigitGammaActionsLayout = ({
    me = {},
    frontendUrl = "http://localhost:3000",
    backendUrl = "http://localhost:8081/api",
    flex,
    alignSelf,
    justifySelf,
    size = {},
    padding,
    margin,
    customOptions = {},
    customOrder = ["viewAccount", "signOut"],
    customOptionsOnClick = () => {},
    signOut = new Promise(resolve => resolve()),
    gridColumn,
    gridRow
}) => {
    const [text] = useDigitTranslations(translations);

    return (
        <Row
            alignItems={"center"}
            size={{
                height: "60px",
                minHeight: "60px",
                maxHeight: "60px",
                ...size
            }}
            flex={flex}
            alignSelf={alignSelf}
            justifySelf={justifySelf}
            padding={padding}
            margin={margin}
            gridRow={gridRow}
            gridColumn={gridColumn}
        >
            <DigitAvatar
                imageAlt={"Avatar"}
                imageSrc={me.avatarUrl}
                margin={{ right: "16px" }}
            />
            <Title text={me.nick} />
            <DigitMenu
                icon={ExpandMore}
                onClick={item => {
                    switch (item) {
                        case "viewAccount":
                            window.location.href = frontendUrl + "/me"; //i.e. gamma.chalmers.it/me
                            break;
                        case "signOut":
                            signOut().then(() => {
                                window.location.href = backendUrl + "/logout"; //i.e. gamma.chalmers.it/api/logout
                            });
                            break;
                        default:
                            customOptionsOnClick(item);
                            break;
                    }
                }}
                valueToTextMap={{
                    ...customOptions,
                    viewAccount: text.ViewAccount,
                    signOut: text.SignOut
                }}
                order={customOrder}
            />
        </Row>
    );
};

const DigitGammaActionsDummy = ({
    nick = "Sven",
    avatarUrl = null,
    customOptions,
    customOrder,
    customOptionsOnClick,
    signOut,
    flex,
    alignSelf,
    size,
    padding,
    margin,
    gridColumn,
    gridRow,
    justifySelf
}) => {
    return (
        <DigitGammaActionsLayout
            me={{ nick, avatarUrl }}
            flex={flex}
            alignSelf={alignSelf}
            size={size}
            padding={padding}
            margin={margin}
            customOptions={customOptions}
            customOrder={customOrder}
            customOptionsOnClick={customOptionsOnClick}
            signOut={signOut}
            gridColumn={gridColumn}
            gridRow={gridRow}
            justifySelf={justifySelf}
        />
    );
};

const DigitGammaActions = ({
    customOptions,
    customOrder,
    customOptionsOnClick,
    signOut,
    flex,
    alignSelf,
    size,
    padding,
    margin,
    gridColumn,
    gridRow,
    justifySelf,
    backendUrl,
    frontendUrl
}) => {
    const me = useGammaMe();
    if (me == null) {
        return null;
    }
    return (
        <DigitGammaActionsLayout
            me={me}
            customOrder={customOrder}
            customOptions={customOptions}
            customOptionsOnClick={customOptionsOnClick}
            signOut={signOut}
            flex={flex}
            alignSelf={alignSelf}
            justifySelf={justifySelf}
            size={size}
            padding={padding}
            margin={margin}
            gridColumn={gridColumn}
            gridRow={gridRow}
            backendUrl={backendUrl}
            frontendUrl={frontendUrl}
        />
    );
};

DigitGammaActions.propTypes = {
    /** Custom order for the menu */
    customOrder: PropTypes.arrayOf(PropTypes.string),
    /** Custom options for the menu other than viewAccount and signOut */
    customOptions: PropTypes.objectOf(PropTypes.string),
    /** (item) => {} when an item that is not viewAccount and signOut is clicked. */
    customOptionsOnClick: PropTypes.func,
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
    /** returns a Promise that handles the destruction of the session on the backend */
    signOut: PropTypes.func,
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

export { DigitGammaActionsDummy };
export default DigitGammaActions;
