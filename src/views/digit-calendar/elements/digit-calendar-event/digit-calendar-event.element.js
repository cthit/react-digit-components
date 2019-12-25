import React from "react";
import { DigitDesign, DigitText } from "../../../../";
import { EventWrapper } from "./digit-calendar-event.style";

export const DigitCalendarEvent = ({ event, onClick }) => (
    <DigitDesign.Card>
        <EventWrapper
            color={event.color}
            onClick={e => {
                onClick(event);
                e.stopPropagation();
            }}
        >
            <DigitText.Text text={event.title} />
        </EventWrapper>
    </DigitDesign.Card>
);
