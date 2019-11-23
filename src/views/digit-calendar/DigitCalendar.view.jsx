import React, { useState } from "react";
import { DigitLayout, DigitButton } from "../../";
import DigitCalendarDay, { NullDay } from "./elements/digit-calendar-day";
import DigitCalendarHeader from "./elements/digit-calendar-header";
import DigitCalnedarWeekBar from "./elements/digit-calendar-week-bar";

const events = [{
  text: "Hello",
  color: "red",
  from: "2019-11-28",
  to: "2019-11-28"
},
{
  text: "Sektionsmöte",
  color: "orange",
  from: "2019-11-22",
  to: "2019-11-24"
},
{
  text: "Förmöte",
  color: "blue",
  from: "2019-11-22",
  to: "2019-11-22"
}
]

var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

Date.prototype.getMonthName = function() {
  return monthNames[this.getMonth()]
}

const getFirstDay = (date) => new Date(date.getFullYear(), date.getMonth(), 1);

const getDaysInMonth = (month, year) => {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
     days.push(new Date(date));
     date.setDate(date.getDate() + 1);
  }
  return days;
}

const DigitCalendar = ({startDate}) => {
  const [date, setDate] = useState(startDate ? startDate : new Date());
  return (<div>
    <DigitCalendarHeader
      month={date.getMonthName()}
      onMonthChange = {(offset) => {
        setDate(new Date(date.getFullYear(), date.getMonth() + offset, 1));
      }}
      year={date.getFullYear()}
      />
    <DigitLayout.Row>
    <DigitCalnedarWeekBar date={date}/>
    <DigitLayout.Grid
        inline
        fillElement
        columns={`repeat(7, 1fr)`}
        margin={`0px`}
      >
      {Array.from(new Array((getFirstDay(date).getDay() + 6) % 7), (_, i) => (
        <NullDay/>
      ))}
      {getDaysInMonth(date.getMonth(), date.getFullYear()).map(e => 
         <DigitCalendarDay date={e} events={events}/>
        )}
    </DigitLayout.Grid>
    </DigitLayout.Row>
  </div>)
}

export default DigitCalendar;
