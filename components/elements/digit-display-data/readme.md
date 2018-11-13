# DigitDisplayData

`DigitDisplayData` is a easy way to display two columns of data. The first column is usually the column that for every row has a describing text about the value on the same row. E.g. the first column maybe have the texts ["Firstname", "Surname", "Username"], and the second column has ["Smurf", "Smurfsson", "Coder"]. With the first column you'll need to set the fixedWidth. The second column will however fill.

```jsx
import { DigitDisplayData } from "@cthit/react-digit-components";

<DigitDisplayData
    fixedWidth={"200px"}
    data={{
        firstname: "Smurf",
        surname: "Smurfsson",
        username: "Coder"
    }}
    keysText={{
        firstname: "Firstname",
        surname: "Surname",
        username: "Username"
    }}
    keysOrder={["firstname", "surname", "username"]}
/>;
```
