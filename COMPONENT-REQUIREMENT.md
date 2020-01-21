These are the rules for every component in react-digit-component:

* Follow style-guides/react
  * Especially to make the file structure the same everywhere.
* Has a story
  * Has a story in storybook for easier usage.
* Has proptypes if possible 
  * e.g. not a hook.
* Has a single purpose 
  * For example, DigitList, DigitListSelectSingle, DigitListSelectMultiple
* Inputs are uncontrolled
  * Inputs should have a value and an onChange prop. 
* Try not to add new dependencies to react-digit-components with your component
  * There must be a really, **really** good reason to add a new dependency.