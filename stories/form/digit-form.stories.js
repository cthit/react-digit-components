import { Delete } from "@material-ui/icons";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import _ from "lodash";
import React from "react";
import * as yup from "yup";
import {
    DigitButton,
    DigitForm,
    DigitFormField,
    DigitFormFieldArray,
    DigitIconButton,
    DigitIfElseRendering,
    DigitProviders,
    DigitTextField
} from "../../components";
import DigitFormReadme from "../../components/elements/digit-form/readme.md";
import * as DigitDesign from "../../components/styles/digit-design/DigitDesign.styles";
import * as DigitLayout from "../../components/styles/digit-layout/DigitLayout.styles";
import * as DigitText from "../../components/styles/digit-text/DigitText.styles";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .add(
        "DigitForm",
        () => {
            return (
                <DigitForm
                    onSubmit={(values, actions) => {
                        action("Values")(values);
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
                                                                    key={
                                                                        todo +
                                                                        "_" +
                                                                        index
                                                                    }
                                                                >
                                                                    <DigitText.Text
                                                                        text={
                                                                            todo
                                                                        }
                                                                    />
                                                                    <DigitIconButton
                                                                        icon={
                                                                            Delete
                                                                        }
                                                                        onClick={() => {
                                                                            remove(
                                                                                index
                                                                            );
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
                                <DigitButton
                                    primary
                                    raised
                                    submit
                                    text="Dummy submit"
                                />
                            </DigitDesign.CardButtons>
                        </DigitDesign.Card>
                    )}
                />
            );
        },
        {
            info: {
                text: DigitFormReadme,
                propTables: [],
                propTablesExclude: [
                    DigitProviders,
                    DigitLayout.Fill,
                    DigitIfElseRendering
                ],
                source: false,
                header: false
            }
        }
    );
