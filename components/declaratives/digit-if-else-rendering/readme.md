# DigitIfElseRendering

A way to render one out of two render props depending on a boolean test case.

```jsx
import { DigitIfElseRendering } from "@cthit/react-digit-components";

<DigitIfElseRendering
  test={a >= 5}
  ifRender={() => (
    <div>
      <p>a is larger or equal to 5</p>
    </div>
  )}
  elseRender={() => (
    <div>
      <p>a is less than 5</p>
    </div>
  )}
/>;
```
