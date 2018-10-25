# DigitDateAndTimePicker

A modal where you can select the date and the time. Note that `DigitDateAndTimePicker` is uncontrolled, meaning you have to controll the current value of `DigitDateAndTimePicker`. If you are however using `DigitForm`, then you don't have to worry about it.

```jsx
import { DigitDateAndTimePicker } from "@cthit/react-digit-components";

<DigitDateAndTimePicker
  upperLabel="Choose a date and a time"
  value={this.state.date}
  onChange={this.onDateChanged}
/>;
```
