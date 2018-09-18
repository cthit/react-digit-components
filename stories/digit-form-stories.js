import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme } from "storybook-readme";

import { Delete } from "@material-ui/icons";

import * as yup from "yup";

import * as DigitDesign from "../components/styles/digit-design/DigitDesign.styles";
import * as DigitLayout from "../components/styles/digit-layout/DigitLayout.styles";
import * as DigitText from "../components/styles/digit-text/DigitText.styles";

import _ from "lodash";

import {
  DigitForm,
  DigitFormField,
  DigitFormFieldArray,
  DigitTextField,
  DigitButton,
  DigitIconButton,
  DigitIfElseRendering
} from "../components";
import DigitFormReadme from "../components/elements/digit-form/readme.md";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

const styleLabel = "style";
const styleOptions = ["raised", "outline", "flat"];
const styleDefaultValue = "flat";

const DigitFormStory = storiesOf("Elements", module);

DigitFormStory.add(
  "DigitForm",
  withReadme(DigitFormReadme, () => {
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
                          {form.values.todos.map((todo, index) => (
                            <DigitLayout.VerticalFill key={todo + "_" + index}>
                              <DigitText.Text text={todo} />
                              <DigitIconButton
                                icon={Delete}
                                onClick={() => {
                                  remove(index);
                                }}
                              />
                            </DigitLayout.VerticalFill>
                          ))}
                        </DigitLayout.Fill>
                      )}
                      elseRender={() => (
                        <DigitText.Text text="You have no todos" />
                      )}
                    />
                    <DigitButton
                      text="Add random todo"
                      primary
                      outline
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
      />
    );
  })
);
