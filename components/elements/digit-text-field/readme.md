# DigitTextField

A textfield to input text.

The DigitTextField is uncontrolled, meaning you have to manage the value and change the value when the textfield recieves change. However, if you use DigitForm, you don't have to worry about it.

```js
import { DigitTextField } from "react-digit-components";
```

```js
<GammaTextField
  onChange={e => {
    this.setState({
      value: e.target.value
    });
    console.log("New value: " + e.target.value);
  }}
  startValue={this.state.value}
  upperLabel="Hello lowerLabel"
  lowerLabel="Why hello upperLabel"
/>
```
