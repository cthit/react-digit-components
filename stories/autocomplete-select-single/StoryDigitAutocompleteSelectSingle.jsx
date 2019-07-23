import React from "react";
import {
    DigitAutocompleteSelectMultiple,
    DigitAutocompleteSelectSingle,
    DigitLayout
} from "../../src";

const suggestions = [
    { label: "Afghanistan" },
    { label: "Aland Islands" },
    { label: "Albania" },
    { label: "Algeria" },
    { label: "American Samoa" },
    { label: "Andorra" },
    { label: "Angola" },
    { label: "Anguilla" },
    { label: "Antarctica" },
    { label: "Antigua and Barbuda" },
    { label: "Argentina" },
    { label: "Armenia" },
    { label: "Aruba" },
    { label: "Australia" },
    { label: "Austria" },
    { label: "Azerbaijan" },
    { label: "Bahamas" },
    { label: "Bahrain" },
    { label: "Bangladesh" },
    { label: "Barbados" },
    { label: "Belarus" },
    { label: "Belgium" },
    { label: "Belize" },
    { label: "Benin" },
    { label: "Bermuda" },
    { label: "Bhutan" },
    { label: "Bolivia, Plurinational State of" },
    { label: "Bonaire, Sint Eustatius and Saba" },
    { label: "Bosnia and Herzegovina" },
    { label: "Botswana" },
    { label: "Bouvet Island" },
    { label: "Brazil" },
    { label: "British Indian Ocean Territory" },
    { label: "Brunei Darussalam" }
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));

class StoryDigitAutocompleteSelectSingle extends React.Component {
    state = {
        selected: ""
    };

    onSelectedChange = e => {
        this.setState({
            selected: e.target.value
        });
    };

    render() {
        const {
            disabled,
            upperLabel,
            lowerLabel,
            error,
            errorMessage
        } = this.props;

        return (
            <DigitLayout.Size absWidth={"200px"}>
                <DigitAutocompleteSelectSingle
                    disabled={disabled}
                    upperLabel={upperLabel}
                    lowerLabel={lowerLabel}
                    error={error}
                    errorMessage={errorMessage}
                    selectableValues={suggestions}
                    value={this.state.selected}
                    onChange={this.onSelectedChange}
                />
                {this.state.selected}
            </DigitLayout.Size>
        );
    }
}

export default StoryDigitAutocompleteSelectSingle;
