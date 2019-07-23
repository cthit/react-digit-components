import React from "react";
import { DigitAutocompleteSelectMultiple, DigitLayout } from "../../src";
import { Column } from "../../src/styles/digit-layout/DigitLayout.styles";
import { Text } from "../../src/styles/digit-text/DigitText.styles";

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
        const {
            disabled,
            upperLabel,
            lowerLabel,
            error,
            errorMessage
        } = this.props;

        return (
            <Column>
                <DigitLayout.Size maxWidth={"320px"}>
                    <DigitAutocompleteSelectMultiple
                        disabled={disabled}
                        upperLabel={upperLabel}
                        lowerLabel={lowerLabel}
                        error={error}
                        errorMessage={errorMessage}
                        selectableValues={suggestions}
                        value={this.state.selected}
                        onChange={this.onSelectedChange}
                    />
                </DigitLayout.Size>
                {this.state.selected.map(select => (
                    <Text key={select} text={select} />
                ))}
            </Column>
        );
    }
}

export default StoryDigitAutocompleteSelectMultiple;
