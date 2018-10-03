import React from "react";
import PropTypes from "prop-types";
import { combineReducers } from "redux";
import { localizeReducer as localize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { LocalizeProvider, withLocalize } from "react-localize-redux";
import { create } from "jss";
import {
  createGenerateClassName,
  jssPreset,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import JssProvider from "react-jss/lib/JssProvider";

import { toast } from "../../views/digit-toast/DigitToast.view.reducer";
import { dialog } from "../../views/digit-dialog/DigitDialog.view.reducer";

import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";

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
        dialog
      }),
      props.preloadedState,
      applyMiddleware(loggerMiddleware, thunkMiddleware)
    );

    this.theme = createMuiTheme({
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
    const { children, defaultLanguage } = this.props;
    return (
      <MuiThemeProvider theme={this.theme}>
        <LocalizeProvider store={this.store} defaultLanguage={defaultLanguage}>
          <LocalizeInitalizer>
            <JssProvider jss={jss} generateClassName={generateClassName}>
              <Provider store={this.store}>
                <BrowserRouter>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
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

DigitProviders.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.element.isRequired,
  defaultLanguage: PropTypes.string,
  preloadedState: PropTypes.object,
  rootReducer: PropTypes.object
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
        defaultLanguage:
          props.defaultLanguage == null ? "sv" : props.defaultLanguage
      }
    });
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

const LocalizeInitalizer = withLocalize(DigitLocalizeInitalizer);
