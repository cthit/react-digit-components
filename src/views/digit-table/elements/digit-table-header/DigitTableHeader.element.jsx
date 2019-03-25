import {
    Hidden,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import DigitIfElseRendering from "../../../../declaratives/digit-if-else-rendering";
import { Text } from "../../../../styles/digit-text/DigitText.styles";

const StyledCheckboxTableCell = styled(TableCell)`
    padding-left: 24px;
`;

const DigitTableHeader = ({
    order,
    orderBy,
    headerTexts,
    columnsOrder,
    onRequestSort
}) => (
    <DigitIfElseRendering
        test={headerTexts != null}
        ifRender={() => (
            <TableHead>
                <TableRow>
                    <DigitIfElseRendering
                        test={headerTexts.__checkbox != null}
                        ifRender={() => (
                            <TableCell>
                                <Text bold text={headerTexts.__checkbox} />
                            </TableCell>
                        )}
                    />

                    {columnsOrder.map(column => (
                        <TableCell
                            key={column}
                            column={column}
                            sortDirection={orderBy === column ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === column}
                                direction={order}
                                onClick={event => onRequestSort(event, column)}
                            >
                                <Text bold text={headerTexts[column]} />
                            </TableSortLabel>
                        </TableCell>
                    ))}

                    <DigitIfElseRendering
                        test={headerTexts.__link != null}
                        ifRender={() => (
                            <TableCell>
                                <Text bold text={headerTexts.__link} />
                            </TableCell>
                        )}
                    />
                </TableRow>
            </TableHead>
        )}
    />
);

DigitTableHeader.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

export default DigitTableHeader;
