# react-digit-components

This is a set of reusable ReactJS components that digIT uses. The components are built mainly using [material-ui](https://material-ui.com). 

The goal with react-digit-components is the increase the efficiency of digIT by creating base components to reduce boilerplate code like styling or functionality.

## Install

`yarn add @cthit/react-digit-components`

`npm install --save @cthit/react-digit-components`

## Storybook

We use Storybook so you can interact with the different components that react-digit-components has. Every component has its own readme which you can view inside the storybook.

[Storybook link!](http://cthit.github.io/react-digit-components)

## Components

### Must have components when using react-digit-components

-   `DigitHeader`

Sets up the main structure of your website. It has three render props that you can use to easily make a phone friendly website with.

```
renderMain()
renderDrawer(closeNavigation : function)
renderHeader()
```

-   `DigitProviders`

Setups up redux, translations and all the components. You must only have one, no more nor less in the root of your application.
