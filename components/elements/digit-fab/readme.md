# DigitFAB

DigitFAB, also known as Digit Floating Action Button, is a circular button. There should only be one of these buttons showing at a time. A DigitFAB should represent the main action at the given time, e.g. add or editing something. The order for priority regarding color is secondary, primary and lastly none.

```jsx
import { DigitFAB } from "@cthit/react-digit-components";
import Add from "@material-ui/icons/Add";

<DigitFAB
    icon={Add}
    secondary
    onClick={() => {
        console.log("Secondary Add FAB");
    }}
/>;
```

## How to use with `DigitForm`

To use `DigitFAB` as the submit button for a `DigitForm`, then you have to add the `submit` prop to `DigitFAB`. E.g.

```jsx
<DigitForm
    render={() => (
        <DigitLayout.Column>
            <DigitFormField
                name="date"
                component={DigitDatePicker}
                componentProps={{ upperLabel: "Enter date" }}
            />

            <DigitFAB icon={Edit} submit />
        </DigitLayout.Column>
    )}
/>
```
