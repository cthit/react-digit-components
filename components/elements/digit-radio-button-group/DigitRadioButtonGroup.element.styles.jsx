import { FormControl, FormHelperText, FormLabel } from "@material-ui/core";
import styled from "styled-components";

export const UpperLabel = styled(FormLabel)`
  /*material-ui is somewhat buggy and change the colors randomly*/
  color: rgba(0, 0, 0, 1) !important;
`;

export const Lowerlabel = styled(FormHelperText)`
  color: ${props => (props.error ? "#F44336" : "inherit")};
`;

export const StyledFormControl = styled(FormControl)``;
