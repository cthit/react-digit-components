import React from "react";
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
  height: 64px;
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
  margin-top: 64px;

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
    const { renderMain, renderDrawer, title } = this.props;
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
          <StyledToolbar>
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
        <StyledMain navigation={(drawer != null).toString()}>
          {renderMain()}
        </StyledMain>
      </StyledRoot>
    );
  }
}

export default DigitHeader;
