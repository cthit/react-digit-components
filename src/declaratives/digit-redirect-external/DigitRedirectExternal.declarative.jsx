import React from "react";

class DigitRedirectExternal extends React.Component {
    componentDidMount() {
        this.props.window.location.replace(this.props.to);
    }
    render() {
        return null;
    }
}

export default DigitRedirectExternal;
