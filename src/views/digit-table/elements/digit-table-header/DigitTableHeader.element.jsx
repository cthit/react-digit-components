import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";
import React from "react";
import DigitIfElseRendering from "../../../../declaratives/digit-if-else-rendering";
import { Text } from "../../../../styles/digit-text/DigitText.styles";

const DigitTableHeader = ({
    order,
    orderBy,
    headerTexts,
    columnsOrder,
    onRequestSort
}) => {
    if (headerTexts == null) {
        return null;
    }

    return (
        <TableHead>
            <TableRow>
                {headerTexts.__checkbox != null && (
                    <TableCell>
                        <Text bold text={headerTexts.__checkbox} />
                    </TableCell>
                )}

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

                {headerTexts.__link != null && (
                    <TableCell>
                        <Text bold text={headerTexts.__link} />
                    </TableCell>
                )}
            </TableRow>
        </TableHead>
    );
};

DigitTableHeader.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

export default DigitTableHeader;
