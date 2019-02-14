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
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { dialog } from "../../views/digit-dialog/DigitDialog.view.reducer";
import { toast } from "../../views/digit-toast/DigitToast.view.reducer";
import { redirect } from "../../declaratives/digit-redirect/DigitRedirect.declarative.reducer";
import { digitTranslations } from "../digit-translations/DigitTranslations.declarative.reducer";

const generateClassName = createGenerateClassName();
const jss = create({
    ...jssPreset(),
    insertionPoint: document.getElementById("jss-insertion-point")
});

const loggerMiddleware = createLogger();

class DigitProviders extends React.Component {
    constructor(props) {
        super();

        this.store = createStore(
            combineReducers({
                ...props.rootReducer,
                toast,
                dialog,
                redirect,
                digitTranslations
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
        const { children } = this.props;
        return (
            <MuiThemeProvider theme={this.theme}>
                <JssProvider jss={jss} generateClassName={generateClassName}>
                    <Provider store={this.store}>
                        <BrowserRouter>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                {children}
                            </MuiPickersUtilsProvider>
                        </BrowserRouter>
                    </Provider>
                </JssProvider>
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
    /** Starting redux state for your application */
    preloadedState: PropTypes.object,
    /** All redux reducer from your application */
    rootReducer: PropTypes.object
};

DigitProviders.defaultProps = {
    theme: {},
    preloadedState: {},
    rootReducer: {}
};

export default DigitProviders;
