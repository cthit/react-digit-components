# DigitNavLink

This is used in conjunction with `DigitHeader` and its `renderDrawer` function.

```jsx
import { DigitNavLink } from "@cthit/react-digit-components";

<DigitHeader
    renderDrawer={closeDrawer => (
        <DigitNavLink text="Hej" link="/hej" onClick={closeDrawer} />
    )}
/>;
```
