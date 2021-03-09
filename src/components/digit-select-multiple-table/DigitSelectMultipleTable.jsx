import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import translations from "./DigitSelectMultipleTable.view.translations.json";
import useDigitTranslations from "../../hooks/use-digit-translations";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import { Heading5, Text } from "../../styles/digit-text/DigitText.styles";
import DigitTextField from "../digit-text-field";
import { Center } from "../../styles/digit-layout/DigitLayout.styles";
import { Link } from "../../styles/digit-design/DigitDesign.styles";
import DigitButton from "../digit-button";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator, selected, idProp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const aSelected = selected.indexOf(a[0][idProp]);
        const bSelected = selected.indexOf(b[0][idProp]);

        if (aSelected !== -1 && bSelected !== -1) {
            return a[1] - b[1];
        } else if (aSelected !== -1) {
            return -1;
        } else if (bSelected !== -1) {
            return 1;
        }

        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

const DigitSelectMultipleTableHead = ({
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headerTexts,
    columnsOrder,
    disableSelectAll
}) => {
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    {!disableSelectAll && (
                        <Checkbox
                            indeterminate={
                                numSelected > 0 && numSelected < rowCount
                            }
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    )}
                </TableCell>
                {columnsOrder.map(column => (
                    <TableCell
                        key={column}
                        align={"left"}
                        sortDirection={orderBy === column ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === column}
                            direction={orderBy === column ? order : "asc"}
                            onClick={createSortHandler(column)}
                        >
                            {headerTexts[column]}
                            {orderBy === column ? (
                                <span className={classes.visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell>
                    {headerTexts.__link != null && (
                        <Text alignRight text={headerTexts.__link} />
                    )}
                </TableCell>
            </TableRow>
        </TableHead>
    );
};

const useToolbarStyles = makeStyles(theme => ({
    root: {
        justifyContent: "space-between"
    }
}));

const DigitSelectMultipleTableToolbar = ({
    titleText,
    search,
    searchText,
    text,
    searchValue,
    onSearchUpdated,
    numSelected
}) => {
    const classes = useToolbarStyles();

    return (
        <Toolbar className={classes.root}>
            {numSelected > 0 ? (
                <Typography
                    className={classes.title}
                    color="inherit"
                    variant="h6"
                    component="div"
                >
                    {numSelected + " " + text.Selected}
                </Typography>
            ) : (
                <Typography
                    className={classes.title}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    {titleText}
                </Typography>
            )}

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
                        searchText == null ? text.Searchtext : searchText
                    }
                    value={searchValue}
                    onChange={e => onSearchUpdated(e.target.value)}
                />
            )}
        </Toolbar>
    );
};

DigitSelectMultipleTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles(theme => ({
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1
    }
}));

const DigitSelectMultipleTable = ({
    data,
    headerTexts,
    columnsOrder,
    idProp,
    titleText,
    dense,
    startOrderBy,
    startOrderByDirection,
    emptyTableText,
    searchText,
    search,
    startRowsPerPage,
    alignSelf,
    justifySelf,
    size,
    padding,
    margin,
    flex,
    value,
    onChange,
    disableSelectAll,
    gridColumn,
    gridRow
}) => {
    const classes = useStyles();
    const [order, setOrder] = useState(startOrderByDirection);
    const [orderBy, setOrderBy] = useState(startOrderBy);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(startRowsPerPage);
    const [text] = useDigitTranslations(translations);
    const [searchValue, setSearchValue] = useState("");
    const layoutClasses = useLayoutMaterialUi({
        flex,
        alignSelf,
        justifySelf,
        size,
        padding,
        margin,
        gridColumn,
        gridRow
    });

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = data.map(n => n[idProp]);
            onChange(newSelecteds);
            return;
        }
        onChange([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = value.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(value, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(value.slice(1));
        } else if (selectedIndex === value.length - 1) {
            newSelected = newSelected.concat(value.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                value.slice(0, selectedIndex),
                value.slice(selectedIndex + 1)
            );
        }

        onChange(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = id => value.indexOf(id) !== -1;

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    //sort on selected always being selected on top
    const joinedData = useMemo(() => {
        if (!search) {
            return null;
        }

        const output = {};
        for (var row of data) {
            output[row[idProp]] = Object.values(row).join("").toLowerCase();
        }
        return output;
    }, [data, search, idProp]);

    const sortedData = useMemo(() => {
        const searchTerms = searchValue.split(" ").map(a => a.toLowerCase());
        const filteredData =
            searchTerms.length === 0 ||
            (searchTerms.length === 1 && searchTerms[0] === "")
                ? data
                : data.filter(row => {
                      const joinedRow = joinedData[row[idProp]];
                      for (var searchTerm of searchTerms) {
                          if (!joinedRow.includes(searchTerm)) {
                              return false;
                          }
                      }
                      return true;
                  });

        return stableSort(
            filteredData,
            getComparator(order, orderBy),
            value,
            idProp
        );
    }, [data, searchValue, order, orderBy, idProp, joinedData, value]);

    return (
        <Paper classes={layoutClasses}>
            <DigitSelectMultipleTableToolbar
                numSelected={value.length}
                titleText={titleText}
                search={search}
                searchText={searchText}
                text={text}
                searchValue={searchValue}
                onSearchUpdated={val => {
                    setSearchValue(val);
                    setPage(0);
                }}
            />
            <TableContainer>
                <Table
                    aria-labelledby="tableTitle"
                    size={dense ? "small" : "medium"}
                    aria-label="enhanced table"
                >
                    <DigitSelectMultipleTableHead
                        numSelected={value.length}
                        onSelectAllClick={handleSelectAllClick}
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={sortedData.length}
                        headerTexts={headerTexts}
                        columnsOrder={columnsOrder}
                        disableSelectAll={disableSelectAll}
                    />
                    <TableBody>
                        {sortedData.length === 0 && (
                            <tr>
                                <td colSpan="100">
                                    <Center size={{ height: "250px" }}>
                                        <Heading5 text={emptyTableText} />
                                    </Center>
                                </td>
                            </tr>
                        )}
                        {sortedData.length > 0 && (
                            <>
                                {sortedData
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(
                                            row[idProp]
                                        );
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key={row[idProp]}
                                                onClick={event =>
                                                    handleClick(
                                                        event,
                                                        row[idProp]
                                                    )
                                                }
                                                selected={isItemSelected}
                                                role="checkbox"
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            "aria-labelledby": labelId
                                                        }}
                                                    />
                                                </TableCell>
                                                {columnsOrder.map(column => (
                                                    <TableCell key={column}>
                                                        {row[column]}
                                                    </TableCell>
                                                ))}
                                                {row.__link != null && (
                                                    <TableCell
                                                        align={"right"}
                                                        padding={"none"}
                                                    >
                                                        <Link to={row.__link}>
                                                            <DigitButton
                                                                text={
                                                                    headerTexts.__link
                                                                }
                                                                outlined
                                                            />
                                                        </Link>
                                                    </TableCell>
                                                )}
                                                {row.__link == null && (
                                                    <TableCell />
                                                )}
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height:
                                                (dense ? 34.55 : 54.55) *
                                                emptyRows
                                        }}
                                    >
                                        <TableCell
                                            colSpan={columnsOrder.length}
                                        />
                                    </TableRow>
                                )}
                            </>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={sortedData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

DigitSelectMultipleTable.displayName = "DigitSelectMultipleTable";
DigitSelectMultipleTable.propTypes = {
    /** The starting column to order rows by */
    startOrderBy: PropTypes.string.isRequired,
    /** In what direction the start order should be */
    startOrderByDirection: PropTypes.oneOf(["desc", "asc"]),
    /** How many rows that the table starts with */
    startRowsPerPage: PropTypes.oneOf([5, 10, 25]),
    /** The specified order of the columns. */
    columnsOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
    /** The column that has the id. */
    idProp: PropTypes.string.isRequired,
    /** The data. An array of objects where the object
     * has the keys specified in headerTexts.
     */
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    /** When the selected rows has been updated. The first argument is
     * the current array of selected rows. You need to keep
     * selected updated yourself.
     */
    onChange: PropTypes.func,
    /** An array of selected. When onChange is called,
     * you need to save the selected rows.*/
    value: PropTypes.array,
    /** A key to text map, where the key are the column
     * and the text is what the user sees.s
     */
    headerTexts: PropTypes.objectOf(PropTypes.string).isRequired,
    /** The text that is shown if the table is emptyK */
    emptyTableText: PropTypes.string,
    /** The text of the title. */
    titleText: PropTypes.string,
    /** The text to show in the searchbar. */
    searchText: PropTypes.string,
    /** If true, then there's a search input field. */
    search: PropTypes.bool,
    /** Controls the alignSelf property for the most outer element in this component.*/
    alignSelf: PropTypes.oneOf([
        "auto",
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "baseline",
        "initial",
        "inherit"
    ]),
    /** Controls the justifySelf property for the most outer element in this component. */
    justifySelf: PropTypes.oneOf([
        "enter",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "left",
        "right",
        "baseline",
        "inherit",
        "initial"
    ]),
    /** Controls the size for the most outer element in this component. You can set minWidth/Height, maxWidth/Height
     * and width/height via an object
     */
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        minWidth: PropTypes.string,
        minHeight: PropTypes.string,
        maxWidth: PropTypes.string,
        maxHeight: PropTypes.string
    }),
    /** Padding property for the most outer element in this component.
     * It can either be a string, using the padding shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
    /** Margin property for the most outer element in this component.
     * It can either be a string, using the margin shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
    /** Controls the flex property for the most outer element in this component.*/
    flex: PropTypes.string,
    /** Disable select all checkbox */
    disableSelectAll: PropTypes.bool,
    /** Controls grid-column-start and grid-column-end */
    gridColumn: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    }),
    /** Controls grid-row-start and grid-row-end */
    gridRow: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string
    })
};

DigitSelectMultipleTable.defaultProps = {
    search: false,
    showSearchableProps: false,
    searchText: "Search",
    titleText: "",
    emptyTableText: "The table is empty",
    size: {
        minWidth: "300px"
    },
    startOrderByDirection: "desc",
    value: [],
    onChange: () => {},
    startRowsPerPage: 5
};

export default DigitSelectMultipleTable;
