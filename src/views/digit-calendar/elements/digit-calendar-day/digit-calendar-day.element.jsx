import React from "react";
import { StyledDay, DayIdWrapper } from "./digit-calendar-day.style";
import { DigitText, DigitDesign } from "../../../../";

export const DigitCalendarDay = ({day}) =>
    <DigitDesign.Card>
        <StyledDay>
            <DayIdWrapper>
                <DigitText.Text
                    text={day}
                    />
            </DayIdWrapper>
        </StyledDay>
    </DigitDesign.Card>