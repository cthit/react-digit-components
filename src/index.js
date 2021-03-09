import DigitButton from "./components/digit-button";
import DigitCheckbox from "./components/digit-checkbox";
import DigitTextField from "./components/digit-text-field";
import DigitSwitch from "./components/digit-switch";
import DigitTooltip from "./components/digit-tooltip";
import DigitIconButton from "./components/digit-icon-button";
import DigitTextArea from "./components/digit-text-area";
import DigitSelect from "./components/digit-select";
import DigitNavLink from "./components/digit-nav-link";
import DigitFAB from "./components/digit-fab";
import DigitDisplayData from "./components/digit-display-data";
import DigitEditData from "./components/digit-edit-data";
import DigitEditDataCard from "./components/digit-edit-data-card";
import DigitMarkdown from "./components/digit-markdown";
import DigitTabs from "./components/digit-tabs";
import DigitBottomNavigation from "./components/digit-bottom-navigation";
import DigitLoading from "./components/digit-loading";
import DigitDateAndTimePicker from "./components/digit-date-and-time-picker";
import DigitDatePicker from "./components/digit-date-picker";
import DigitTimePicker from "./components/digit-time-picker";
import DigitRadioButtonGroup from "./components/digit-radio-button-group";
import DigitStepper from "./components/digit-stepper";
import DigitAvatar from "./components/digit-avatar";
import DigitChip from "./components/digit-chip";
import DigitAutocompleteSelectSingle from "./components/digit-autocomplete-select-single";
import DigitAutocompleteSelectMultiple from "./components/digit-autocomplete-select-multiple";
import DigitList from "./components/digit-list";
import DigitListSelectSingle from "./components/digit-list-select-single";
import DigitButtonGroup from "./components/digit-button-group";
import DigitCustomDialog from "./components/digit-custom-dialog";
import DigitToast from "./components/digit-toast";
import DigitDialog from "./components/digit-dialog";
import DigitSelectFile from "./components/digit-select-file";
import DigitGammaActions from "./components/digit-gamma-actions";
import DigitHeader from "./components/digit-header";
import { DigitGammaActionsDummy } from "./components/digit-gamma-actions/DigitGammaActions.element";

import DigitProviders from "./declaratives/digit-providers";

import DigitMenu from "./components/digit-menu";
import DigitTable from "./components/digit-table";
import DigitSelectMultipleTable from "./components/digit-select-multiple-table";
import DigitCRUD from "./components/digit-crud";
import DigitForm from "./components/digit-form";
import DigitHeaderDrawer from "./components/digit-header-drawer";
import DigitListSelectMultiple from "./components/digit-list-select-multiple";

import useDigitTranslations from "./hooks/use-digit-translations";
import useDigitCustomDialog from "./hooks/use-digit-custom-dialog";
import useDigitDialog from "./hooks/use-digit-dialog";
import useDigitFormField from "./hooks/use-digit-form-field";
import useDigitFormFieldArray from "./hooks/use-digit-form-field-array";
import useDigitToast from "./hooks/use-digit-toast";
import useGamma from "./hooks/use-gamma";
import useGammaMe from "./hooks/use-gamma-me";
import useGammaStatus from "./hooks/use-gamma-status";

import {
    Center,
    Column,
    DownRightPosition,
    Flex,
    Grid,
    GridItem,
    Hide,
    Order,
    Row,
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
    CardSubtitle,
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

const DigitLayout = {
    Flex,
    Grid,
    GridItem,
    UniformGrid,
    Column,
    Row,
    DownRightPosition,
    Center,
    Hide,
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
    CardSubtitle,
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
    DigitList,
    DigitListSelectMultiple,
    DigitListSelectSingle,
    DigitButtonGroup,
    DigitSelectFile,
    DigitGammaActions,
    DigitGammaActionsDummy,
    /* Views */
    DigitToast,
    DigitDialog,
    DigitCustomDialog,
    DigitMenu,
    DigitTable,
    DigitSelectMultipleTable,
    DigitCRUD,
    DigitHeaderDrawer,
    /* Declaratives */
    DigitProviders,
    /* Styles */
    DigitLayout,
    DigitDesign,
    DigitText,
    /* Hooks */
    useDigitTranslations,
    useDigitCustomDialog,
    useDigitDialog,
    useDigitFormField,
    useDigitFormFieldArray,
    useDigitToast,
    useGamma,
    useGammaMe,
    useGammaStatus
};
