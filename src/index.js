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
import DigitButtonGroup from "./elements/digit-button-group";
import DigitCustomDialog from "./elements/digit-custom-dialog";
import DigitToast from "./elements/digit-toast";
import DigitDialog from "./elements/digit-dialog";
import DigitSelectFile from "./elements/digit-select-file";

import DigitProviders from "./declaratives/digit-providers";

import DigitMenu from "./views/digit-menu";
import DigitTable from "./views/digit-table";
import DigitCRUD from "./views/digit-crud";
import DigitForm from "./views/digit-form";
import DigitHeader from "./views/digit-header";
import DigitListSelectMultiple from "./views/digit-list-select-multiple";

import useDigitTranslations from "./hooks/use-digit-translations";
import useDigitCustomDialog from "./hooks/use-digit-custom-dialog";
import useDigitDialog from "./hooks/use-digit-dialog";
import useDigitFormField from "./hooks/use-digit-form-field";
import useDigitFormFieldArray from "./hooks/use-digit-form-field-array";
import useDigitToast from "./hooks/use-digit-toast";

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
    /* Views */
    DigitToast,
    DigitDialog,
    DigitCustomDialog,
    DigitMenu,
    DigitTable,
    DigitCRUD,
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
    useDigitToast
};
