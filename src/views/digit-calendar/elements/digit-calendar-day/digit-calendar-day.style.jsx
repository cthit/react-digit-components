import styled from "styled-components";
import { DigitDesign } from "../../../../";

const width = "100px";
const height = "100px";

export const StyledDay = styled.div`
    width: ${width};
    height: ${height};
    cursor: pointer;
    &:hover {
        background-color: #eafcfc;
    }
`

export const NullDay = styled.div`
    opacity: 100%;
    width: ${width};
    height: ${height};
`;

export const DayIdWrapper = styled.div`
    padding-left: 4px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
`;