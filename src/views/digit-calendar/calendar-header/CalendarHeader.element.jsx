import React from "react";
import { DigitLayout, DigitIconButton, DigitText } from "../../../";
import { HeaderTextWrapper, ButtonWrapper } from "./CalendarHeader.style";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const DigitCalendarHeader = ({ month, year, onMonthChange }) => (
    <div>
        <ButtonWrapper>
            <DigitIconButton
                icon={ArrowBackIosIcon}
                onClick={() => onMonthChange(-1)}
            />
        </ButtonWrapper>
        <ButtonWrapper>
            <DigitIconButton
                icon={ArrowForwardIosIcon}
                onClick={() => onMonthChange(1)}
            />
        </ButtonWrapper>
        <HeaderTextWrapper>
            <DigitText.Heading5 text={`${month} ${year}`} />
        </HeaderTextWrapper>
    </div>
);
