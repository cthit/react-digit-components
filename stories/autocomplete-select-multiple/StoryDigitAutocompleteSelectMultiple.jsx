import React from "react";
import { DigitAutocompleteSelectMultiple, DigitLayout } from "../../components";
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
        selected: ["Benin", "Belarus", "Austria"]
    };

    onSelectedChange = e => {
        this.setState({
            selected: e.target.value
        });
    };

    render() {
        return (
            <Column>
                <DigitLayout.Size absWidth={"200px"}>
                    <DigitAutocompleteSelectMultiple
                        selectableValues={suggestions}
                        value={this.state.selected}
                        onChange={this.onSelectedChange}
                    />
                </DigitLayout.Size>
                {this.state.selected.map(select => (
                    <Text
                        key={select.value}
                        text={select.value}
                        key={select.value}
                    />
                ))}
            </Column>
        );
    }
}

export default StoryDigitAutocompleteSelectMultiple;
