import React, { useEffect } from "react";
import DigitDisplayData from "../../../../elements/digit-display-data";
import {
    Card,
    CardBody,
    CardButtons
} from "../../../../styles/digit-design/DigitDesign.styles";
import {
    Center,
    Padding
} from "../../../../styles/digit-layout/DigitLayout.styles";
import { useSelector } from "react-redux";
import DigitButton from "../../../../elements/digit-button";
import DigitLoading from "../../../../elements/digit-loading";

const DigitCRUDReadOne = ({
    name,
    readOneAction,
    clearAction,
    keysText,
    keysOrder,
    path,
    id,
    history,
    hasUpdate,
    backButtonText,
    updateButtonText
}) => {
    const one = useSelector(state => state[name].one);
    const loading = useSelector(state => state[name].loading);

    useEffect(() => {
        readOneAction(id);
        return clearAction;
    }, []);

    if (loading) {
        return (
            <Center>
                <DigitLoading loading />
            </Center>
        );
    }

    return (
        <Center>
            <Card>
                <CardBody>
                    <DigitDisplayData
                        keysText={keysText}
                        keysOrder={keysOrder}
                        data={one}
                    />
                </CardBody>
                <CardButtons>
                    <DigitButton
                        text={backButtonText}
                        outlined
                        onClick={() => history.push(path)}
                    />
                    {hasUpdate && (
                        <>
                            <Padding />
                            <DigitButton
                                primary
                                raised
                                text={updateButtonText}
                                onClick={() =>
                                    history.push(path + "/" + id + "/edit")
                                }
                            />
                        </>
                    )}
                </CardButtons>
            </Card>
        </Center>
    );
};

DigitCRUDReadOne.defaultProps = {
    backButtonText: "Tillbaka",
    updateButtonText: "Redigera"
};

export default DigitCRUDReadOne;
