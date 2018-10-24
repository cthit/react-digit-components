# DigitButton

A simple button. Use color and style with care, reflect on what button is the most important one in a single page and give that one more color or a differnt style. Do not confuse the user with multiple high priority buttons. The order for priority regarding style is raised, outlined and last flat. The order for priority regarding color is secondary, primary and lastly none.

Here are some examples:

```jsx
import { DigitButton } from "react-digit-components";

<DigitButton
  text="A primary and raised button"
  primary
  raised
  onClick={() => {
    console.log("Primary and raised button has been pressed");
  }}
/>;
```
