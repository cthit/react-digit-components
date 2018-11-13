# DigitEditData

The easier, but not as customizable way, to create a form as opposed to `DigitForm`. What you will get is a DigitDesign.Card and input component that you specify. You should use `yup` for validation. It's super easy, you can read all about it here: https://github.com/jquense/yup. In the `onSubmit` function, you get two props. `values`, which is the data from the form. `actions` has a bunch cool functions, however, the only useful function is `resetForm`. More information is available here: https://jaredpalmer.com/formik/docs/api/formik.

```jsx
<DigitEditData
    initialValues={{
        firstname: "Smurf",
        surname: "Smurfsson",
        email: "email@email.com",
        agreement: false
    }}
    onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
    }}
    validationSchema={yup.object().shape({
        firstname: yup.string().required(),
        surname: yup.string().required(),
        email: yup.string().required(),
        agreement: yup.boolean().required()
    })}
    titleText={title}
    submitText={submit}
    keysOrder={["firstname", "surname", "email", "agreement"]}
    keysComponentData={{
        firstname: {
            component: DigitTextField,
            componentProps: {
                filled: true,
                upperLabel: "Firstname"
            }
        },
        surname: {
            component: DigitTextField,
            componentProps: {
                filled: true,
                upperLabel: "Surname"
            }
        },
        email: {
            component: DigitTextField,
            componentProps: {
                filled: true,
                upperLabel: "Email"
            }
        },
        agreement: {
            component: DigitCheckbox,
            componentProps: {
                primary: true,
                label: "Agreement"
            }
        }
    }}
/>
```
