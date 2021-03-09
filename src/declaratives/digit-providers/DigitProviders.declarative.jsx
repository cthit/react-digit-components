import StyledEngineProvider from "@material-ui/core/StyledEngineProvider";
import ThemeProvider from "@material-ui/core/styles/ThemeProvider";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { BrowserRouter, HashRouter, MemoryRouter } from "react-router-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { DigitTranslationsContextSingletonProvider } from "../../contexts/DigitTranslationsContext";
import { DigitToastContextSingletonProvider } from "../../contexts/DigitToastContext";
import { DigitDialogContextSingletonProvider } from "../../contexts/DigitDialogContext";
import { DigitGammaContextSingletonProvider } from "../../contexts/DigitGammaContext";

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
            components: {
                MuiTooltip: {
                    styleOverrides: {
                        tooltip: {
                            fontSize: 14
                        }
                    }
                },
                //TODO Remove this, used since it crashes otherwise.
                MuiButtonBase: {
                    defaultProps: {
                        // The props to apply
                        disableRipple: true // No more ripple, on the whole application 💣!
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
                },
                mode: "light"
            },
            ...props.theme
        });
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <DigitTranslationsContextSingletonProvider
                    defaultLanguage={defaultLanguage}
                >
                    {activeLanguage => (
                        <DigitToastContextSingletonProvider>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DigitDialogContextSingletonProvider>
                                    <DigitGammaContextSingletonProvider>
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
                                    </DigitGammaContextSingletonProvider>
                                </DigitDialogContextSingletonProvider>
                            </LocalizationProvider>
                        </DigitToastContextSingletonProvider>
                    )}
                </DigitTranslationsContextSingletonProvider>
            </ThemeProvider>
        </StyledEngineProvider>
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
