import StylesProvider from "@material-ui/styles/StylesProvider";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter, HashRouter, MemoryRouter } from "react-router-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { DigitTranslationsContextSingletonProvider } from "../../contexts/DigitTranslationsContext";
import { DigitGammaContextSingletonProvider } from "../../contexts/DigitGammaContext";
import { DigitToastContextSingletonProvider } from "../../contexts/DigitToastContext";
import { DigitDialogContextSingletonProvider } from "../../contexts/DigitDialogContext";

class DigitProviders extends React.Component {
    constructor(props) {
        super();

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
        const {
            children,
            hashRouter,
            memoryRouter,
            defaultLanguage
        } = this.props;
        return (
            <StylesProvider injectFirst>
                <ThemeProvider theme={this.theme}>
                    <DigitTranslationsContextSingletonProvider
                        defaultLanguage={defaultLanguage}
                    >
                        <DigitGammaContextSingletonProvider>
                            <DigitToastContextSingletonProvider>
                                <DigitDialogContextSingletonProvider>
                                    <MuiPickersUtilsProvider
                                        utils={DateFnsUtils}
                                    >
                                        {hashRouter ? (
                                            <HashRouter>{children}</HashRouter>
                                        ) : memoryRouter ? (
                                            <MemoryRouter>
                                                {children}
                                            </MemoryRouter>
                                        ) : (
                                            <BrowserRouter>
                                                {children}
                                            </BrowserRouter>
                                        )}
                                    </MuiPickersUtilsProvider>
                                </DigitDialogContextSingletonProvider>
                            </DigitToastContextSingletonProvider>
                        </DigitGammaContextSingletonProvider>
                    </DigitTranslationsContextSingletonProvider>
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
    /** Default language */
    defaultLanguage: PropTypes.string
};

DigitProviders.defaultProps = {
    theme: {},
    defaultLanguage: "en"
};

export default DigitProviders;
