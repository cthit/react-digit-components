# DigitHeader

A mobile friendly way of laying out the base blocks. Has a header, an optional drawer and an area for drawing your website. If you don't want a navigation, just remove the renderDrawer prop.

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
