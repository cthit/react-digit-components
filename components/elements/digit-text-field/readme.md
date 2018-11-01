# DigitTextField

A textfield to input text.

The `DigitTextField` is uncontrolled, meaning you have to manage the value and change the value when the `DigitTextField` recieves change. However, if you use `DigitForm`, you don't have to worry about it.

```jsx
import { DigitTextField } from "@cthit/react-digit-components";

<DigitTextField
  onChange={e => {
    this.setState({
      value: e.target.value
    });
    console.log("New value: " + e.target.value);
  }}
  startValue={this.state.value}
  upperLabel="Hello lowerLabel"
  lowerLabel="Why hello upperLabel"
/>;
```

## How to use with `DigitForm`

```jsx
<DigitForm
  render={() => (
    <DigitLayout.Column>
      <DigitFormField
        name="firstName"
        component={DigitTextField}
        componentProps={{ upperLabel: "Your first name" }}
      />
    </DigitLayout.Column>
  )}
/>
```
