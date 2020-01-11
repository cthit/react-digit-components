import DigitButton from "./elements/digit-button";
import DigitCheckbox from "./elements/digit-checkbox";
import DigitTextField from "./elements/digit-text-field";
import DigitSwitch from "./elements/digit-switch";
import DigitTooltip from "./elements/digit-tooltip";
import DigitIconButton from "./elements/digit-icon-button";
import DigitTextArea from "./elements/digit-text-area";
import DigitSelect from "./elements/digit-select";
import DigitNavLink from "./elements/digit-nav-link";
import DigitFAB from "./elements/digit-fab";
import DigitDisplayData from "./elements/digit-display-data";
import DigitEditData from "./elements/digit-edit-data";
import DigitEditDataCard from "./elements/digit-edit-data-card";
import DigitMarkdown from "./elements/digit-markdown";
import DigitTabs from "./elements/digit-tabs";
import DigitBottomNavigation from "./elements/digit-bottom-navigation";
import DigitLoading from "./elements/digit-loading";
import DigitDateAndTimePicker from "./elements/digit-date-and-time-picker";
import DigitDatePicker from "./elements/digit-date-picker";
import DigitTimePicker from "./elements/digit-time-picker";
import DigitRadioButtonGroup from "./elements/digit-radio-button-group";
import DigitStepper from "./elements/digit-stepper";
import DigitAvatar from "./elements/digit-avatar";
import DigitChip from "./elements/digit-chip";
import DigitAutocompleteSelectSingle from "./elements/digit-autocomplete-select-single";
import DigitAutocompleteSelectMultiple from "./elements/digit-autocomplete-select-multiple";
import DigitList from "./elements/digit-list";
import DigitListSelectSingle from "./elements/digit-list-select-single";
import DigitListSelectMultiple from "./elements/digit-list-select-multiple";
import DigitButtonGroup from "./elements/digit-button-group";

import DigitProviders from "./declaratives/digit-providers";

import DigitToast from "./views/digit-toast";
import DigitDialog from "./views/digit-dialog";
import DigitMenu from "./views/digit-menu";
import DigitTable from "./views/digit-table";
import DigitCRUD from "./views/digit-crud";
import DigitCalendar from "./views/digit-calendar";
import DigitForm from "./views/digit-form";
import DigitFormField from "./views/digit-form-field";
import DigitFormFieldArray from "./views/digit-form-field-array";
import DigitHeader from "./views/digit-header";

import useDigitTranslations from "./hooks/use-digit-translations";
import useGamma from "./hooks/use-gamma";
import useGammaUser from "./hooks/use-gamma-user";

import {
    digitDialogClosedCancel,
    digitDialogClosedConfirm,
    digitDialogCustomOpen,
    digitDialogOpen
} from "./views/digit-dialog/DigitDialog.view.action-creator";

import { digitToastOpen } from "./views/digit-toast/DigitToast.view.action-creator";

import {
    Center,
    Column,
    DownRightPosition,
    Fill,
    Flex,
    Grid,
    GridItem,
    Hide,
    HideFill,
    Margin,
    MarginBottom,
    MarginLeft,
    MarginRight,
    MarginTop,
    Order,
    Padding,
    Row,
    Size,
    Spacing,
    UniformGrid
} from "./styles/digit-layout/DigitLayout.styles";

import {
    Card,
    CardBody,
    CardButtons,
    CardHeader,
    CardHeaderImage,
    CardIcon,
    CardMenuContainer,
    CardSubTitle,
    CardTitle,
    Divider,
    Link
} from "./styles/digit-design/DigitDesign.styles";

import {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Subtitle,
    Subtitle2,
    Text,
    Title
} from "./styles/digit-text/DigitText.styles";

const DigitDialogActions = {
    digitDialogOpen,
    digitDialogCustomOpen,
    digitDialogClosedCancel,
    digitDialogClosedConfirm
};

const DigitToastActions = { digitToastOpen };

const DigitLayout = {
    Flex,
    Grid,
    GridItem,
    UniformGrid,
    Column,
    Row,
    DownRightPosition,
    Fill,
    MarginTop,
    MarginBottom,
    MarginLeft,
    MarginRight,
    Margin,
    Padding,
    Center,
    HideFill,
    Hide,
    Size,
    Order,
    Spacing
};

const DigitDesign = {
    Card,
    CardHeader,
    CardHeaderImage,
    CardIcon,
    CardMenuContainer,
    CardTitle,
    CardSubTitle,
    CardBody,
    CardButtons,
    Divider,
    Link
};

const DigitText = {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Subtitle,
    Subtitle2,
    Text,
    Title
};

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
    DigitEditDataCard,
    DigitMarkdown,
    DigitLoading,
    DigitDateAndTimePicker,
    DigitDatePicker,
    DigitTimePicker,
    DigitRadioButtonGroup,
    DigitStepper,
    DigitChip,
    DigitAvatar,
    DigitAutocompleteSelectSingle,
    DigitAutocompleteSelectMultiple,
    DigitCalendar,
    DigitList,
    DigitListSelectMultiple,
    DigitListSelectSingle,
    DigitButtonGroup,
    /* Views */
    DigitToast,
    DigitDialog,
    DigitMenu,
    DigitTable,
    DigitCRUD,
    /* Actions */
    DigitToastActions,
    DigitDialogActions,
    /* Declaratives */
    DigitProviders,
    /* Styles */
    DigitLayout,
    DigitDesign,
    DigitText,
    /* Hooks */
    useDigitTranslations,
    useGamma,
    useGammaUser
};
