import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Fill, Padding } from "../../styles/digit-layout/DigitLayout.styles";
import { Text } from "../../styles/digit-text/DigitText.styles";

const HorizontalFill = styled(Fill)`
    flex-direction: row;
`;

const FixedWidth = styled.div`
    width: ${props => props.fixedWidth};
`;

const DigitDisplayData = ({ data, keysText, keysOrder, fixedWidth }) => (
    <Fill>
        {keysOrder.map(key => (
            <Padding key={key}>
                <HorizontalFill>
                    <FixedWidth fixedWidth={fixedWidth}>
                        <Text bold text={keysText[key]} />
                    </FixedWidth>
                    <Fill>
                        <Text text={data[key]} />
                    </Fill>
                </HorizontalFill>
            </Padding>
        ))}
    </Fill>
);

DigitDisplayData.displayName = "DigitDisplayData";
DigitDisplayData.propTypes = {
    /** The data to display. It's an object with keys that represent a value.  */
    data: PropTypes.objectOf(PropTypes.string),
    /** The pretty text of the keys to display.  */
    keysText: PropTypes.objectOf(PropTypes.string),
    /** The order of the keys. An array of keys.  */
    keysOrder: PropTypes.arrayOf(PropTypes.string),
    /** The fixed width for the left column. E.g. 200px, 20% */
    fixedWidth: PropTypes.string
};

DigitDisplayData.defaultProps = {
    data: {},
    keysText: {},
    keysOrder: [],
    fixedWidth: "125px"
};

export default DigitDisplayData;
