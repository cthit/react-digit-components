# DigitSwitch

Switches should be used to give the user the feeling like they are toggling something, for example a setting or a permission. If the user needs to select multiple things, a checkbox would be prefered.

```js
import { DigitSwitch } from "react-digit-components";
```

```js
<DigitSwitch
  primary
  value={this.state.value}
  label="This is a label"
  onChange={e => {
    this.setState({
      value: e.target.checked
    });
  }}
/>
```
