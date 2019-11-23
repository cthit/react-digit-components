import React from "react";
import { DigitLayout, DigitText } from "../../../../";
import { WeekWrapper } from "./digit-calendar-week-bar.style";

Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

const getWeeksInMonth = (month, year) => {
    var date = new Date(year, month, 1);
    var weeks = [];
    while (date.getMonth() === month) {
       weeks.push(date.getWeek());
       date.setDate(date.getDate() + 7);
    }
    return weeks;
  }

export const DigitCalendarWeekBar = ({date}) =>
    <DigitLayout.Column>
        {getWeeksInMonth(date.getMonth(), date.getFullYear()).map(e =>
        <WeekWrapper>
            <DigitText.Text
                text={"v." + e}
            />
        </WeekWrapper>
            )}
    </DigitLayout.Column>