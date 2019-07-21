# DigitTable

A table consisting of data rows. It has header texts for each column. Support for a link per row and the option to transform the table to a select. This component is not compatible with `DigitForm`.

```jsx
<DigitTable
    search
    titleText="Names"
    searchText="Search for names"
    showSearchableProps
    idProp="id"
    startOrderBy="firstName"
    columnsOrder={["id", "firstName", "surname", "age"]}
    headerTexts={{
        id: "Id",
        firstName: "Firstname",
        surname: "Surname",
        age: "Age"
    }}
    data={[
        {
            id: "1337",
            firstName: "Asdf",
            surname: "Asdfsson",
            age: 33
        },
        {
            id: "4444",
            firstName: "Glass",
            surname: "Glasssson",
            age: 50
        },
        {
            id: "4324",
            firstName: "Jeremy",
            surname: "Clarkson",
            age: 50
        },
        {
            id: "1234",
            firstName: "James",
            surname: "May",
            age: 99
        },
        {
            id: "4321",
            firstName: "Richard",
            surname: "Hammond",
            age: 18
        },
        {
            id: "9999",
            firstName: "The",
            surname: "Stig",
            age: 55
        },
        {
            id: "2244",
            firstName: "Henrik",
            surname: "Lundqvist",
            age: 30
        }
    ]}
/>
```

A table with the option to select rows and links. Note that this is uncontrolled, meaning you have to save `selected` and update it with `onSelectedUpdated`.

```jsx
class MyDigitTable extends React.Component {
    state = {
        selected: []
    };

    onSelectedChange = selected => {
        this.setState({
            selected: selected
        });
    };

    render() {
        const { selected } = this.state;
        return (
            <DigitTable
                selected={selected}
                onSelectedUpdated={this.onSelectedChange}
                search
                titleText="Names"
                searchText="Search for names"
                showSearchableProps
                idProp="id"
                startOrderBy="firstName"
                columnsOrder={["id", "firstName", "surname", "age"]}
                headerTexts={{
                    id: "Id",
                    firstName: "Firstname",
                    surname: "Surname",
                    age: "Age",
                    __checkbox: "Chose",
                    __link: "Link"
                }}
                data={[
                    {
                        id: "1337",
                        firstName: "Asdf",
                        lastName: "Asdfsson",
                        age: 33,
                        __link: "/link"
                    },
                    {
                        id: "4444",
                        firstName: "Glass",
                        lastName: "Glasssson",
                        age: 50,
                        __link: "/link"
                    },
                    {
                        id: "4324",
                        firstName: "Jeremy",
                        lastName: "Clarkson",
                        age: 50,
                        __link: "/link"
                    },
                    {
                        id: "1234",
                        firstName: "James",
                        lastName: "May",
                        age: 99,
                        __link: "/link"
                    },
                    {
                        id: "4321",
                        firstName: "Richard",
                        lastName: "Hammond",
                        age: 18,
                        __link: "/link"
                    },
                    {
                        id: "9999",
                        firstName: "The",
                        lastName: "Stig",
                        age: 55,
                        __link: "/link"
                    },
                    {
                        id: "2244",
                        firstName: "Henrik",
                        lastName: "Lundqvist",
                        age: 30,
                        __link: "/link"
                    }
                ]}
            />
        );
    }
}
```
