# DigitNavigation

```js
<DigitProviders>
  <DigitNavigation
    title={title}
    renderMain={() => <div>Hej</div>}
    renderDrawer={closeDrawer => (
      <div>
        <DigitNavLink onClick={closeDrawer} link="/hej" text="Hej" />
      </div>
    )}
  />
</DigitProviders>
```
