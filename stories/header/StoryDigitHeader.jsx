import React from "react";

import {
    DigitHeader,
    DigitLayout,
    DigitTextField,
    DigitButton,
    DigitDisplayData,
    DigitNavLink,
    DigitTabs,
    DigitMenu
} from "../../components";

import Send from "@material-ui/icons/Send";
import Info from "@material-ui/icons/Info";
import Code from "@material-ui/icons/Code";

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
            headerHeight,
            navigation,
            icon,
            title
        } = this.props;
        const { textFieldValue } = this.state;

        return (
            <DigitHeader
                title={title}
                headerHeight={headerHeight + "px"}
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
                renderToolbar={() => customToolbarDemo && <TabsToolbar />}
                renderMain={() => (
                    <DigitLayout.Center>
                        <DigitDisplayData
                            fixedWidth={"200px"}
                            data={{
                                firstName: "Asdf",
                                lastName: "Asdfsson",
                                email: "email",
                                nick: "Asdfasdf"
                            }}
                            keysText={{
                                firstName: "Förnamn",
                                lastName: "Efternamn",
                                email: "Email",
                                nick: "Nick"
                            }}
                            keysOrder={[
                                "firstName",
                                "lastName",
                                "email",
                                "nick"
                            ]}
                        />
                    </DigitLayout.Center>
                )}
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
