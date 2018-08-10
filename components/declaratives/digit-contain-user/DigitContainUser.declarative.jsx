import { connect } from "react-redux";
import { redirectTo } from "../../../app/views/gamma-redirect/GammaRedirect.view.action-creator";
import { toastOpen } from "../../../app/views/gamma-toast/GammaToast.view.action-creator";

import React from "react";

class ContainUserToAllowedPages extends React.Component {
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

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  redirectTo: to => dispatch(redirectTo(to)),
  toastOpen: data => dispatch(toastOpen(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainUserToAllowedPages);
