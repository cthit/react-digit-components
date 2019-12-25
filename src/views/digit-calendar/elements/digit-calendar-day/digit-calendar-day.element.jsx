import React from "react";
import PropTypes from "prop-types";
import {
    StyledDay,
    DayIdWrapper,
    EventWrapper
} from "./digit-calendar-day.style";
import { DigitText, DigitDesign } from "../../../../";
import DigitCalendarEvent from "../digit-calendar-event";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const inRange = (date, to, from) => {
    var first = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var last = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        23,
        59,
        59
    );

    return from <= last && first <= to;
};

export const DigitCalendarDay = ({
    date,
    events,
    onEventClick,
    onDayClick
}) => {
    
    var eventsOfToday = events.filter(e =>inRange(date, new Date(e.to), new Date(e.from)))

    return (
        <DigitDesign.Card>
            <StyledDay onClick={() => onDayClick(date)}>
                <DayIdWrapper>
                    <DigitText.Text text={date.getDate()} />
                </DayIdWrapper>
                {
                    eventsOfToday
                    .slice(0, 3)
                    .map(e => (
                        <DigitCalendarEvent
                            key={e.title}
                            event={e}
                            onClick={() => onEventClick(e)}
                        />
                    ))
                }
                {
                    eventsOfToday.length <= 3 ? null : 
                    <MoreHorizIcon />
                }
            </StyledDay>
        </DigitDesign.Card>
    );
};

DigitCalendarDay.propTypes = {
    //Array of events which will populate the calendar
    events: PropTypes.arrayOf(
        PropTypes.shape({
            //The title of the event
            title: PropTypes.string.isRequired,
            //The background color of the event card
            color: PropTypes.string,
            //The date and time when the event starts
            to: PropTypes.instanceOf(Date).isRequired,
            //The date and time when the event ends
            from: PropTypes.instanceOf(Date).isRequired
        })
    )
}