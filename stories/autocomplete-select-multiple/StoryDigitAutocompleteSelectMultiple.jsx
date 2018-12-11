import React from "react";
import { DigitAutocompleteSelectMultiple } from "../../components";
import { Column } from "../../components/styles/digit-layout/DigitLayout.styles";
import { Text } from "../../components/styles/digit-text/DigitText.styles";

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

class StoryDigitAutocompleteSelectMultiple extends React.Component {
    state = {
        selected: []
    };

    onSelectedChange = selected => {
        this.setState({
            selected: selected
        });
    };

    render() {
        return (
            <Column>
                <DigitAutocompleteSelectMultiple
                    selectableValues={suggestions}
                    value={this.state.selected}
                    onChange={this.onSelectedChange}
                />
                {this.state.selected.map(select => (
                    <Text text={select.value} key={select.value} />
                ))}
            </Column>
        );
    }
}

export default StoryDigitAutocompleteSelectMultiple;
