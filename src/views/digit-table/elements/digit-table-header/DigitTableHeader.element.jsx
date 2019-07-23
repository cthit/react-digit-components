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
