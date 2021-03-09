import React from "react";
import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";

export const ToastButton = styled(({ hide, ...rest }) => <Button {...rest} />)`
    display: ${props => (props.hide ? "none" : "block")};
`;
