import StylesProvider from "@material-ui/styles/StylesProvider";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { BrowserRouter, HashRouter, MemoryRouter } from "react-router-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { DigitTranslationsContextSingletonProvider } from "../../contexts/DigitTranslationsContext";
import { DigitToastContextSingletonProvider } from "../../contexts/DigitToastContext";
import { DigitDialogContextSingletonProvider } from "../../contexts/DigitDialogContext";
import { DigitGammaContextSingletonProvider } from "../../contexts/DigitGammaContext";
import svLocale from "date-fns/locale/sv";
import enLocale from "date-fns/locale/en-US";

const locales = {
    sv: svLocale,
    en: enLocale
};

const DigitProviders = ({
    children,
    hashRouter,
    memoryRouter,
    defaultLanguage,
    ...props
}) => {
    const theme = useMemo(() => {
        return createMuiTheme({
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
    }, [props]);

    const router = hashRouter
        ? children => <HashRouter>{children}</HashRouter>
        : memoryRouter
        ? children => <MemoryRouter>{children}</MemoryRouter>
        : children => <BrowserRouter>{children}</BrowserRouter>;

    return router(
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <DigitTranslationsContextSingletonProvider
                    defaultLanguage={defaultLanguage}
                >
                    {activeLanguage => (
                        <DigitToastContextSingletonProvider>
                            <MuiPickersUtilsProvider
                                utils={DateFnsUtils}
                                locale={locales[activeLanguage]}
                            >
                                <DigitDialogContextSingletonProvider>
                                    <DigitGammaContextSingletonProvider>
                                        {children}
                                    </DigitGammaContextSingletonProvider>
                                </DigitDialogContextSingletonProvider>
                            </MuiPickersUtilsProvider>
                        </DigitToastContextSingletonProvider>
                    )}
                </DigitTranslationsContextSingletonProvider>
            </ThemeProvider>
        </StylesProvider>
    );
};

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
