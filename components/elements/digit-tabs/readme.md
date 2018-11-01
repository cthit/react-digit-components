# DigitTabs

A mobile, tablet and desktop friendly way of navigating between multiple panes. Should always be positioned as high on the website as possible. If you want a mobile version of `DigitTabs`, then there's `DigitBottomNavigation`. `

```jsx
import { DigitTabs } from "@cthit/react-digit-components";

<DigitTabs
  centered
  labels={["First tab", "Second tab"]}
  selected={this.state.selectedTab}
  onChange={selected => {
    this.setState({
      selectedTab: selected
    });
  }}
/>;
```
