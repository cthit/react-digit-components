import React from "react";

import {
  DigitHeader,
  DigitLayout,
  DigitTextField,
  DigitButton,
  DigitDisplayData,
  DigitNavLink
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
              <DigitTextField
                upperLabel="Upper upper label"
                lowerLabel="Lower lower label"
                value={textFieldValue}
                onChange={this.onTextFieldChange}
              />
              <DigitButton text="Logga in" />
            </DigitLayout.Row>
          )
        }
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
              keysOrder={["firstName", "lastName", "email", "nick"]}
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

export default StoryDigitHeader;
