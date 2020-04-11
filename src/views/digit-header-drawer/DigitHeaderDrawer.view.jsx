import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Row } from "../../styles/digit-layout/DigitLayout.styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

const breakpoint = "md";

const useStyles = makeStyles(theme => ({
    drawer: {
        display: "flex",
        position: "absolute",
        left: "0",
        top: "0",
        height: "auto",
        [theme.breakpoints.up(breakpoint)]: {
            width: ({ drawerWidth }) => drawerWidth,
            flexShrink: 0
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(breakpoint)]: {
            display: "none"
        }
    },
    drawerPaper: {
        width: ({ drawerWidth }) => drawerWidth
    },
    appBar: {
        [theme.breakpoints.up(breakpoint)]: {
            width: ({ drawerWidth }) => `calc(100% - ${drawerWidth})`,
            maxWidth: ({ drawerWidth }) => `calc(100% - ${drawerWidth})`,
            marginLeft: ({ drawerWidth }) => drawerWidth
        }
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
        [theme.breakpoints.up(breakpoint)]: {
            marginLeft: ({ drawerWidth }) => drawerWidth
        },
        padding: ({ mainPadding }) => mainPadding,
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

const DigitHeaderDrawer = ({
    renderDrawer,
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
    headerRowProps,
    drawerWidth
}) => {
    const hasCustomHeader = renderCustomHeader != null;
    const hasToolbar = renderToolbar != null;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up(breakpoint));

    const classes = useStyles({
        headerHeight,
        mainPadding,
        toolbarHeight,
        backgroundImage,
        backgroundPosition,
        backgroundSize,
        titleColor,
        hasToolbar,
        drawerWidth
    });
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    const drawer = renderDrawer(() => setMobileOpen(false));

    return (
        <>
            <AppBar
                position={"relative"}
                className={
                    classes.appBar +
                    " " +
                    (backgroundImage != null ? classes.appBarBackground : "")
                }
            >
                <Toolbar className={classes.header}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
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
            <nav className={classes.drawer}>
                {!matches && (
                    <Drawer
                        variant="temporary"
                        anchor={"left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                )}
                {matches && (
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                )}
            </nav>
            <main className={classes.content}>{renderMain()}</main>
        </>
    );
};

DigitHeaderDrawer.displayName = "DigitHeaderDrawer";
DigitHeaderDrawer.propTypes = {
    /** A render prop to render main. Has no arguments. */
    renderMain: PropTypes.func.isRequired,
    /** A render prop to render the drawer. Has a closeDrawer function
     * that you can call to automatically close the drawer when a link has been pressed.
     * If null, then there's no drawer.
     */
    renderDrawer: PropTypes.func.isRequired,
    /** A text title.  */
    title: PropTypes.string,
    /** A render prop to render in header, next to the title. */
    renderHeader: PropTypes.func,
    /** The height for the header. E.g. 100px or 20%. */
    headerHeight: PropTypes.string,
    /** A render prop to render in the toolbar, under the header. */
    renderToolbar: PropTypes.func,
    renderTitle: PropTypes.func,
    renderFooter: PropTypes.func
};

DigitHeaderDrawer.defaultProps = {
    renderFooter: () => null,
    renderDrawer: () => null,
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
    },
    drawerWidth: "240px"
};

export default DigitHeaderDrawer;
