import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
import React from "react";
import DigitTextField from "../../../../elements/digit-text-field";
import { Fill } from "../../../../styles/digit-layout/DigitLayout.styles";
import { Title } from "../../../../styles/digit-text/DigitText.styles";
import translations from "./DigitTableToolbar.element.translations.json";
import styled from "styled-components";

const TableTitle = styled(Title)`
    flex: 0 0 auto;
`;

const SearchInput = styled(DigitTextField)`
    width: 400px;
    min-width: 400px !important;
`;

const StyledToolbar = styled(Toolbar)`
    min-width: 600px;
    display: flex;
    justify-content: space-between;
`;

const DigitTableToolbar = ({
    showSearchableProps,
    numSelected,
    searchInput,
    onSearchInputChange,
    headerTexts,
    titleText,
    searchText,
    search
}) => {
    const [text] = useDigitTranslations(translations);

    return (
        <StyledToolbar>
            <Fill>
                <TableTitle
                    text={
                        numSelected > 0
                            ? numSelected + " " + text.Selected
                            : titleText
                    }
                />
            </Fill>
            <Fill>
                {search && (
                    <SearchInput
                        upperLabel={
                            searchText +
                            (showSearchableProps != null && showSearchableProps
                                ? " " +
                                  _getAllPossibleThingsToSearchFor(headerTexts)
                                : "")
                        }
                        value={searchInput}
                        onChange={onSearchInputChange}
                    />
                )}
            </Fill>
        </StyledToolbar>
    );
};

DigitTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    showSearchableProps: PropTypes.bool,
    searchInput: PropTypes.string,
    onSearchInputChange: PropTypes.func,
    headerTexts: PropTypes.objectOf(PropTypes.string),
    titleText: PropTypes.string,
    searchText: PropTypes.string
};

function _getAllPossibleThingsToSearchFor(headerTexts) {
    var output = "(";

    const texts = Object.keys(headerTexts)
        .filter(key => !key.startsWith("__"))
        .map(key => headerTexts[key]);

    var first = true;

    for (const key in texts) {
        if (texts.hasOwnProperty(key)) {
            const element = texts[key];
            if (!first) {
                output = output.concat(", " + element);
            } else {
                first = false;
                output = output.concat(element);
            }
        }
    }

    output = output.concat(")");
    return output;
}

export default DigitTableToolbar;
