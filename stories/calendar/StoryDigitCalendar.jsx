import React from "react";
import { DigitCalendar } from "../../src";

const events = [
    {
        title: "Hello",
        color: "red",
        from: new Date(2019, 10, 28),
        to: new Date(2019, 10, 28)
    },
    {
        title: "Sektionsmöte",
        color: "orange",
        from: new Date(2019, 10, 22),
        to: new Date(2019, 10, 24)
    },
    {
        title: "Förmöte",
        color: "blue",
        from: new Date(2019, 10, 22),
        to: new Date(2019, 10, 22)
    }
];

const StoryDigitCalendar = () => (
    <DigitCalendar
        events={events}
        onEventClick={e => {
            console.log("Event clicked: ");
            console.log(e);
        }}
        onDayClick={e => console.log("Day clicked: " + e)}
        onMonthChange={e => console.log("Month change: " + e)}
    />
);

export default StoryDigitCalendar;
