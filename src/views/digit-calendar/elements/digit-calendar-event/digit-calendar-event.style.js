import React from "react";
import styled from "styled-components";

export const EventWrapper = styled.div`
    background-color: ${props => props.color};
    padding-left: 4px;
    &:hover{
        padding: 2px;
    }
`;