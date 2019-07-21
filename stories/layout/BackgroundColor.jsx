import styled from "styled-components";
import { Fill } from "../../src/styles/digit-layout/DigitLayout.styles";

const BackgroundColor = styled(Fill)`
    background-color: ${props => props.color};
`;

export default BackgroundColor;
