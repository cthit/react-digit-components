import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import styled from "styled-components";

export const UpperLabel = styled(FormLabel)`
    /*material-ui is somewhat buggy and change the colors randomly*/
    color: rgba(0, 0, 0, 1) !important;
`;

export const Lowerlabel = styled(FormHelperText)`
    color: ${props => (props.error ? "#F44336" : "inherit")};
`;
