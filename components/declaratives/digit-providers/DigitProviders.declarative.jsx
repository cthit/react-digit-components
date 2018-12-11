import {
    createGenerateClassName,
    createMuiTheme,
    jssPreset,
    MuiThemeProvider
} from "@material-ui/core/styles";
import { create } from "jss";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import PropTypes from "prop-types";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import JssProvider from "react-jss/lib/JssProvider";
import {
    LocalizeProvider,
    localizeReducer as localize,
    withLocalize
} from "react-localize-redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { dialog } from "../../views/digit-dialog/DigitDialog.view.reducer";
import { toast } from "../../views/digit-toast/DigitToast.view.reducer";
import { redirect } from "../../declaratives/digit-redirect/DigitRedirect.declarative.reducer";

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = "insertion-point-jss";

const loggerMiddleware = createLogger();

class DigitProviders extends React.Component {
    constructor(props) {
        super();

        this.store = createStore(
            combineReducers({
                ...props.rootReducer,
                localize,
                toast,
                dialog,
                redirect
            }),
            props.preloadedState,
            applyMiddleware(loggerMiddleware, thunkMiddleware)
        );

        this.theme = createMuiTheme({
            typography: {
                useNextVariants: true,
                fontSize: 16
            },
            palette: {
                primary: {
                    main: "#2196f3",
                    dark: "#1769aa",
                    light: "#4dabf5"
                },
                secondary: {
                    main: "#ff9100",
                    dark: "#b26500",
                    light: "#ffa733"
                }
            },
            ...props.theme
        });
    }

    render() {
        const { children, defaultLanguage, commonTranslations } = this.props;
        return (
            <MuiThemeProvider theme={this.theme}>
                <LocalizeProvider
                    store={this.store}
                    defaultLanguage={defaultLanguage}
                >
                    <LocalizeInitalizer commonTranslations={commonTranslations}>
                        <JssProvider
                            jss={jss}
                            generateClassName={generateClassName}
                        >
                            <Provider store={this.store}>
                                <BrowserRouter>
                                    <MuiPickersUtilsProvider
                                        utils={DateFnsUtils}
                                    >
                                        {children}
                                    </MuiPickersUtilsProvider>
                                </BrowserRouter>
                            </Provider>
                        </JssProvider>
                    </LocalizeInitalizer>
                </LocalizeProvider>
            </MuiThemeProvider>
        );
    }
}

DigitProviders.displayName = "DigitProviders";
DigitProviders.propTypes = {
    /** A way to customize material-ui. Warning: Try to avoid using this prop at any cost,
     * since the usage of material-ui isn't set in stone forever */
    theme: PropTypes.object,
    /** A single child element */
    children: PropTypes.element.isRequired,
    /** The default language that has to be either swedish (sv) or english (en)*/
    defaultLanguage: PropTypes.oneOf(["sv", "en"]),
    /** Starting redux state for your application */
    preloadedState: PropTypes.object,
    /** All redux reducer from your application */
    rootReducer: PropTypes.object,
    commonTranslations: PropTypes.object
};

DigitProviders.defaultProps = {
    defaultLanguage: "sv",
    theme: {},
    preloadedState: {},
    rootReducer: {},
    commonTranslations: {}
};

export default DigitProviders;

class DigitLocalizeInitalizer extends React.Component {
    constructor(props) {
        super();
        props.initialize({
            languages: [
                { name: "English", code: "en" },
                { name: "Swedish", code: "sv" }
            ],
            options: {
                renderToStaticMarkup,
                renderInnerHtml: true,
                defaultLanguage: props.defaultLanguage
            }
        });

        props.addTranslation({
            CommonTranslations: { ...props.commonTranslations }
        });
    }

    render() {
        const { children } = this.props;
        return children;
    }
}

const LocalizeInitalizer = withLocalize(DigitLocalizeInitalizer);
