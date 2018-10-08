import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Fill, Padding } from "../../styles/digit-layout/DigitLayout.styles";
import { Text } from "../../styles/digit-text/DigitText.styles";

const HorizontalFill = styled(Fill)`
  flex-direction: row;
`;

const FixedWidth = styled.div`
  width: ${props => (props.fixedWidth != null ? props.fixedWidth : "125px")};
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

DigitDisplayData.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  keysText: PropTypes.objectOf(PropTypes.string),
  keysOrder: PropTypes.arrayOf(PropTypes.string),
  fixedWidth: PropTypes.string //e.g. 200px, 20%
};

export default DigitDisplayData;
