import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class DigitRedirect extends React.Component {
  componentDidUpdate() {
    const { redirectPath, redirectFinished } = this.props;
    if (redirectPath != null) {
      redirectFinished();
    }
  }

  render() {
    const { redirectPath, currentPath } = this.props;

    if (redirectPath != null && currentPath !== redirectPath) {
      return <Redirect to={redirectPath} push={true} />;
    }
    return null;
  }
}

DigitRedirect.propTypes = {
  redirectPath: PropTypes.string,
  redirectFinished: PropTypes.func,
  currentPath: PropTypes.string
};

export default DigitRedirect;
