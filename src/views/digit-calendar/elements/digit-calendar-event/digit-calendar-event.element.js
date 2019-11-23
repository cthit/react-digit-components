import React from "react";
import { DigitDesign, DigitText } from "../../../../";
import { EventWrapper }  from "./digit-calendar-event.style";

export const DigitCalendarEvent = ({text, color, onClick}) =>
    <DigitDesign.Card onClick={() => onClick()}>
        <EventWrapper color={color}>
            <DigitText.Text
                text={text}
                />
        </EventWrapper>
    </DigitDesign.Card>