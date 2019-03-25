# DigitForm

`DigitForm` is a way to create a form. If you just want a bunch of input in a `DigitDesign.Card`, then use `DigitEditData` instead, it's easier but not as customizable. You'll need a bunch of `DigitFormField` and `DigitFormFieldArray` inside `DigitForm`, and it will automatically connect to `DigitForm`.

This is an example of `DigitForm` only using `DigitFormField`.

```jsx
import { DigitForm, DigitFormField } from "react-digit-components";

<DigitForm
  onSubmit={(values, actions) => {
    console.log(values);
  }}
  initialValues={{ text: "text", agreement: false }}
  validationSchema={yup.object().shape({
    text: yup.string().required("This can't be empty"),
    agreement: yup.boolean().required("You need to accept")
  })}
  render={({ errors }) => (
    <DigitDesign.Card absWidth="300px" absHeight="300px">
      <DigitDesign.CardBody>
        <DigitFormField
          name="text"
          component={DigitTextField}
          componentProps={{
            upperLabel: "Hej"
          }}
        />
        <DigitFormField
          name="agreement"
          component={DigitCheckbox}
          componentProps={{ primary: true, label="Agreement" }}
        />
      </DigitDesign.CardBody>
      <DigitDesign.CardButtons>
        <DigitButton primary raised submit text="Dummy submit" />
      </DigitDesign.CardButtons>
    </DigitDesign.Card>
  )}
/>;
```

This is an example of `DigitForm` using `DigitFormField` and `DigitFormFieldArray`.

```jsx
import {
    DigitForm,
    DigitFormField,
    DigitFormFieldArray
} from "react-digit-components";

<DigitForm
    onSubmit={(values, actions) => {
        console.log(values);
    }}
    initialValues={{ text: "text", todos: ["Aspa digIT"] }}
    validationSchema={yup.object().shape({
        text: yup.string().required("This can't be empty"),
        todos: yup
            .array()
            .of(yup.string())
            .required()
    })}
    render={({ errors }) => (
        <DigitDesign.Card absWidth="300px" absHeight="500px">
            <DigitDesign.CardBody>
                {errors.todos && (
                    <DigitText.Text text="You have to have atleast one todo" />
                )}
                <DigitFormField
                    name="text"
                    component={DigitTextField}
                    componentProps={{
                        upperLabel: "Hej"
                    }}
                />
                <DigitFormFieldArray
                    name="todos"
                    render={({ form, remove, push }) => (
                        <DigitLayout.Fill>
                            <DigitIfElseRendering
                                test={
                                    form.values.todos != null &&
                                    form.values.todos.length > 0
                                }
                                ifRender={() => (
                                    <DigitLayout.Fill>
                                        {form.values.todos.map(
                                            (todo, index) => (
                                                <DigitLayout.VerticalFill
                                                    key={todo + "_" + index}
                                                >
                                                    <DigitText.Text
                                                        text={todo}
                                                    />
                                                    <DigitIconButton
                                                        icon={Delete}
                                                        onClick={() => {
                                                            remove(index);
                                                        }}
                                                    />
                                                </DigitLayout.VerticalFill>
                                            )
                                        )}
                                    </DigitLayout.Fill>
                                )}
                                elseRender={() => (
                                    <DigitText.Text text="You have no todos" />
                                )}
                            />
                            <DigitButton
                                text="Add random todo"
                                primary
                                outlined
                                onClick={() => {
                                    const randomTodos = [
                                        "Finish this form",
                                        "Use DigitButton",
                                        "Aspa digIT",
                                        "Sök digIT",
                                        "Eat icecream",
                                        "Make food",
                                        "Pray for servers"
                                    ];

                                    push(_.sample(randomTodos));
                                }}
                            />
                        </DigitLayout.Fill>
                    )}
                />
            </DigitDesign.CardBody>
            <DigitDesign.CardButtons>
                <DigitButton primary raised submit text="Dummy submit" />
            </DigitDesign.CardButtons>
        </DigitDesign.Card>
    )}
/>;
```
