# DigitDatePicker

A modal where you can select the date. Note that `DigitDatePicker` is uncontrolled, meaning you have to controll the current value of `DigitDatePicker`. If you are however using `DigitForm`, then you don't have to worry about it.

```jsx
import { DigitDatePicker } from "@cthit/react-digit-components";

<DigitDatePicker
  upperLabel="Choose a date"
  value={this.state.date}
  onChange={this.onDateChanged}
/>;
```

## How to use with `DigitForm`

```jsx
<DigitForm
  render={() => (
    <DigitLayout.Column>
      <DigitFormField
        name="date"
        component={DigitDatePicker}
        componentProps={{ upperLabel: "Enter date" }}
      />
    </DigitLayout.Column>
  )}
/>
```
