# DigitSelect

Used to select one of multiple values, e.g. where you are from.

Note that `DigitSelect` is uncontrolled, meaning you have to manage the state from `DigitSelect`. If you are using a `DigitForm`, then you don't have to worry about state.

```jsx
<DigitSelect
    filled
    upperLabel="This is a upperlabel"
    value={this.state.value}
    onChange={e => {
        this.setState({
            value: e.target.checked
        });
    }}
    valueToTextMap={{
        chocolate: "Chocolate",
        vanilla: "Vanilla",
        strawberry: "Strawberry"
    }}
/>
```

## How to use with `DigitForm`

```jsx
<DigitForm
    render={() => (
        <DigitLayout.Column>
            <DigitFormField
                name="favoriteIcecreamFlavour"
                component={DigitSelect}
                componentProps={{
                    upperLabel: "What is icecream flavour?",
                    valueToTextMap: {
                        chocolate: "Chocolate",
                        vanilla: "Vanilla",
                        strawberry: "Strawberry"
                    },
                    filled: true
                }}
            />
        </DigitLayout.Column>
    )}
/>
```
