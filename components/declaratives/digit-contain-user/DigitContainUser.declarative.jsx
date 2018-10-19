import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { redirectTo } from "../../../app/views/digit-redirect/DigitRedirect.view.action-creator";
import { toastOpen } from "../../../app/views/digit-toast/DigitToast.view.action-creator";

class DigitContainUser extends React.Component {
  componentDidUpdate(prevProps) {
    var {
      allowedBasePaths,
      allowedFullPaths,
      currentPath,
      redirectTo,
      to,
      toastTextOnRedirect,
      toastOpen
    } = this.props;

    if (allowedFullPaths == null) {
      allowedFullPaths = [];
    }
    allowedFullPaths.push(to);

    var allowedOnThisPage = false;

    if (allowedBasePaths != null) {
      for (var i in allowedBasePaths) {
        const basePath = allowedBasePaths[i];
        if (currentPath.startsWith(basePath)) {
          allowedOnThisPage = true;
          break;
        }
      }
    }

    for (var i in allowedFullPaths) {
      const fullPath = allowedFullPaths[i];
      if (currentPath === fullPath) {
        allowedOnThisPage = true;
        break;
      }
    }

    if (!allowedOnThisPage) {
      redirectTo(to);
      toastOpen({
        text: toastTextOnRedirect
      });
    }
  }

  render() {
    return null;
  }
}

DigitContainUser.displayName = "DigitContainUser";
DigitContainUser.propTypes = {
  /** E.g. [/users, /songs]. The user may now be at /users/* or /songs/**/
  allowedBasePaths: PropTypes.arrayOf(PropTypes.string),
  /** E.g. [/users/asdf, /songs/fdsa]. The user may now be at the two specified paths */
  allowedFullPaths: PropTypes.arrayOf(PropTypes.string),
  /** The current path on the website*/
  currentPath: PropTypes.string,
  /** redirectTo is the redirect function supplied by react-digit-components */
  redirectTo: PropTypes.string,
  /** What the website should redirect to if they are not on an allowed path. E.g. a login portal */
  to: PropTypes.string,
  /** The text to be shown on the toast if the user needs to be redirected */
  toastTextOnRedirect: PropTypes.string,
  /** toastOpen is the toast function supplie by react-digit-components */
  toastOpen: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  redirectTo: to => dispatch(redirectTo(to)),
  toastOpen: data => dispatch(toastOpen(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DigitContainUser);
