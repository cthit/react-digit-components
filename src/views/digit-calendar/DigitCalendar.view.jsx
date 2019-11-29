import React, { useState } from "react";
import { DigitLayout, DigitButton } from "../../";
import DigitCalendarDay, { NullDay } from "./elements/digit-calendar-day";
import DigitCalendarHeader from "./elements/digit-calendar-header";
import DigitCalendarWeekBar from "./elements/digit-calendar-week-bar";
import PropTypes from "prop-types";

var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

Date.prototype.getMonthName = function() {
    return monthNames[this.getMonth()];
};

const getFirstDay = date => new Date(date.getFullYear(), date.getMonth(), 1);

const getDaysInMonth = (month, year) => {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
};

const DigitCalendar = ({
    startDate,
    events,
    onEventClick,
    onDayClick,
    onMonthChange
}) => {
    const [date, setDate] = useState(startDate);
    return (
        <div>
            <DigitCalendarHeader
                month={date.getMonthName()}
                onMonthChange={offset => {
                    setDate(
                        new Date(
                            date.getFullYear(),
                            date.getMonth() + offset,
                            1
                        )
                    );
                    onMonthChange(offset);
                }}
                year={date.getFullYear()}
            />
            <DigitLayout.Row>
                <DigitCalendarWeekBar date={date} />
                <DigitLayout.Grid
                    inline
                    fillElement
                    columns={`repeat(7, 1fr)`}
                    margin={`0px`}
                >
                    {Array.from(
                        new Array((getFirstDay(date).getDay() + 6) % 7),
                        (_, i) => (
                            <NullDay key={i} />
                        )
                    )}
                    {getDaysInMonth(date.getMonth(), date.getFullYear()).map(
                        e => (
                            <DigitCalendarDay
                                key={e}
                                date={e}
                                events={events}
                                onEventClick={onEventClick}
                                onDayClick={onDayClick}
                            />
                        )
                    )}
                </DigitLayout.Grid>
            </DigitLayout.Row>
        </div>
    );
};

export default DigitCalendar;

DigitCalendar.propTypes = {
    //The date the calendar should start on
    startDate: PropTypes.instanceOf(Date),

    //Called when a event has been clicked
    onEventClick: PropTypes.func,
    //Called when a day has been clicked
    onDayClick: PropTypes.func,
    //Called when the month has changed
    onMonthChange: PropTypes.func
};

DigitCalendar.defaultProps = {
    startDate: new Date(),
    events: [],
    onEventClick: e => {},
    onDayClick: e => {},
    onMonthChange: e => {}
};
