import React from "react";
import { Title } from "../../styles/digit-text/DigitText.styles";
import DigitMenu from "../../views/digit-menu";
import ExpandMore from "@material-ui/icons/ExpandMore";
import useDigitTranslations from "../../hooks/use-digit-translations";
import translations from "./DigitGammaActions.translations";
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
    signOut = new Promise(resolve => resolve())
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
    flex,
    alignSelf,
    size,
    padding,
    margin,
    customOptions,
    customOrder,
    customOptionsOnClick,
    signOut
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
        />
    );
};

const DigitGammaActions = ({
    customOptions,
    customOrder,
    customOptionsOnClick,
    signOut
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
    /** returns a Promise that handles the destruction of the session on the backend */
    signOut: PropTypes.func
};

export { DigitGammaActionsDummy };
export default DigitGammaActions;
