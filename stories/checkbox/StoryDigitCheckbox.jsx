import React from "react";
import { DigitCheckbox } from "../../components";

class StoryDigitCheckbox extends React.Component {
    state = {
        checked: false
    };

    onCheckedChange = e => {
        this.setState({
            checked: e.target.checked
        });
    };

    render() {
        const {
            color,
            label,
            disabled,
            error,
            errorMessage,
            onChange,
            onBlur
        } = this.props;

        const { checked } = this.state;

        return (
            <DigitCheckbox
                disabled={disabled}
                error={error}
                errorMessage={errorMessage}
                label={label}
                primary={color === "primary"}
                secondary={color === "secondary"}
                value={checked}
                onChange={e => {
                    this.onCheckedChange(e);
                    onChange(e);
                }}
                onBlur={onBlur}
            />
        );
    }
}

export default StoryDigitCheckbox;
