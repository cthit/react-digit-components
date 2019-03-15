import React from "react";
import styled from "styled-components";

import {
    DigitHeader,
    DigitLayout,
    DigitButton,
    DigitDisplayData,
    DigitNavLink,
    DigitTabs,
    DigitMenu,
    DigitText
} from "../../components";

import Send from "@material-ui/icons/Send";
import Info from "@material-ui/icons/Info";
import Code from "@material-ui/icons/Code";
import { Text } from "../../components/styles/digit-text/DigitText.styles";

const StyledIcon = styled.img`
    width: 32px;
    height: 32px;
`;

class StoryDigitHeader extends React.Component {
    state = {
        textFieldValue: ""
    };

    onTextFieldChange = e => {
        this.setState({
            textFieldValue: e.target.value
        });
    };

    render() {
        const {
            customHeaderDemo,
            customToolbarDemo,
            customFooterDemo,
            headerHeight,
            navigation,
            icon,
            title,
            customImage,
            customTitleDemo
        } = this.props;
        const { textFieldValue } = this.state;

        return (
            <DigitHeader
                title={title}
                headerHeight={headerHeight + "px"}
                cssImageString={
                    customImage
                        ? "url(https://images.unsplash.com/photo-1546706872-9c90b8d0c94f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
                        : null
                }
                renderHeader={() =>
                    customHeaderDemo && (
                        <DigitLayout.Row>
                            <DigitButton text="Logga in" />
                            <DigitMenu
                                onClick={value => {
                                    console.log(value + " has been selected");
                                }}
                                valueToTextMap={{
                                    first_option: "First option",
                                    second_option: "Second option"
                                }}
                            />
                        </DigitLayout.Row>
                    )
                }
                renderTitle={
                    customTitleDemo
                        ? () => (
                              <React.Fragment>
                                  <StyledIcon
                                      src={"https://i.imgur.com/wicS3do.png"}
                                  />
                                  <DigitText.Title
                                      white
                                      text={"Heey custom title"}
                                  />
                              </React.Fragment>
                          )
                        : null
                }
                renderToolbar={() => customToolbarDemo && <TabsToolbar />}
                renderMain={() => {
                    const output = [];
                    for (var i = 0; i < 1000; i++) {
                        output.push(<Text text={"Hej " + i} />);
                    }
                    return output;
                }}
                renderDrawer={
                    navigation
                        ? closeDrawer => (
                              <DigitNavLink
                                  onClick={closeDrawer}
                                  link="/hej"
                                  text="Hej"
                                  icon={
                                      icon === "Send"
                                          ? Send
                                          : icon === "Info"
                                          ? Info
                                          : icon === "Code"
                                          ? Code
                                          : null
                                  }
                              />
                          )
                        : null
                }
                renderFooter={() =>
                    customFooterDemo ? (
                        <Text text={"Made by digIT with <3"} />
                    ) : null
                }
            />
        );
    }
}

class TabsToolbar extends React.Component {
    state = {
        selected: "/page-1"
    };

    onSelectedChange = selected => {
        this.setState({
            selected: selected
        });
    };

    render() {
        return (
            <DigitTabs
                inheritBackground
                selected={this.state.selected}
                onChange={this.onSelectedChange}
                tabs={this._generateTabs(100)}
            />
        );
    }

    _generateTabs(nLabels) {
        const output = [];
        for (let i = 0; i < nLabels; i++) {
            output.push({
                text: "Page " + (i + 1),
                value: "/page-" + (i + 1)
            });
        }
        return output;
    }
}

export default StoryDigitHeader;
