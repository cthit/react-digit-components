# DigitButton

A simple button. Use color and style with care, reflect on what button is the most important one in a single page and give that one more color or a differnt style. Do not confuse the user with multiple high priority buttons. The order for priority regarding style is raised, outlined and last flat. The order for priority regarding color is secondary, primary and lastly none.

Here are some examples:

```jsx
import { DigitButton } from "@cthit/react-digit-components";

<DigitButton
  text="A primary and raised button"
  primary
  raised
  onClick={() => {
    console.log("Primary and raised button has been pressed");
  }}
/>;
```

## How to use with `DigitForm`

To use `DigitButton` as the submit button for a `DigitForm`, then you have to add the `submit` prop to `DigitButton`. E.g.

```jsx
<DigitForm
  render={() => (
    <DigitLayout.Column>
      <DigitFormField
        name="date"
        component={DigitDatePicker}
        componentProps={{ upperLabel: "Enter date" }}
      />

      <DigitButton text="Submit" submit />
    </DigitLayout.Column>
  )}
/>
```
