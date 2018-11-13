import styled from "styled-components";
import { Fill } from "../../components/styles/digit-layout/DigitLayout.styles";

const BackgroundColor = styled(Fill)`
    background-color: ${props => props.color};
`;

export default BackgroundColor;
