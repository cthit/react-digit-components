import React from "react";
import { Title } from "../../styles/digit-text/DigitText.styles";
import DigitMenu from "../../views/digit-menu";
import ExpandMore from "@material-ui/icons/ExpandMore";
import useDigitTranslations from "../../hooks/use-digit-translations";
import translations from "./DigitGammaActions.translations";
import { Row } from "../../styles/digit-layout/DigitLayout.styles";
import useGammaMe from "../../hooks/use-gamma-me";
import DigitAvatar from "../digit-avatar";

const DigitGammaActionsLayout = ({
    me = {},
    frontendUrl = "http://localhost:3000",
    backendUrl = "http://localhost:8081/api",
    flex,
    alignSelf,
    size = {},
    padding,
    margin
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
                            window.location.href = backendUrl + "/logout"; //i.e. gamma.chalmers.it/api/logout
                            break;
                    }
                }}
                valueToTextMap={{
                    viewAccount: text.ViewAccount,
                    signOut: text.SignOut
                }}
                order={["viewAccount", "signOut"]}
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
    margin
}) => {
    return (
        <DigitGammaActionsLayout
            me={{ nick, avatarUrl }}
            flex={flex}
            alignSelf={alignSelf}
            size={size}
            padding={padding}
            margin={margin}
        />
    );
};

const DigitGammaActions = () => {
    const me = useGammaMe();
    if (me == null) {
        console.log("Not logged in, not rendering any DigitGammaActions...");
        return null;
    }
    return <DigitGammaActionsLayout me={me} />;
};

export { DigitGammaActionsDummy };
export default DigitGammaActions;
