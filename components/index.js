import DigitButton from "./elements/digit-button";
import DigitCheckbox from "./elements/digit-checkbox";
import DigitTextField from "./elements/digit-text-field";
import DigitSwitch from "./elements/digit-switch";
import DigitTooltip from "./elements/digit-tooltip";
import DigitIconButton from "./elements/digit-icon-button";
import DigitForm from "./elements/digit-form";
import DigitFormField from "./elements/digit-form-field";
import DigitFormFieldArray from "./elements/digit-form-field-array";
import DigitTextArea from "./elements/digit-text-area";
import DigitSelect from "./elements/digit-select";
import DigitHeader from "./elements/digit-header";
import DigitNavLink from "./elements/digit-nav-link";
import DigitFAB from "./elements/digit-fab";
import DigitDisplayData from "./elements/digit-display-data";
import DigitEditData from "./elements/digit-edit-data";
import DigitMarkdown from "./elements/digit-markdown";
import DigitTabs from "./elements/digit-tabs";
import DigitBottomNavigation from "./elements/digit-bottom-navigation";
import DigitLoading from "./elements/digit-loading";
import DigitDateAndTimePicker from "./elements/digit-date-and-time-picker";
import DigitDatePicker from "./elements/digit-date-picker";
import DigitTimePicker from "./elements/digit-time-picker";
import DigitRadioButtonGroup from "./elements/digit-radio-button-group";
import DigitStepper from "./elements/digit-stepper";
import DigitImage from "./elements/digit-image";
import DigitAvatar from "./elements/digit-avatar";
import DigitChip from "./elements/digit-chip";
import DigitAutocompleteSelectSingle from "./elements/digit-autocomplete-select-single";
import DigitAutocompleteSelectMultiple from "./elements/digit-autocomplete-select-multiple";

import DigitIfElseRendering from "./declaratives/digit-if-else-rendering";
import DigitMapStringToValue from "./declaratives/digit-map-string-to-value";
import DigitTranslations from "./declaratives/digit-translations";
import DigitProviders from "./declaratives/digit-providers";
import DigitRedirect from "./declaratives/digit-redirect";
import DigitComponentSelector from "./declaratives/digit-component-selector";
import DigitRenderSelector from "./declaratives/digit-render-selector";

import DigitToast from "./views/digit-toast";
import DigitDialog from "./views/digit-dialog";
import DigitMenu from "./views/digit-menu";
import DigitTable from "./views/digit-table";

import * as DigitRedirectActions from "./declaratives/digit-redirect/DigitRedirect.declarative.action-creator";
import * as DigitToastActions from "./views/digit-toast/DigitToast.view.action-creator";
import * as DigitDialogActions from "./views/digit-dialog/DigitDialog.view.action-creator";
import * as DigitTranslationsActions from "./declaratives/digit-translations/DigitTranslations.declarative.action-creator";

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
    DigitBottomNavigation,
    DigitTabs,
    DigitTextArea,
    DigitSelect,
    DigitHeader,
    DigitNavLink,
    DigitFAB,
    DigitDisplayData,
    DigitEditData,
    DigitMarkdown,
    DigitLoading,
    DigitDateAndTimePicker,
    DigitDatePicker,
    DigitTimePicker,
    DigitRadioButtonGroup,
    DigitStepper,
    DigitImage,
    DigitChip,
    DigitAvatar,
    DigitAutocompleteSelectSingle,
    DigitAutocompleteSelectMultiple,
    /* Views */
    DigitToast,
    DigitDialog,
    DigitMenu,
    DigitTable,
    /* Actions */
    DigitToastActions,
    DigitRedirectActions,
    DigitDialogActions,
    DigitTranslationsActions,
    /* Declaratives */
    DigitIfElseRendering,
    DigitMapStringToValue,
    DigitTranslations,
    DigitProviders,
    DigitRedirect,
    DigitComponentSelector,
    DigitRenderSelector,
    /* Styles */
    DigitLayout,
    DigitDesign,
    DigitText
};
