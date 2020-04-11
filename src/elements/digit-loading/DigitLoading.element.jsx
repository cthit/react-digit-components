import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import React from "react";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

const DigitLoading = ({ loading, size, flex, alignSelf, padding, margin }) => {
    const classes = useLayoutMaterialUi({ flex, alignSelf, padding, margin });

    if (!loading) {
        return null;
    }

    return <CircularProgress classes={classes} size={size} />;
};

DigitLoading.displayName = "DigitLoading";
DigitLoading.propTypes = {
    /** If true, then the loading animation will be rendered, else nothing will render. */
    loading: PropTypes.bool.isRequired,
    /** The size in px how big the loading circle should be. E.g. 30 or 60 */
    size: PropTypes.number,
    /** Controls the flex property for the most outer element in this component.*/
    flex: PropTypes.string,
    /** Controls the alignSelf property for the most outer element in this component.*/
    alignSelf: PropTypes.oneOf([
        "auto",
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "baseline",
        "initial",
        "inherit"
    ]),
    /** Padding property for the most outer element in this component.
     * It can either be a string, using the padding shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
    /** Margin property for the most outer element in this component.
     * It can either be a string, using the margin shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ])
};

DigitLoading.defaultProps = {
    loading: true,
    size: 40
};

export default DigitLoading;
