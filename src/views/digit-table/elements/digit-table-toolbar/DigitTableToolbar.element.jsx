import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
import React from "react";
import DigitTextField from "../../../../elements/digit-text-field";
import { Title } from "../../../../styles/digit-text/DigitText.styles";
import translations from "./DigitTableToolbar.element.translations.json";
import styled from "styled-components";
import useDigitTranslations from "../../../../hooks/use-digit-translations";

const TableTitle = styled(Title)`
    flex: 0 0 auto;
`;

const StyledToolbar = styled(Toolbar)`
    padding-top: 8px;
    min-width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
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
            <TableTitle
                text={
                    numSelected > 0
                        ? numSelected + " " + text.Selected
                        : titleText
                }
            />
            {search && (
                <DigitTextField
                    margin={{
                        left: "24px"
                    }}
                    flex={"1"}
                    size={{
                        maxWidth: "400px"
                    }}
                    outlined
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
