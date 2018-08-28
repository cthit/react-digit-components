import React from "react";
import styled from "styled-components";
import { Fill, Padding } from "../../styles/digit-layout/DigitLayout.styles";
import { Text } from "../../styles/digit-text/DigitText.styles";

const HorizontalFill = styled(Fill)`
  flex-direction: row;
`;

const FixedWidth = styled.div`
  width: ${props => (props.fixedWidth != null ? props.fixedWidth : "125px")};
`;

const GammaDisplayData = ({ data, keysText, keysOrder, fixedWidth }) => (
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

export default GammaDisplayData;
