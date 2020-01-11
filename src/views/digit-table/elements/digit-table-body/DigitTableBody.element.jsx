import Checkbox from "@material-ui/core/Checkbox";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import React from "react";
import DigitIfElseRendering from "../../../../declaratives/digit-if-else-rendering";
import DigitButton from "../../../../elements/digit-button";
import { Link } from "../../../../styles/digit-design/DigitDesign.styles";
import { Text } from "../../../../styles/digit-text/DigitText.styles";
import styled from "styled-components";

const StyledCheckbox = styled(Checkbox)`
    text-align: center;
`;

const StyledTableRow = styled(TableRow)`
    height: 48px;
    display: table-row;
    border: 0;
`;

const StyledTableCell = styled(TableCell)`
    display: table-cell;
    padding: 20px 24px;
    font-size: 14px;
    text-align: left;
    border-bottom: 1px solid rgba(244, 244, 244, 1);
`;

const DigitTableBody = ({
    page,
    rowsPerPage,
    data,
    isSelected,
    handleClick,
    rowShouldBeShown,
    headerTexts,
    columnsOrder,
    idProp,
    search
}) => (
    <TableBody>
        {data
            .filter(n => {
                return !search || rowShouldBeShown(n);
            })
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(n => {
                const selected = isSelected(n[idProp]);
                return (
                    <StyledTableRow
                        hover
                        key={n[idProp]}
                        role="checkbox"
                        aria-checked={selected}
                        tabIndex={-1}
                        selected={selected}
                    >
                        {headerTexts.__checkbox != null && (
                            <StyledTableCell>
                                <StyledCheckbox
                                    onClick={event =>
                                        handleClick(event, n[idProp])
                                    }
                                    checked={selected}
                                />
                            </StyledTableCell>
                        )}

                        {columnsOrder.map(column => (
                            <StyledTableCell
                                key={column}
                                datatitle={headerTexts[column]}
                            >
                                <Text text={n[column]} />
                            </StyledTableCell>
                        ))}

                        {headerTexts.__link != null && (
                            <StyledTableCell datatitle={headerTexts.__link}>
                                <Link to={n.__link}>
                                    <DigitButton
                                        text={headerTexts.__link}
                                        raised
                                    />
                                </Link>
                            </StyledTableCell>
                        )}
                        {headerTexts.__link == null && <StyledTableCell />}
                    </StyledTableRow>
                );
            })}
    </TableBody>
);

DigitTableBody.propTypes = {
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object),
    isSelected: PropTypes.func,
    handleClick: PropTypes.func,
    rowShouldBeShown: PropTypes.func,
    headerTexts: PropTypes.objectOf(PropTypes.string),
    columnsOrder: PropTypes.arrayOf(PropTypes.string),
    idProp: PropTypes.string
};

export default DigitTableBody;
