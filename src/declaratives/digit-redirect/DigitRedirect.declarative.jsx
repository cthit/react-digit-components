import PropTypes from "prop-types";
import React from "react";
import { Redirect } from "react-router-dom";
import DigitRedirectExternal from "../digit-redirect-external";

class DigitRedirect extends React.Component {
    componentDidUpdate() {
        const { redirectPath, redirectFinished } = this.props;
        if (redirectPath != null) {
            redirectFinished();
        }
    }

    render() {
        const {
            redirectPath,
            currentPath,
            externalRedirect,
            window
        } = this.props;

        if (redirectPath != null && currentPath !== redirectPath) {
            if (externalRedirect) {
                return (
                    <DigitRedirectExternal window={window} to={redirectPath} />
                );
            } else {
                return <Redirect to={redirectPath} push={true} />;
            }
        }
        return null;
    }
}

DigitRedirect.displayName = "DigitRedirect";
DigitRedirect.propTypes = {
    /** Where to redirect. Path is relative from the root, so do not include the websites adress */
    redirectPath: PropTypes.string,
    /** Callback function when the redirect has been made */
    redirectFinished: PropTypes.func,
    /** The current path of the application. Used to prevent trying to redirect to a path the website already is at.*/
    currentPath: PropTypes.string
};

export default DigitRedirect;
