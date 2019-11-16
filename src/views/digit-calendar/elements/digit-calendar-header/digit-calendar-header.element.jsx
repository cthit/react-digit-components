import React from "react";
import { DigitLayout, DigitIconButton, DigitText } from "../../../../";
import { HeaderTextWrapper } from "./digit-calendar-header.style";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const DigitCalendarHeader = ({month}) =>
    <DigitLayout.Grid
        inline
        fillElement
        columns={`repeat(7, 1fr)`}
        margin={`0px`}
        >
        <DigitIconButton 
            icon={ArrowBackIosIcon}
            inline
        />
        <HeaderTextWrapper>
            <DigitText.Heading5 text={month}/>
        </HeaderTextWrapper>
        <DigitIconButton
            icon={ArrowForwardIosIcon}
            inline
        />
    </DigitLayout.Grid>