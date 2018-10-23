# react-digit-components

This is a set of reusable ReactJS components that digIT uses. The components are built mainly using [material-ui](https://material-ui.com). But we also use awesome libraries like [Formik](https://jaredpalmer.com/formik), [material-ui-pickers](https://material-ui-pickers.firebaseapp.com/) and more!

The goal with react-digit-components is the increase the efficiency of digIT by creating base components to reduce boilerplate code like styling or functionality.

## Install

`yarn add @cthit/react-digit-components`

`npm install --save @cthit/react-digit-components`

## Storybook

We use Storybook so you can interact with the different components that react-digit-components has. Every component has its own readme which you can view inside the storybook.

[Storybook link!](http://cthit.github.io/react-digit-components)

## Components

### Must have components when using react-digit-components

- `DigitHeader`

Sets up the main structure of your website. It has three render props that you can use to easily make a phone friendly website with.

```
renderMain()
renderDrawer(closeNavigation : function)
renderHeader()
```

- `DigitProviders`

Setups up redux, translations and all the components. You must only have one, no more nor less in the root of your application.

**!! IMPORTANT !!**: You must have the following line in your public/index.html, in the <head></head> tag.

```
<!-- This comment is used to make react-digit-components work properly -->
<!-- insertion-point-jss -->
```

### Buttons

- `DigitButton`

A normal button.

- `DigitIconButton`

A circular button with an icon.

- `DigitFAB`

A circular button like `DigitIconButton`, but only one of these should be shown at a time on your website. It should also be in the bottom right corner.

### Input

- `DigitTextField`

A normal text input with an upperlabel and lowerlabel.

- `DigitTextArea`

Like a text field but supports rows.

- `DigitCheckbox`

A normal checkbox.

- `DigitSwitch`

A fancy on/off switch.

- `DigitDateAndTimePicker`, `DigitTimePicker`, `DigitDatePicker`

Select date, time or date and time.

- `DigitSelect`

Select between different values.

### Form

- `DigitForm`, `DigitFormField` and
  `DigitFormFieldArray`

To build a form using react-digit-components, you can use on `DigitForm`, and wrap multiple `DigitFormField` and `DigitFormFieldArray` inside it.

- `DigitEditData`

This is the easier way to create a form, however, it is not as customizable as if you use `DigitForm`.

### Navigation

- `DigitHeader` (with sidebar)

DigitHeader is something that you really should have when using react-digit-components. And if you provide it with renderDrawer, it also gives you a sidebar that is always open if there's enough space. You can use `DigitNavLink` to create good looking buttons for the navbar.

- `DigitTabs`

Tabs that are just under the `DigitHeader`. Useful when on desktop or tablet, and don't have a lot of navigation.

- `DigitBottomNavigation`

A navigation for mobile if you do not have a lot of navigation (thus need the `DigitHeader` with sidebar). This should not be used on desktop or tablet. In that case you might want to use `DigitTabs`

### Popup information

- `DigitMenu`

The classic "three dots vertical" menu button, which when pressed will expand to multiple different actions.

- `DigitDialog`

Call a redux function with an object to show a modal dialog. This should be used when the user is about to something major, like deleting their account or something like that.

- `DigitToast`

Call a redux function with an object to show a toast message. This should be used to inform the user about an action that they just did, e.g. created an user or deleted an entry(you can also supply a function and undo button so that the user can undo).

- `DigitTooltip`

Wrap this with the element that you want to add a tooltip for.

### Display information

- `DigitDesign.Card`

A material design card that has a few predefined elements in `DigitDesign`.

- `DigitTable`

A stylish table that also has a mobile view. There's also support for search, sorting on columns as well as pagination.

- `DigitDisplayData`

An easy way to display two columns of information. Where the first column has a fixedWidth and the second fills out.

### Utils

- `DigitIfElseRendering`

With render props and a test boolean, you can easily render what you want depening on the test boolean.

- `DigitTranslations`

Supply an object that has swedish and english text, and retrieve through a render prop the text in the language that is currently selected. You can with `DigitTranslations` also see what language that is currently selected and with a function change it.

### Text

`DigitText` provides styled Roboto text. The most important text elements are `DigitText.Text` and `DigitText.Heading1` (There's from `DigitText.Heading1` to `DigitText.Heading2`).
