# DigitBottomNavigation

Mobile navigation, with tabs that has icons and labels. This should only be used for mobile. If you want similar tabs on desktop or tablet, use `DigitTabs`.

```jsx
import { DigitBottomNavigation } from "@cthit/react-digit-components";

import Home from "@material-ui/icons/Add";
import Date from "@material-ui/icons/Date";
import Info from "@material-ui/icons/Info";

<DigitBottomNavigation
  labels={["Home", "Calendar", "Information"]}
  icons={[<Home />, <Date />, <Info />]}
  showLabels
/>;
```
