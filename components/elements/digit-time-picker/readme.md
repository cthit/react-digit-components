# DigitTimePicker

A modal where you can select the time. Note that `DigitTimePicker` is uncontrolled, meaning you have to controll the current value of `DigitTimePicker`. If you are however using `DigitForm`, then you don't have to worry about it.

```jsx
import { DigitTimePicker } from "@cthit/react-digit-components";

<DigitTimePicker
    upperLabel="Choose a time"
    value={this.state.time}
    onChange={this.onTimeChanged}
/>;
```

## How to use with `DigitForm`

```jsx
<DigitForm
    render={() => (
        <DigitFormField
            name="time"
            component={DigitTimePicker}
            componentProps={{ upperLabel: "Enter date" }}
        />
    )}
/>
```
