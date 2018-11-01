# DigitRadioButtonGroup

Should be used when only one of multiple options can be made. You create the actual radio buttons by using the radioButtons prop. It needs an array of objects, where the object are the information for each radio button, e.g. label and id. Can be used with `DigitForm`.

```jsx
<DigitRadioButtonGroup
  value={this.state.selected}
  onChange={e => {
    this.setState({
      selected: e.target.value
    });
  }}
  upperLabel="This is an upper label"
  lowerLabel="This is an lower label"
  radioButtons={[
    {
      id: "5000",
      primary: true,
      label: "Primary"
    },
    {
      id: "4000",
      secondary: true,
      label: "Secondary"
    },
    {
      id: "3000",
      label: "Default"
    },
    {
      id: "2000",
      disabled: true,
      label: "Disabled"
    }
  ]}
/>
```

## How to use with `DigitForm`

```jsx
<DigitForm
  render={() => (
    <DigitLayout.Column>
      <DigitFormField
        name="delivery"
        component={DigitRadioButtonGroup}
        componentProps={{
          radioButtons: [
            { id: "fast", label: "1-2 days, 10 dollars", primary: true },
            { id: "slow", label: "4-5 days, 5 dollars", primary: true },
            { id: "free", label: "9-10 days, free", primary: true }
          ]
        }}
      />
    </DigitLayout.Column>
  )}
/>
```
