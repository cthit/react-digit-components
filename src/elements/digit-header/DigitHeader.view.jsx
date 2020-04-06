import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Row } from "../../styles/digit-layout/DigitLayout.styles";

const useStyles = makeStyles(theme => ({
    appBar: {
        maxWidth: "100vw !important",
        overflow: "hidden"
    },
    appBarBackground: {
        backgroundImage: props => props.backgroundImage,
        backgroundPosition: props => props.backgroundPosition,
        backgroundSize: props => props.backgroundSize
    },
    header: {
        height: props => props.headerHeight + " !important",
        minHeight: props => props.headerHeight + " !important"
    },
    toolbar: {
        height: props => props.toolbarHeight + " !important",
        minHeight: props => props.toolbarHeight + " !important"
    },
    content: {
        padding: props => props.mainPadding,
        flexGrow: "1",
        display: "flex",
        minHeight: ({ headerHeight, hasToolbar, toolbarHeight }) =>
            `calc(100vh - ${headerHeight} - ${
                hasToolbar ? toolbarHeight : "0px"
            })`
    },
    title: {
        color: props => props.titleColor,
        alignSelf: "center"
    }
}));

const DigitHeader = ({
    renderMain,
    renderHeader,
    renderCustomHeader,
    renderToolbar,
    title,
    mainPadding,
    headerHeight,
    toolbarHeight,
    backgroundImage,
    backgroundPosition,
    backgroundSize,
    titleColor,
    headerRowProps
}) => {
    const hasCustomHeader = renderCustomHeader != null;
    const hasToolbar = renderToolbar != null;

    const classes = useStyles({
        headerHeight,
        mainPadding,
        toolbarHeight,
        backgroundImage,
        backgroundPosition,
        backgroundSize,
        titleColor,
        hasToolbar
    });

    return (
        <>
            <AppBar
                position="relative"
                className={
                    classes.appBar +
                    " " +
                    (backgroundImage != null ? classes.appBarBackground : "")
                }
            >
                <Toolbar className={classes.header}>
                    {hasCustomHeader && renderCustomHeader()}
                    {!hasCustomHeader && (
                        <Row {...headerRowProps}>
                            <Typography
                                variant="h6"
                                noWrap
                                className={classes.title}
                            >
                                {title}
                            </Typography>
                            {renderHeader()}
                        </Row>
                    )}
                </Toolbar>
                {hasToolbar && (
                    <Toolbar className={classes.toolbar}>
                        {renderToolbar()}
                    </Toolbar>
                )}
            </AppBar>
            <main className={classes.content}>{renderMain()}</main>
        </>
    );
};

DigitHeader.displayName = "DigitHeader";
DigitHeader.propTypes = {
    /** A render prop to render main. Has no arguments. */
    renderMain: PropTypes.func.isRequired,
    /** A text title.  */
    title: PropTypes.string,
    /** A render prop to render in header, next to the title. */
    renderHeader: PropTypes.func,
    /** A render prop to render in header, next to the title. */
    renderCustomHeader: PropTypes.func,
    /** The height for the header. E.g. 100px or 20%. */
    headerHeight: PropTypes.string,
    /** A render prop to render in the toolbar, under the header. */
    renderToolbar: PropTypes.func,

    backgroundImage: PropTypes.string,
    backgroundPosition: PropTypes.string,
    backgroundSize: PropTypes.string
};

DigitHeader.defaultProps = {
    headerHeight: "64px",
    toolbarHeight: "64px",
    mainPadding: "16px",
    renderHeader: () => null,
    renderCustomHeader: null,
    renderToolbar: null,
    renderMain: () => null,
    renderTitle: null,
    title: "My Website",
    backgroundImage: null,
    backgroundPosition: "center",
    backgroundSize: "cover",
    titleColor: "white",
    headerRowProps: {
        flex: "1"
    }
};

export default DigitHeader;
