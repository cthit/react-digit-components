import React from "react";
import { DigitDatePicker } from "../../src";

class StoryDigitDatePicker extends React.Component {
    state = {
        date: null
    };

    onDateChanged = e => {
        this.setState({
            date: e.target.value
        });
    };

    render() {
        const {
            upperLabel,
            style,
            lowerLabel,
            error,
            errorMessage
        } = this.props;
        const { date } = this.state;

        return (
            <DigitDatePicker
                lowerLabel={lowerLabel}
                error={error}
                errorMessage={errorMessage}
                outlined={style === "outlined"}
                filled={style === "filled"}
                upperLabel={upperLabel}
                value={date}
                onChange={this.onDateChanged}
            />
        );
    }
}

export default StoryDigitDatePicker;
