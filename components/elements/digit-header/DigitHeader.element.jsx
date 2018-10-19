import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import {
  ListItem,
  IconButton,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItemText,
  Hidden
} from "@material-ui/core";
import { Title } from "../../styles/digit-text/DigitText.styles";
import {
  Fill,
  Spacing,
  HideFill,
  Padding
} from "../../styles/digit-layout/DigitLayout.styles";
import MenuIcon from "@material-ui/icons/Menu";
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";

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
  position: absolute;
  margin-left: 240px;

  ${props =>
    props.navigation === "true" &&
    css`
      /*Medium device (md)*/
      @media (min-width: 960px) {
        width: calc(100vw - 241px);
      }
    `};
`;

const DigitTitle = styled(Title)`
  align-self: center;
`;

const HorizontalFill = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

const StyledToolbar = styled(Toolbar)`
  height: ${props => (props.height == null ? "64px" : props.height)};
  min-height: 0px;

  padding-left: 30px;
  padding-right: 8px;

  /*Medium device (md)*/
  @media (max-width: 960px) {
    padding-left: 8px;
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
      headerHeight
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
        <StyledAppBar navigation={(drawer != null).toString()}>
          <StyledToolbar height={headerHeight}>
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
              <DigitTitle text={title} white />
              {renderHeader()}
            </HorizontalFill>
          </StyledToolbar>
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
  renderMain: PropTypes.func.isRequired,
  renderDrawer: PropTypes.func,
  title: PropTypes.string,
  renderHeader: PropTypes.func
};

DigitHeader.defaultProps = {
  headerHeight: "64px"
};

export default DigitHeader;
