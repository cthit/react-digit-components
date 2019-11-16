import React from "react";
import { DigitLayout } from "../../";
import DigitCalendarDay, { NullDay } from "./elements/digit-calendar-day";
import DigitCalendarHeader from "./elements/digit-calendar-header";

const date = new Date();

const getFirstDayIndex = (date) => new Date(date.getFullYear(), date.getMonth(), 1)
const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const DigitCalendar = () => 
  <div>
    <DigitCalendarHeader month="November"/>
    <DigitLayout.Grid
        inline
        fillElement
        columns={`repeat(7, 1fr)`}
        margin={`0px`}
      >
      {Array.from(new Array(getFirstDayIndex(date).getDay() - 1), (_, i) => (
        <NullDay/>
      ))}
      {Array.from(new Array( daysInMonth(date) ), (_, i) => (
        <DigitCalendarDay day={i+1}/>
      ))}
    </DigitLayout.Grid>
  </div>

export default DigitCalendar;
