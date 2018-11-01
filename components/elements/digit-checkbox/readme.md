# DigitCheckbox

DigitCheckbox should be used when multiple alternatives can be selected. If only one thing can be selected, then `DigitRadioButton` should be used instead. If you want to be able to toggle one or more thing, like a setting, then a `DigitSwitch` should be used instead.

Note that `DigitCheckbox` is uncontrolled, meaning you have to manage the state from `DigitCheckbox`. If you are using a `DigitForm`, then you don't have to worry about state.

```jsx
import { DigitCheckbox } from "react-digit-components";

<DigitCheckbox
  label="First checkbox; primary"
  primary
  value={this.state.checked}
  onChange={e => {
    setState({
      checked: e.target.checked
    });
    console.log("This checkbox has been checked = " + checked);
  }}
/>;
```

## How to use with `DigitForm`

```jsx
<DigitForm
  render={() => (
    <DigitLayout.Column>
      <DigitFormField
        name="wantsCandy"
        component={DigitCheckbox}
        componentProps={{ label: "I want candy!" }}
      />
    </DigitLayout.Column>
  )}
/>
```
