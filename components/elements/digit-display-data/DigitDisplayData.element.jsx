import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import {
    Column,
    Fill,
    Padding,
    Row
} from "../../styles/digit-layout/DigitLayout.styles";
import { Text } from "../../styles/digit-text/DigitText.styles";

const HorizontalFill = styled(Fill)`
    flex-direction: row;
`;

const RightAlignedColumn = Column.extend`
    text-align: right;
    margin-right: 8px !important;
`;

const DigitDisplayData = ({ data, keysText, keysOrder }) => (
    <Row>
        <RightAlignedColumn>
            {keysOrder.map(key => (
                <Text bold text={keysText[key]} />
            ))}
        </RightAlignedColumn>
        <Column>
            {keysOrder.map(key => (
                <Text text={data[key]} />
            ))}
        </Column>
    </Row>
);

DigitDisplayData.displayName = "DigitDisplayData";
DigitDisplayData.propTypes = {
    /** The data to display. It's an object with keys that represent a value.  */
    data: PropTypes.objectOf(PropTypes.string),
    /** The pretty text of the keys to display.  */
    keysText: PropTypes.objectOf(PropTypes.string),
    /** The order of the keys. An array of keys.  */
    keysOrder: PropTypes.arrayOf(PropTypes.string)
};

DigitDisplayData.defaultProps = {
    data: {},
    keysText: {},
    keysOrder: []
};

export default DigitDisplayData;
