# Order

A wrapper element for easy ordering. This must be inside either a `Column`, `Row`, `Grid`, `UniformGrid` or anything with Flex or Grid.

```jsx
import { DigitLayout } from "@cthit/react-digit-components";

<DigitLayout.Column>
  <DigitLayout.Order order={5}>1</DigitLayout.Order>
  <DigitLayout.Order order={3}>2</DigitLayout.Order>
  <DigitLayout.Order order={4}>3</DigitLayout.Order>
  <DigitLayout.Order order={1}>4</DigitLayout.Order>
  <DigitLayout.Order order={2}>5</DigitLayout.Order>
</DigitLayout.Column>;
```
