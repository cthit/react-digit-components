# DigitSwitch

Switches should be used to give the user the feeling like they are toggling something, for example a setting or a permission. If the user needs to select multiple things, a checkbox would be prefered. Switches should not be related to each other. They should not be used as a radio button either.

Note that `DigitSwitch` is uncontrolled, meaning you have to manage the state from `DigitSwitch`. If you are using a `DigitForm`, then you don't have to worry about state.

```jsx
import { DigitSwitch } from "@cthit/react-digit-components";

<DigitSwitch
  primary
  label="This is a label"
  value={this.state.value}
  onChange={e => {
    this.setState({
      value: e.target.checked
    });
  }}
/>;
```

## How to use with `DigitForm`

```jsx
<DigitForm
  render={() => (
    <DigitLayout.Column>
      <DigitFormField
        name="acceptTerms"
        component={DigitSwitch}
        componentProps={{
          label: "Do you accept these terms?"
        }}
      />
    </DigitLayout.Column>
  )}
/>
```
