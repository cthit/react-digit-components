# DigitMapStringToValue

A way to define a map with ease declarativly.

```jsx
import { DigitMapStringToValue } from "@cthit/react-digit-components";

<DigitMapStringToValue
    currentString={currentSelection}
    stringToValueMap={{
        One: "Is the first value after zero",
        Two: "The square root of two is something",
        Three: "The best number."
    }}
    render={value => (
        <div>
            <p>What we think of the number {currentSelection}:</p>
            <p>{value}</p>
        </div>
    )}
/>;
```
