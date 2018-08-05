# DigitCheckbox

Checkboxes should be used when multiple alternatives can be selected. If only one thing can be selected, then radio buttons should be used instead. If you want to be able to toggle one or more thing, like a setting, then a switch should be used instead.

Note that DigitCheckbox is uncontrolled, meaning you have to manage the state from DigitCheckbox. If you are using a DigitForm, then you don't have to worry about state.

```js
import DigitCheckbox from "react-digit-components";
```

```js
<GammaCheckbox
  label="First checkbox; primary"
  primary
  value={this.state.checked}
  onChange={e => {
    setState({
      checked: e.target.checked
    });
    console.log("This checkbox has been checked = " + checked);
  }}
/>
<GammaCheckbox
  label="second checkbox; secondary"
  secondary
  value={this.state.checked}
  onChange={e => {
    setState({
      checked: e.target.checked
    });
    console.log("This checkbox has been checked = " + checked);
  }}
/>
<GammaCheckbox
  label="third checkbox; secondary with error"
  secondary
  value={this.state.checked}
  error={true}
  onChange={e => {
    setState({
      checked: e.target.checked
    });
    console.log("This checkbox has been checked = " + checked);
  }}
/>
<GammaCheckbox
  label="fourth checkbox; disabled"
  disabled
  value={this.state.checked}
  onChange={e => {
    setState({
      checked: e.target.checked
    });
    console.log("This checkbox has been checked = " + checked);
  }}
/>
<GammaCheckbox
  label="fifth checkbox; primary and disabled"
  primary
  disabled
  value={this.state.checked}
  onChange={e => {
    setState({
      checked: e.target.checked
    });
    console.log("This checkbox has been checked = " + checked);
  }}
/>
```
