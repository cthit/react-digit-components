import DigitButton from "./elements/digit-button";
import DigitCheckbox from "./elements/digit-checkbox";
import DigitTextField from "./elements/digit-text-field";
import DigitSwitch from "./elements/digit-switch";
import DigitTooltip from "./elements/digit-tooltip";
import DigitIconButton from "./elements/digit-icon-button";
import DigitForm from "./elements/digit-form";
import DigitFormField from "./elements/digit-form-field";
import DigitFormFieldArray from "./elements/digit-form-field-array";

import DigitIfElseRendering from "./declaratives/digit-if-else-rendering";
import DigitMapStringToValue from "./declaratives/digit-map-string-to-value";
import DigitTranslations from "./declaratives/digit-translations";
import DigitProviders from "./declaratives/digit-providers";
import DigitRedirect from "./declaratives/digit-redirect";

import DigitToast from "./views/digit-toast";

import * as DigitRedirectActions from "./declaratives/digit-redirect/DigitRedirect.declarative.action-creator";
import * as DigitToastActions from "./views/digit-toast/DigitToast.view.action-creator";

import * as DigitLayout from "./styles/digit-layout/DigitLayout.styles";
import * as DigitDesign from "./styles/digit-design/DigitDesign.styles";
import * as DigitText from "./styles/digit-text/DigitText.styles";

export {
  /* Elements */
  DigitButton,
  DigitCheckbox,
  DigitTextField,
  DigitSwitch,
  DigitTooltip,
  DigitIconButton,
  DigitForm,
  DigitFormField,
  DigitFormFieldArray,
  /* Views */
  DigitToast,
  DigitToastActions,
  /* Declaratives */
  DigitIfElseRendering,
  DigitMapStringToValue,
  DigitTranslations,
  DigitProviders,
  DigitRedirect,
  DigitRedirectActions,
  /* Styles */
  DigitLayout,
  DigitDesign,
  DigitText
};
