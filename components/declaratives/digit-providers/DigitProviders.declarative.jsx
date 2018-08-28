import React from "react";
import { combineReducers } from "redux";
import { localizeReducer as localize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { LocalizeProvider, withLocalize } from "react-localize-redux";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import JssProvider from "react-jss/lib/JssProvider";

import { toast } from "../../views/digit-toast/DigitToast.view.reducer";
import { dialog } from "../../views/digit-dialog/DigitDialog.view.reducer";

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = "insertion-point-jss";

const loggerMiddleware = createLogger();

const theme = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};

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
  }

  render() {
    const { children, defaultLanguage } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <LocalizeProvider store={this.store} defaultLanguage={defaultLanguage}>
          <LocalizeInitalizer>
            <JssProvider jss={jss} generateClassName={generateClassName}>
              <Provider store={this.store}>
                <BrowserRouter>{children}</BrowserRouter>
              </Provider>
            </JssProvider>
          </LocalizeInitalizer>
        </LocalizeProvider>
      </ThemeProvider>
    );
  }
}

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
