import React from "react";
import { StyledDay, DayIdWrapper, EventWrapper } from "./digit-calendar-day.style";
import { DigitText, DigitDesign } from "../../../../";
import DigitCalendarEvent from "../digit-calendar-event";

const inRange = (date, to, from) => {
    var first = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var last = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);

    return from <= last && first <= to;
}

export const DigitCalendarDay = ({date, events}) =>
    <DigitDesign.Card>
        <StyledDay>
            <DayIdWrapper>
                <DigitText.Text
                    text={date.getDate()}
                    />
            </DayIdWrapper>
            {events.filter(e => inRange(date, new Date(e.to), new Date(e.from))).map(e => 
                <DigitCalendarEvent color={e.color} text={e.text} onClick={()=>alert(new Date(e.to))}/>    
            )}
        </StyledDay>
    </DigitDesign.Card>