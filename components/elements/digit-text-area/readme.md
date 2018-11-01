# DigitTextArea

A text area to input text.

The `DigitTextArea` is uncontrolled, meaning you have to manage the value and change the value when the `DigitTextArea` recieves change. However, if you use `DigitForm`, you don't have to worry about it.

```jsx
import { DigitTextArea } from "@cthit/react-digit-components";

<DigitTextArea
  onChange={e => {
    this.setState({
      value: e.target.value
    });
    console.log("New value: " + e.target.value);
  }}
  startValue={this.state.value}
  upperLabel="Hello lowerLabel"
  lowerLabel="Why hello upperLabel"
  rows={5}
  rowsMax={10}
/>;
```

## How to use with `DigitForm`

```jsx
<DigitForm
  render={() => (
    <DigitLayout.Column>
      <DigitFormField
        name="description"
        component={DigitTextArea}
        componentProps={{
          upperLabel: "Description",
          rows: 5,
          rowsMax: 10
        }}
      />
    </DigitLayout.Column>
  )}
/>
```
