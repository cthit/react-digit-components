# DigitProviders

DigitProviders is something you must include on your website to ensure the proper functionality of react-digit-components. Something else you must include in your index.html page, in the head tag, is the following:

```
<!-- This comment is used to make react-digit-components work properly -->
<noscript id="jss-insertion-point"></noscript>
```

DigitProviders initializes the following things:

-   Redux
-   Theming of the components
-   BrowerRouter for react-router-dom

```jsx
import { DigitProviders } from "@cthit/react-digit-components";

<DigitProviders
    preloadedState={{
        loading: true
    }}
    defaultLangauge="sv"
>
    <DigitHeader
        text="Example"
        renderDrawer={() => (
            <div>
                <p>Content</p>
            </div>
        )}
    />
</DigitProviders>;
```
