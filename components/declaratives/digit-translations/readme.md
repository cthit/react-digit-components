# DigitTranslations

A declarative way of implementing translations. First off, you need to give your DigitTranslations a unique path, unique for the whole website. Second of, you'll need to define a translations object. One way is to define a translations.json file.

translations.json

```json
{
    //"welcome" is the prop type you'll use the get the translations.
    "welcome": [
        "Welcome to my website", //First value in the array is always the english translation.
        "Välkommen till min hemsida" //Second value is always the swedish translation.
    ],
    "icecream": [
        "You can buy one icecream for a 1 dollar",
        "Du kan köpa en glass för 10 kr"
    ]
}
```

```jsx
import { DigitTranslations } from "@cthit/react-digit-components";
import translations from "./translations.json";

<DigitTranslations
    translations={translations}
    render={(text, activeLanguage) => (
        <div>
            <p>{text.welcome}</p>
            <p>{text.icecream}</p>
        </div>
    )}
/>;
```

If the swedish is selected for example, then this will be rendered:

```
Välkommen till min hemsida
Du kan köpa en glass för 10 kr
```

Use DigitTranslationsActions to change active language.