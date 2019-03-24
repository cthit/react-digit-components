# DigitRenderSelector
An easy way to select one out of multiple renders.

```jsx
import { DigitRenderSelector } from "@cthit/react-digit-components";

<DigitRenderSelector
    activeRender={activeRender}
    renders={[
        () => <Text text="Hej" />,
        () => <Title text="Lol" />,
        () => (
            <Column>
                <Text text="Hej" />
                <Title text="Lol" />
            </Column>
        )
    ]}
/>

```