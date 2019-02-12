import { AppBar, Drawer, Hidden, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";
import { Title } from "../../styles/digit-text/DigitText.styles";
import { Row } from "../../styles/digit-layout/DigitLayout.styles";

const StyledMenuButton = styled(IconButton)`
    /*Medium device (md)*/
    @media (min-width: 960px) {
        display: none;
    }
`;

const StyledRoot = styled.div`
    min-height: 100vh;
    display: flex;
`;

const StyledAppBar = styled(AppBar)`
    ${props =>
        props.cssimagestring != null &&
        css`
            background-image: ${props => props.cssimagestring};
            background-position: center;
            background-size: cover;
        `};
    position: absolute;
    ${props =>
        props.navigation === "true" &&
        css`
            /*Medium device (md)*/
            @media (min-width: 960px) {
                width: calc(100vw - 241px);
                max-width: calc(100vw - 241px);
                margin-left: 241px;
            }
        `};
`;

const DigitTitle = styled(Title)`
    align-self: center;
`;

const HorizontalFill = styled.div`
    padding-top: 8px;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
`;

const StyledToolbar = styled(Toolbar)`
    height: ${props => (props.height == null ? "64px" : props.height)};
    min-height: 0px;

    padding-top: 8px;
    padding-left: 30px;
    padding-right: 8px;

    align-items: flex-start;

    /*Medium device (md)*/
    @media (max-width: 960px) {
        padding-left: ${props =>
            props.navigation === "true" ? "8px" : "32px"};
    }
`;

const StyledDrawer = styled(({ ...rest }) => (
    <Drawer {...rest} classes={{ paper: "paper" }} />
))`
    & .paper {
        width: 240px;
    }
`;

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: ${props =>
        props.headerHeight == null ? "64px" : props.headerHeight};

    ${props =>
        props.navigation === "true" &&
        css`
            /*Medium device (md)*/
            @media (min-width: 960px) {
                margin-left: 241px;
                width: calc(100vw - 241px);
            }
        `};
`;

class DigitHeader extends React.Component {
    state = {
        mobileOpen: false
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const {
            renderMain,
            renderDrawer,
            renderHeader,
            title,
            headerHeight,
            renderToolbar,
            cssImageString,
            renderTitle
        } = this.props;
        const { mobileOpen } = this.state;

        var drawer = null;

        if (renderDrawer != null) {
            drawer = renderDrawer(() => {
                this.setState({ mobileOpen: false });
            });
        }

        return (
            <StyledRoot>
                <StyledAppBar
                    cssimagestring={cssImageString}
                    position="static"
                    navigation={(drawer != null).toString()}
                >
                    <StyledToolbar
                        height={headerHeight}
                        navigation={(drawer != null).toString()}
                    >
                        <DigitIfElseRendering
                            test={drawer != null}
                            ifRender={() => (
                                <StyledMenuButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={this.handleDrawerToggle}
                                >
                                    <MenuIcon />
                                </StyledMenuButton>
                            )}
                        />

                        <HorizontalFill>
                            <Row>
                                <DigitIfElseRendering
                                    test={renderTitle == null}
                                    ifRender={() => (
                                        <DigitTitle text={title} white />
                                    )}
                                    elseRender={renderTitle}
                                />
                            </Row>
                            <Row>{renderHeader()}</Row>
                        </HorizontalFill>
                    </StyledToolbar>
                    {renderToolbar()}
                </StyledAppBar>
                <DigitIfElseRendering
                    test={drawer != null}
                    ifRender={() => (
                        <div>
                            <Hidden mdUp>
                                <StyledDrawer
                                    variant="temporary"
                                    anchor="left"
                                    open={mobileOpen}
                                    onClose={this.handleDrawerToggle}
                                    ModalProps={{
                                        keepMounted: true // Better open performance on mobile.
                                    }}
                                >
                                    {drawer}
                                </StyledDrawer>
                            </Hidden>
                            <Hidden smDown implementation="css">
                                <StyledDrawer variant="permanent" open>
                                    {drawer}
                                </StyledDrawer>
                            </Hidden>
                        </div>
                    )}
                />
                <StyledMain
                    headerHeight={headerHeight}
                    navigation={(drawer != null).toString()}
                >
                    {renderMain()}
                </StyledMain>
            </StyledRoot>
        );
    }
}

DigitHeader.displayName = "DigitHeader";
DigitHeader.propTypes = {
    /** A render prop to render main. Has no arguments. */
    renderMain: PropTypes.func.isRequired,
    /** A render prop to render the drawer. Has a closeDrawer function
     * that you can call to automatically close the drawer when a link has been pressed.
     * If null, then there's no drawer.
     */
    renderDrawer: PropTypes.func,
    /** A text title.  */
    title: PropTypes.string,
    /** A render prop to render in header, next to the title. */
    renderHeader: PropTypes.func,
    /** The height for the header. E.g. 100px or 20%. */
    headerHeight: PropTypes.string,
    /** A render prop to render in the toolbar, under the header. */
    renderToolbar: PropTypes.func,
    renderTitle: PropTypes.func
};

DigitHeader.defaultProps = {
    headerHeight: "64px",
    renderDrawer: null,
    renderHeader: () => null,
    renderToolbar: () => null,
    renderTitle: null,
    title: "My website"
};

export default DigitHeader;
