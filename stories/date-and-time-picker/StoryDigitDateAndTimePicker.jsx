import React from "react";
import { DigitDateAndTimePicker } from "../../components";

class StoryDigitDateAndTimePicker extends React.Component {
    state = {
        date: null
    };

    onDateChanged = newDate => {
        this.setState({
            date: newDate
        });
    };

    render() {
        const { date } = this.state;
        const {
            upperLabel,
            style,
            lowerLabel,
            error,
            errorMessage
        } = this.props;

        console.log(style);

        return (
            <DigitDateAndTimePicker
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

export default StoryDigitDateAndTimePicker;
