import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import translations from "./DigitTable.view.translations.json";
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
import DigitTextField from "../../elements/digit-text-field";
import { Heading5 } from "../../styles/digit-text/DigitText.styles";
import { Center } from "../../styles/digit-layout/DigitLayout.styles";
import DigitButton from "../../elements/digit-button";
import { Link } from "../../styles/digit-design/DigitDesign.styles";
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

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

const DigitTableHead = ({
    classes,
    order,
    orderBy,
    onRequestSort,
    headerTexts,
    columnsOrder
}) => {
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
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
                        <TableSortLabel>{headerTexts.__link}</TableSortLabel>
                    )}
                </TableCell>
            </TableRow>
        </TableHead>
    );
};

const useToolbarStyles = makeStyles(() => ({
    root: {
        justifyContent: "space-between"
    }
}));

const DigitTableToolbar = ({
    titleText,
    search,
    searchText,
    text,
    searchValue,
    onSearchUpdated
}) => {
    const classes = useToolbarStyles();

    return (
        <Toolbar className={classes.root}>
            <Typography
                className={classes.title}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                {titleText}
            </Typography>
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

const DigitTable = ({
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
    size,
    padding,
    margin,
    flex
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
        size,
        padding,
        margin
    });

    const header = titleText != null || search;

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const sortedData = useMemo(() => {
        const s = searchValue.trim();
        const filteredData =
            s === ""
                ? data
                : data.filter(row => {
                      for (var column of columnsOrder) {
                          if (
                              (row[column] + "")
                                  .toLowerCase()
                                  .includes(s.toLowerCase())
                          ) {
                              return true;
                          }
                      }
                      return false;
                  });

        return stableSort(filteredData, getComparator(order, orderBy));
    }, [data, searchValue, order, orderBy, columnsOrder]);

    const emptyRows =
        rowsPerPage -
        Math.min(rowsPerPage, sortedData.length - page * rowsPerPage);

    return (
        <Paper classes={layoutClasses}>
            {header && (
                <DigitTableToolbar
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
            )}
            <TableContainer>
                <Table
                    aria-labelledby="tableTitle"
                    size={dense ? "small" : "medium"}
                    aria-label="enhanced table"
                >
                    <DigitTableHead
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={sortedData.length}
                        headerTexts={headerTexts}
                        columnsOrder={columnsOrder}
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
                                    .map(row => (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={row[idProp]}
                                        >
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
                                    ))}
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
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

DigitTable.displayName = "DigitTable";
DigitTable.propTypes = {
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
    /** A key to text map, where the key are the column
     * and the text is what the user sees.s
     */
    headerTexts: PropTypes.objectOf(PropTypes.string).isRequired,
    /** The text that is shown if the table is emptyK */
    emptyTableText: PropTypes.string,
    /** The text of the title. */
    titleText: PropTypes.string,
    /** The text to show in the search bar.  Default is "Search" / "Sök"*/
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
    /**
     * If the padding should be less between the rows and columns
     */
    dense: PropTypes.bool
};

DigitTable.defaultProps = {
    search: false,
    showSearchableProps: false,
    searchText: "Search",
    titleText: "",
    emptyTableText: "The table is empty",
    size: {
        minWidth: "300px"
    },
    startOrderByDirection: "desc",
    startRowsPerPage: 5
};

export default DigitTable;
