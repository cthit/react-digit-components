# DigitButton

A simple button. Use color and style with care, reflect on what button is the most important one in a single page and give that one more color or a differnt style. Do not confuse the user with multiple high priority buttons. The order for priority regarding style is raised, outline and last flat. The order for priority regarding color is secondary, primary and lastly none.

Here are some examples:

```js
import { DigitButton } from "react-digit-components";
```

```js
<DigitButton
  text="A primary and raised button"
  primary
  raised
  onClick={() => {
    console.log("Primary and raised button has been pressed");
  }}
/>

<DigitButton
  text="A secondary button"
  secondary
  onClick={() => {
    console.log("Secondary button has been pressed");
  }}
/>

<DigitButton
  text="A secondary outline button"
  secondary
  outline
  onClick={() => {
    console.log("Secondary and outline button has been pressed");
  }}
/>


<DigitButton
  text="A normal button"
  onClick={() => {
    console.log("Normal button has been pressed");
  }}
/>

<DigitButton
  disabled
  text="A disabled button which you can't click :("
  onClick={() => {
    console.log("This will never print");
  }}
/>
```
