# DigitHeader

```js
<DigitProviders>
  <DigitHeader
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
