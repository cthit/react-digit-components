import StylesProvider from "@material-ui/styles/StylesProvider";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter, MemoryRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { dialog } from "../../views/digit-dialog/DigitDialog.view.reducer";
import { toast } from "../../views/digit-toast/DigitToast.view.reducer";
import { digitTranslations } from "../digit-translations/DigitTranslations.declarative.reducer";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import gammaUser from "../../reducers/GammaUser.reducer";

class DigitProviders extends React.Component {
    constructor(props) {
        super();

        this.store = createStore(
            createReducer({}),
            {
                ...props.preloadedState,
                digitTranslations: { activeLanguage: props.defaultLanguage }
            },
            applyMiddleware(logger, thunkMiddleware)
        );

        this.store.asyncReducers = {};

        this.store.injectReducer = (key, asyncReducer) => {
            this.store.asyncReducers[key] = asyncReducer;
            this.store.replaceReducer(createReducer(this.store.asyncReducers));
        };

        this.store.removeInjectedReducer = key => {
            delete this.store.asyncReducers[key];
            this.store.replaceReducer(createReducer(this.store.asyncReducers));
        };

        function createReducer(asyncReducers) {
            return combineReducers({
                toast,
                dialog,
                digitTranslations,
                gammaUser,
                ...asyncReducers,
                ...props.rootReducer
            });
        }

        this.theme = createMuiTheme({
            typography: {
                useNextVariants: true,
                fontSize: 16
            },
            overrides: {
                MuiTooltip: {
                    tooltip: {
                        fontSize: 14
                    }
                }
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
        const { children, hashRouter, memoryRouter } = this.props;
        return (
            <StylesProvider injectFirst>
                <ThemeProvider theme={this.theme}>
                    <Provider store={this.store}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            {hashRouter ? (
                                <HashRouter>{children}</HashRouter>
                            ) : memoryRouter ? (
                                <MemoryRouter>{children}</MemoryRouter>
                            ) : (
                                <BrowserRouter>{children}</BrowserRouter>
                            )}
                        </MuiPickersUtilsProvider>
                    </Provider>
                </ThemeProvider>
            </StylesProvider>
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
    /** Starting redux state for your application */
    preloadedState: PropTypes.object,
    /** All redux reducer from your application */
    rootReducer: PropTypes.object,
    /** Default language */
    defaultLanguage: PropTypes.string
};

DigitProviders.defaultProps = {
    theme: {},
    preloadedState: {},
    rootReducer: {},
    defaultLanguage: "en"
};

export default DigitProviders;
