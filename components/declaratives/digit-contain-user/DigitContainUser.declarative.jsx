import React from "react";
import PropTypes from "prop-types";

class DigitContainUser extends React.Component {
    componentDidUpdate(prevProps) {
        var {
            allowedBasePaths,
            allowedFullPaths,
            currentPath,
            digitRedirectTo,
            to,
            toastTextOnRedirect,
            digitToastOpen,
            externalRedirect
        } = this.props;

        allowedFullPaths.push(to);

        var allowedOnThisPage = false;

        for (var i in allowedBasePaths) {
            const basePath = allowedBasePaths[i];
            if (currentPath.startsWith(basePath)) {
                allowedOnThisPage = true;
                break;
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
            digitRedirectTo(to, externalRedirect);
            digitToastOpen({
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
    /** What the website should redirect to if they are not on an allowed path. E.g. a login portal */
    to: PropTypes.string,
    /** The text to be shown on the toast if the user needs to be redirected */
    toastTextOnRedirect: PropTypes.string,
    /** digitRedirectTo is the redirect function supplied by react-digit-components */
    digitRedirectTo: PropTypes.func,
    /** toastOpen is the toast function supplied by react-digit-components */
    digitToastOpen: PropTypes.func,
    /** If the "to" should be external or not */
    externalRedirect: PropTypes.bool
};

DigitContainUser.defaultProps = {
    allowedBasePaths: [],
    allowedFullPaths: [],
    currentPath: "",
    to: "",
    toastTextOnRedirect: "",
    digitRedirectTo: () => {},
    digitToastOpen: () => {}
};

export default DigitContainUser;
